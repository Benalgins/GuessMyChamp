import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatpassword] = useState('');
	const [alert, setAlert] = useState({ show: false, message: '', type: '' });
	const navigate = useNavigate();

	useEffect(() => {
		let timer;
		if (alert.show) {
			timer = setTimeout(() => {
				setAlert({ ...alert, show: false });
			}, 1000);
		}

		return () => clearTimeout(timer);
	}, [alert.show]);

	const showAlert = (message, type) => {
		setAlert({ show: true, message, type });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:5000/register', {
				method: 'POST',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password, repeatPassword }),
			});
			const data = await response.json();
			if (response.ok) {
				setEmail('');
				setPassword('');
				setRepeatpassword('');
				showAlert(`Register successful: ${data.message}`, 'success');
				setTimeout(() => navigate('/'), 1000);
			} else {
				showAlert(`Login failed: ${data.message || 'Unknown error'}`, 'error');
			}
		} catch (error) {
			console.error('Request failed', error);
			showAlert('Request failed', 'error');
		}
	};

	return (
		<div className="register">
			{alert.show && (
				<div className={`alert-container ${alert.type}`}>
					<p>{alert.message}</p>
				</div>
			)}
			<h2>Register on our website</h2>
			<div className="register-container">
				<form onSubmit={handleSubmit}>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<label htmlFor="login-password">Password:</label>
					<input
						type="password"
						id="login-password"
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						placeholder="Password"
					/>
					<label htmlFor="repeat-password">Repeat Password:</label>
					<input
						type="password"
						id="repeatPassword"
						name="repeatPassword"
						value={repeatPassword}
						onChange={(e) => setRepeatpassword(e.target.value)}
						required
						placeholder="Repeat Password"
					/>
					<input type="submit" className="btn submit" value="Register" />
				</form>
			</div>
		</div>
	);
}
