import React, { useEffect, useState } from 'react';
import PORT from '../../config/config.js';
import { Link } from 'react-router-dom';
import AlertBox from '../Alertbox.jsx';

export default function Demo() {
	const [allChampions, setAllChampions] = useState([]);
	const [hiddenChampion, setHiddenChampion] = useState(null);
	const [guesses, setGuesses] = useState([]);
	const [input, setInput] = useState('');
	const [alert, setAlert] = useState({ show: false, message: '', type: '' });

	useEffect(() => {
		const fetchChampions = async () => {
			const res = await fetch(`${PORT}/demo`);
			const data = await res.json();
			setAllChampions(data);
			setHiddenChampion(data[Math.floor(Math.random() * data.length)]);
		};

		fetchChampions();
	}, []);

	const showAlert = (message, type) => {
		setAlert({ show: true, message, type });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const guess = allChampions.find(
			(c) => c.name.toLowerCase() === input.toLowerCase()
		);

		if (guess) {
			const result = {
				...guess,
				correct: {
					name: guess.name === hiddenChampion.name,
					gender: guess.gender === hiddenChampion.gender,
					position: guess.position === hiddenChampion.position,
					releaseYear: guess.releaseYear === hiddenChampion.releaseYear,
					resource: guess.resource === hiddenChampion.releaseYear,
					range: guess.range === hiddenChampion.range,
					region: guess.region === hiddenChampion.region,
				},
			};
			setGuesses([result, ...guesses]);
			setInput('');
		} else {
			showAlert('We still dont have this champ , add it!', 'error');
		}
	};

	return (
		<div className="section demo">
			<AlertBox
				alert={alert}
				onClose={() => setAlert({ ...alert, show: false })}
			/>
			<div className="guess-container">
				<div className="demo-title">
					<h2>
						Give a guess for a champion. If you find missing hop on and{' '}
						<Link to={'/add-champion'}>Add it now</Link>!
					</h2>
				</div>

				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Guess the champion..."
						value={input}
						onChange={(e) => setInput(e.target.value)}
						required
					/>
					<button type="submit">Submit</button>
				</form>
			</div>

			<div className="guesses">
				{guesses.map((guess, index) => (
					<div key={index} className="guess-row">
						<img
							src={`https://ddragon.leagueoflegends.com/cdn/15.7.1/img/champion/${guess.name}.png`}
							alt={guess.name}
							width="50"
						/>
						<div className={`box ${guess.correct.name ? 'green' : 'red'}`}>
							{guess.name}
						</div>
						<div className={`box ${guess.correct.gender ? 'green' : 'red'}`}>
							{guess.gender}
						</div>
						<div className={`box ${guess.correct.position ? 'green' : 'red'}`}>
							{guess.position}
						</div>
						<div
							className={`box ${guess.correct.releaseYear ? 'green' : 'red'}`}
						>
							{guess.releaseYear}
						</div>
						<div className={`box ${guess.correct.resource ? 'green' : 'red'}`}>
							{guess.resource}
						</div>
						<div className={`box ${guess.correct.range ? 'green' : 'red'}`}>
							{guess.range}
						</div>
						<div className={`box ${guess.correct.region ? 'green' : 'red'}`}>
							{guess.region}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
