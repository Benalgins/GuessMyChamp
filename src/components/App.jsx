import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Navigation from './Navigation';
import Login from './Login';
import Register from './Register';
import Cookies from 'js-cookie';

const token = Cookies.get('userId');
console.log(token);

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</>
	);
}

export default App;
