import React, { useEffect, useState } from 'react';
import ChampionProfile from './Champion-profile';

export default function MyChampions() {
	const [userChampions, setUserChampions] = useState([]);
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch('http://localhost:5000/my-champions', {
					method: 'GET',
					credentials: 'include',
				});
				const results = await response.json();
				console.log(results);
				if (response.ok) {
					setUserChampions(results.map((user) => user));
				} else {
					alert(`${results.message}`);
				}
			} catch (error) {
				console.error('Request failed', error);
			}
		}
		fetchData();
	}, []);

	const handleDelete = async (championId) => {
		try {
			const response = await fetch(
				`http://localhost:5000/champions/${championId}`,
				{
					method: 'DELETE',
					credentials: 'include',
				}
			);
			if (response.ok) {
				setUserChampions((prev) =>
					prev.filter((champ) => champ._id !== championId)
				);
			} else {
				const data = await response.json();
				alert(data.message);
			}
		} catch (err) {
			console.error('Delete failed:', err);
		}
	};

	return (
		<div className="section myChampions">
			<div className="champions-container">
				<div className="title">
					<h2>
						Here you can <span className="green">Update</span> or{' '}
						<span className="red">Delete</span> the champions you added!
					</h2>
					<p>But be carefull , removing a champion also removes the points!</p>
				</div>
				<div className="champions-box">
					{userChampions.length < 1 ? (
						<div className="missing-content">
							<h2>No champions added yet. Start by adding some champions!</h2>
						</div>
					) : (
						userChampions.map((champions) => (
							<ChampionProfile
								key={champions._id}
								_id={champions._id}
								name={champions.name}
								position={champions.position}
								gender={champions.gender}
								releaseYear={champions.releaseYear}
								onDelete={handleDelete}
							/>
						))
					)}
				</div>
			</div>
		</div>
	);
}
