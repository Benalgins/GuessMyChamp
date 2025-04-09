import React, { useEffect, useState } from 'react';
import ChampionDisplay from './Champion-display';
import PORT from '../../config/config';

export default function Catalog() {
	const [champions, setChampions] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(`${PORT}/catalog`);
				const results = await response.json();
				setChampions(results.map((champion) => champion.name));
			} catch (error) {
				console.error('Request failed', error);
			}
		}
		fetchData();
	}, []);
	return (
		<div className="section catalog">
			<div className="catalog-content">
				<div className="title">
					<h2>Here are all Champions of League of Legends added so far!</h2>
					<p>
						If you find a missing champion be the first to add it and get{' '}
						<span>10 points</span>!
					</p>
				</div>
				<div className="all-champions">
					{champions.map((champion) => (
						<ChampionDisplay key={champion} name={champion} />
					))}
				</div>
			</div>
		</div>
	);
}
