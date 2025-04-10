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
	const [championsStyle, setChampionsStyle] = useState('');
	const [championsResources, setChampionsResources] = useState('');
	const [championsRegion, setChampionsRegion] = useState('');
	const [error, setError] = useState('');

	useEffect(() => {
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
				setChampionsStyle(data.range);
				setChampionsResources(data.resource);
				setChampionsRegion(data.region);
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
			const formattedChampionName =
				name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
			if (!championsList.includes(formattedChampionName)) {
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
					range: championsStyle,
					resource: championsResources,
					region: championsRegion,
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
			<div className="addChampion-container">
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
					<label htmlFor="championsStyle">Style of fighting:</label>
					<select
						id="championsStyle"
						name="championsStyle"
						value={championsStyle}
						onChange={(e) => setChampionsStyle(e.target.value)}
						required
					>
						<option value="" disabled>
							Range or Melee
						</option>
						<option value="melee">Melee</option>
						<option value="range">Range</option>
					</select>
					<label htmlFor="championsResources">Champion's resources:</label>
					<select
						id="championsResources"
						name="championsResources"
						value={championsResources}
						onChange={(e) => setChampionsResources(e.target.value)}
						required
					>
						<option value="" disabled>
							Resources
						</option>
						<option value="mana">Mana</option>
						<option value="manaless">Manaless</option>
						<option value="energy">Energy</option>
						<option value="fury">Fury</option>
						<option value="flow">Flow</option>
						<option value="heat">Heat</option>
						<option value="ammo">Ammo</option>
						<option value="health">Health</option>
					</select>
					<label htmlFor="championsRegion">Champion's region:</label>
					<select
						id="championsRegion"
						name="championsRegion"
						value={championsRegion}
						onChange={(e) => setChampionsRegion(e.target.value)}
						required
					>
						<option value="" disabled>
							Region
						</option>
						<option value="demacia">Demacia</option>
						<option value="noxus">Noxus</option>
						<option value="piltover">Piltover</option>
						<option value="zaun">Zaun</option>
						<option value="bandle City">Bandle City</option>
						<option value="shurima">Shurima</option>
						<option value="the Void">The Void</option>
						<option value="shadow Isles">Shadow Isles</option>
						<option value="bilgewater">Bilgewater</option>
						<option value="targon">Targon</option>
						<option value="freljord">Freljord</option>
						<option value="ixtal">Ixtal</option>
						<option value="ionia">Ionia</option>
						<option value="kathkan">Kathkan</option>
						<option value="camavor">Camavor</option>
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
		</div>
	);
}
