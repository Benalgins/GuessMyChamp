import React, { useState } from 'react';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:5000/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			});
			if (response.ok) {
				alert('Login successful');
			} else {
				alert('Login failed');
			}
		} catch (error) {
			console.error('Request failed', err);
		}
	};

	return (
		<div className="section login">
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
