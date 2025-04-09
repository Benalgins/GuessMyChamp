import React, { useEffect, useState } from 'react';

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
				setUserChampions(results.map((user) => user));
				const data = await response.json();
				if (response.ok) {
					alert(`${data.message}`);
				} else {
					alert(`${data.message}`);
				}
			} catch (error) {
				console.error('Request failed', error);
			}
		}
		fetchData();
	}, []);
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
					{userChampions.map((champions, index) => {
						console.log(champions);
					})}
				</div>
			</div>
		</div>
	);
}
