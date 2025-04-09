import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			const response = await fetch('http://localhost:5000/logout', {
				method: 'POST',
				credentials: 'include',
			});

			if (response.ok) {
				alert('Logged out successfully');
				navigate('/');
			} else {
				alert('Logout failed');
			}
		} catch (error) {
			console.error('Logout error:', error);
		}
	};

	return <button onClick={handleLogout}>Logout</button>;
}
