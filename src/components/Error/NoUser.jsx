import { Link } from 'react-router-dom';

export default function NoUser() {
	return (
		<div className="section no-user">
			<div className="no-user-container">
				<div className="no-user-content">
					<div className="no-user-img">
						<img src="../public/Images/no-user.png" alt="" />
					</div>
					<div className="no-user-title">
						<h2>Seems like you arent logged in!</h2>
						<div className="login-register">
							<Link className="login-link" to={'/login'}>
								Login
							</Link>
							<Link className="register-link" to={'/register'}>
								Register
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
