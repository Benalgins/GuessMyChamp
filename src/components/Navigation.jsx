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
					<a href="/leaderboard">
						<p>Leaderboard</p>
					</a>
					<a href="/catalog">
						<p>Catalog</p>
					</a>
					<a href="/my-champions">
						<p>My Champions</p>
					</a>
					<a href="/add-champion">
						<p>Add Champion</p>
					</a>
					<a href="/login">
						<p>Login</p>
					</a>
					<a href="/register">
						<p>Register</p>
					</a>
					<a href="/logout">
						<p>Logout</p>
					</a>
				</nav>
			</div>
		</div>
	);
}
