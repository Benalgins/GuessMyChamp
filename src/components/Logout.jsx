import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { AuthContext } from './AuthContex';

import PORT from '../config/config';

export default function Logout() {
	const navigate = useNavigate();
	const { setIsAuthenticated } = useContext(AuthContext);

	const handleLogout = async () => {
		try {
			const response = await fetch(`${PORT}/logout`, {
				method: 'POST',
				credentials: 'include',
			});

			if (response.ok) {
				alert('Logged out successfully');
				Cookies.remove('userId');
				setIsAuthenticated(false);
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
