import { Route, Router, Routes } from 'react-router-dom';

import Home from './Home';
import Navigation from './Navigation';
import Login from './Login';
import Register from './Register';
import Cookies from 'js-cookie';
import AddChampion from './AddChampion';
import Catalog from './Catalog/Catalog';
import Leaderboard from './Leaderboard/Leaderboard';
import MyChampions from './MyChampions/MyChampions';
import Logout from './Logout';

const token = Cookies.get('userId');

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/add-champion" element={<AddChampion />} />
				<Route path="/catalog" element={<Catalog />} />
				<Route path="/leaderboard" element={<Leaderboard />} />
				<Route path="/my-champions" element={<MyChampions />} />
				<Route path="/logout" element={<Logout />} />
			</Routes>
		</>
	);
}

export default App;
