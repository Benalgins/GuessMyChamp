export default function Navigation() {
	return (
		<div className="section navigation">
			<div className="navigation">
				<a className="logo-container" href="/">
					<div className="logo">
						<img src="../public/images/logo.png" alt="" />
					</div>
				</a>
				<nav className="nav">
					<a href="#">
						<p>Leaderboard</p>
					</a>
					<a href="#">
						<p>Catalog</p>
					</a>
					<a href="#">
						<p>Details</p>
					</a>
					<a href="/login">
						<p>Login</p>
					</a>
					<a href="/register">
						<p>Register</p>
					</a>
				</nav>
			</div>
		</div>
	);
}
