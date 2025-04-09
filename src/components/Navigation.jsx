import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthContex';

export default function Navigation() {
	const { isAuthenticated } = useContext(AuthContext);

	return (
		<div className="section navigation">
			<div className="navigation">
				<Link className="logo-container" to="/">
					<div className="logo">
						<img src="../public/images/logo.png" alt="Logo" />
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
							<Link to="/logout">
								<p>Logout</p>
							</Link>
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
