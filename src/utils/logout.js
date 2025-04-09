import Cookies from 'js-cookie';
import { AuthContext } from '../components/AuthContex';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PORT from '../config/config';

export function useLogoutHandler() {
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

	return handleLogout;
}
