import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PORT from '../config/config';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
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

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`${PORT}/login`, {
				method: 'POST',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			});
			const data = await response.json();
			if (response.ok) {
				showAlert(`Login successful: ${data.message}`, 'success');
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
		<div className="section login">
			{alert.show && (
				<div className={`alert-container ${alert.type}`}>
					<p>{alert.message}</p>
				</div>
			)}
			<div className="login-container">
				<h2>Login</h2>
				<form className="login-form" onSubmit={handleLogin}>
					<label htmlFor="username">Email:</label>
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
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<input type="submit" className="btn submit" value="Login" />
				</form>
				<p className="field">
					If you don't have profile click <a href="/register">here</a>!
				</p>
			</div>
		</div>
	);
}
