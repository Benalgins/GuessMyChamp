import React, { useEffect, useState } from 'react';
import UserDisplay from './User-display';
import PORT from '../../config/config';

export default function Leaderboard() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(`${PORT}/leaderboard`);
				const results = await response.json();
				setUsers(results.map((user) => user));
			} catch (error) {
				console.error('Request failed', error);
			}
		}
		fetchData();
	}, []);
	return (
		<div className="section leaderboard">
			<div className="leaderboard-content">
				<div className="title">
					<h2>Here are the top 10 users!</h2>
				</div>
				<div className="top-users">
					{users.map((userData, index) => (
						<UserDisplay
							key={index}
							index={index}
							username={userData.username}
							points={userData.points}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
