import { Route, Router, Routes } from 'react-router-dom';

import Home from './Home';
import Navigation from './Navigation';
import Login from './Login';
import Register from './Register';
import AddChampion from './AddChampion';
import Catalog from './Catalog/Catalog';
import Leaderboard from './Leaderboard/Leaderboard';
import MyChampions from './MyChampions/MyChampions';
import ChampionEdit from './MyChampions/Champion-edit';
import { AuthContext } from './AuthContex';
import { useContext } from 'react';
import Demo from './Demo-run/Demo';

function App() {
	const { isAuthenticated } = useContext(AuthContext);
	console.log(isAuthenticated);
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={isAuthenticated ? <Home /> : <Login />} />
				<Route
					path="/register"
					element={isAuthenticated ? <Home /> : <Register />}
				/>

				{isAuthenticated && (
					<>
						<Route path="/add-champion" element={<AddChampion />} />
						<Route path="/my-champions" element={<MyChampions />} />
						{/* <Route path="/logout" element={<Logout />} /> */}
						<Route
							path="champions/edit/:championId"
							element={<ChampionEdit />}
						/>
					</>
				)}

				<Route path="/catalog" element={<Catalog />} />
				<Route path="/leaderboard" element={<Leaderboard />} />
				<Route path="/demo" element={<Demo />} />
			</Routes>
		</>
	);
}

export default App;
