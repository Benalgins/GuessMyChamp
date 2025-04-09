import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import Cookies from 'js-cookie';
import { AuthContext } from './AuthContex';

import PORT from '../config/config';
import AlertBox from './Alertbox';

export default function Navigation() {
	const navigate = useNavigate();
	const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
	const [alert, setAlert] = useState({ show: false, message: '', type: '' });

	const showAlert = (message, type) => {
		setAlert({ show: true, message, type });
	};

	const logoutHandle = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`${PORT}/logout`, {
				method: 'POST',
				credentials: 'include',
			});

			if (response.ok) {
				showAlert(`Logout successfully`, 'success');
				Cookies.remove('userId');
				setIsAuthenticated(false);
				navigate('/');
			} else {
				showAlert(`Failed to logout`, 'error');
			}
		} catch (error) {
			console.error('Logout error:', error);
		}
	};

	return (
		<div className="section navigation">
			<AlertBox
				alert={alert}
				onClose={() => setAlert({ ...alert, show: false })}
			/>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<div className="logo">
						<img src="../public/images/logo.png" alt="" />
					</div>
				</Link>
				<nav className="nav">
					<Link to="/leaderboard">
						<p>Leaderboard</p>
					</Link>
					<Link to="/catalog">
						<p>Catalog</p>
					</Link>

					{isAuthenticated ? (
						<>
							<Link to="/my-champions">
								<p>My Champions</p>
							</Link>
							<Link to="/add-champion">
								<p>Add Champion</p>
							</Link>
							<a onClick={logoutHandle} style={{ cursor: 'pointer' }}>
								<p>Logout</p>
							</a>
						</>
					) : (
						<>
							<Link to="/login">
								<p>Login</p>
							</Link>
							<Link to="/register">
								<p>Register</p>
							</Link>
						</>
					)}
				</nav>
			</div>
		</div>
	);
}
