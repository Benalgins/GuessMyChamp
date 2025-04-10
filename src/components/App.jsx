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
import NoUser from './Error/NoUser';
import Error from './Error/Error';

function App() {
	const { isAuthenticated } = useContext(AuthContext);
	console.log(isAuthenticated);
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/login"
					element={isAuthenticated ? <Error /> : <Login />}
				/>
				<Route
					path="/register"
					element={isAuthenticated ? <Error /> : <Register />}
				/>

				<Route
					path="/add-champion"
					element={isAuthenticated ? <AddChampion /> : <NoUser />}
				/>
				<Route
					path="/my-champions"
					element={isAuthenticated ? <MyChampions /> : <NoUser />}
				/>
				<Route
					path="/champions/edit/:championId"
					element={isAuthenticated ? <ChampionEdit /> : <NoUser />}
				/>

				<Route path="/catalog" element={<Catalog />} />
				<Route path="/leaderboard" element={<Leaderboard />} />
				<Route path="/demo" element={<Demo />} />
			</Routes>
		</>
	);
}

export default App;
