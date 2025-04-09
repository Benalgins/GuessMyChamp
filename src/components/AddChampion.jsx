import React, { useState } from 'react';
import PORT from '../config/config';
import AlertBox from './Alertbox';

export default function AddChampion() {
	const [championsName, setChampionsName] = useState('');
	const [championsPosition, setChampionsPosition] = useState('');
	const [championsGender, setChampionsGender] = useState('');
	const [championsYear, setChampionsYear] = useState('');
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
				<input
					type="text"
					id="championsPosition"
					name="championsPosition"
					placeholder="Champion's Lane"
					value={championsPosition}
					onChange={(e) => setChampionsPosition(e.target.value)}
					required
				/>

				<label htmlFor="championsGender">What gender is the champion:</label>
				<input
					type="text"
					id="championsGender"
					name="championsGender"
					placeholder="Champion's Gender"
					value={championsGender}
					onChange={(e) => setChampionsGender(e.target.value)}
					required
				/>

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
	);
}
