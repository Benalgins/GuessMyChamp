import React, { useEffect, useState } from 'react';
import ChampionProfile from './Champion-profile';
import PORT from '../../config/config';

export default function MyChampions() {
	const [userChampions, setUserChampions] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(`${PORT}/my-champions`, {
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
		const confirmDelete = window.confirm(
			'Are you sure you want to delete this champion? This will also remove 10 points!'
		);

		if (!confirmDelete) return;
		try {
			const response = await fetch(`${PORT}/champions/${championId}`, {
				method: 'DELETE',
				credentials: 'include',
			});
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
						Here you can <span className="green-span">Update</span> or{' '}
						<span className="red-span">Delete</span> the champions you added!
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
								// onEdit={handleEdit}
							/>
						))
					)}
				</div>
			</div>
		</div>
	);
}
