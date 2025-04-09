import React from 'react';
import { useNavigate } from 'react-router-dom';
import PORT from '../config/config';

export default function Logout() {
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			const response = await fetch(`${PORT}/logout`, {
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
