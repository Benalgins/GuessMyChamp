import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PORT from '../../config/config';

export default function ChampionEdit() {
	const { championId } = useParams();
	const navigate = useNavigate();

	const [championsName, setChampionsName] = useState('');
	const [championsPosition, setChampionsPosition] = useState('');
	const [championsGender, setChampionsGender] = useState('');
	const [championsYear, setChampionsYear] = useState('');
	const [error, setError] = useState('');

	useEffect(() => {
		console.log(championId);

		async function fetchChampion() {
			try {
				const response = await fetch(`${PORT}/champions/${championId}`, {
					method: 'GET',
					credentials: 'include',
				});
				const data = await response.json();
				setChampionsName(data.name);
				setChampionsPosition(data.position);
				setChampionsGender(data.gender);
				setChampionsYear(data.releaseYear);
			} catch (err) {
				console.error('Error loading champion data:', err);
			}
		}

		if (championId) {
			fetchChampion();
		} else {
			console.error('Champion ID is undefined');
		}
	}, [championId]);

	const checkChampionExists = async (name) => {
		try {
			const response = await fetch(
				'https://ddragon.leagueoflegends.com/cdn/15.7.1/data/en_US/champion.json'
			);
			const championsData = await response.json();
			const championsList = Object.keys(championsData.data);

			if (!championsList.includes(name)) {
				setError('Champion not found in the League of Legends database');
				return false;
			}
			setError('');
			return true;
		} catch (err) {
			console.error('Error fetching Riot champions data:', err);
			setError('Error checking champion data');
			return false;
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const isValidChampion = await checkChampionExists(championsName);

		if (!isValidChampion) {
			return;
		}

		try {
			const response = await fetch(`${PORT}/champions/${championId}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				credentials: 'include',
				body: JSON.stringify({
					name: championsName,
					position: championsPosition,
					gender: championsGender,
					releaseYear: championsYear,
				}),
			});

			if (response.ok) {
				navigate('/my-champions');
			} else {
				const data = await response.json();
				alert(data.message);
			}
		} catch (err) {
			console.error('Update failed:', err);
		}
	};

	return (
		<div className="section addChampion">
			<div className="title">
				<h2>Edit Your Champion!</h2>
			</div>
			<form className="addChampion-form" onSubmit={handleSubmit}>
				<label htmlFor="championsName">Champion Name:</label>
				<input
					type="text"
					id="championsName"
					name="championsName"
					placeholder="Champion's name"
					value={championsName}
					onChange={(e) => setChampionsName(e.target.value)}
					required
				/>
				{error && <p style={{ color: 'red' }}>{error}</p>}{' '}
				<label htmlFor="championsPosition">
					Which lane is the champion often played:
				</label>
				<select
					id="championsPosition"
					name="championsPosition"
					value={championsPosition}
					onChange={(e) => setChampionsPosition(e.target.value)}
					required
				>
					<option value="" disabled>
						Select a lane
					</option>
					<option value="Top">Top</option>
					<option value="Jungle">Jungle</option>
					<option value="Mid">Mid</option>
					<option value="Marksman">Marksman</option>
					<option value="Support">Support</option>
				</select>
				<label htmlFor="championsGender">What gender is the champion:</label>
				<select
					id="championsGender"
					name="championsGender"
					value={championsGender}
					onChange={(e) => setChampionsGender(e.target.value)}
					required
				>
					<option value="" disabled>
						Select gender
					</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
					<option value="Cosmic">Cosmic</option>
					<option value="Demon">Demon</option>
				</select>
				<label htmlFor="championsYear">
					What year was the champion originally released:
				</label>
				<input
					type="number"
					id="championsYear"
					name="championsYear"
					placeholder="Champion's release year"
					value={championsYear}
					onChange={(e) => setChampionsYear(e.target.value)}
					required
				/>
				<input type="submit" className="btn submit" value="Save Changes" />
			</form>
		</div>
	);
}
