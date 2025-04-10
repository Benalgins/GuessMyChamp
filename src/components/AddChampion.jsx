import React, { useState } from 'react';
import PORT from '../config/config';
import AlertBox from './Alertbox';

export default function AddChampion() {
	const [championsName, setChampionsName] = useState('');
	const [championsPosition, setChampionsPosition] = useState('');
	const [championsGender, setChampionsGender] = useState('');
	const [championsYear, setChampionsYear] = useState('');
	const [championsStyle, setChampionsStyle] = useState('');
	const [championsResources, setChampionsResources] = useState('');
	const [championsRegion, setChampionsRegion] = useState('');
	const [alert, setAlert] = useState({ show: false, message: '', type: '' });

	const showAlert = (message, type) => {
		setAlert({ show: true, message, type });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const championData = {
			name: championsName,
			position: championsPosition,
			gender: championsGender,
			range: championsStyle,
			resource: championsResources,
			region: championsRegion,
			releaseYear: championsYear,
		};

		try {
			const response = await fetch(`${PORT}/add-champion`, {
				method: 'POST',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(championData),
			});

			const data = await response.json();
			if (response.ok) {
				showAlert(`${data.message}`, 'success');
				setChampionsName('');
				setChampionsPosition('');
				setChampionsGender('');
				setChampionsYear('');
				setChampionsStyle('');
				setChampionsResources('');
				setChampionsRegion('');
			} else {
				showAlert(`${data.message}`, 'error');
			}
		} catch (error) {
			console.error('Request failed', error);
		}
	};

	return (
		<div className="section addChampion">
			<AlertBox
				alert={alert}
				onClose={() => setAlert({ ...alert, show: false })}
			/>
			<div className="addChampion-container">
				<div className="title">
					<h2>Add Champion to the Pool!</h2>
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
							Select gender
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

					<input type="submit" className="btn submit" value="Add Champion" />
				</form>
			</div>
		</div>
	);
}
