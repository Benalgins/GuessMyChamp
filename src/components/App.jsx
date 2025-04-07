import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Navigation from './Navigation';
import Login from './Login';

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</>
	);
}

export default App;
