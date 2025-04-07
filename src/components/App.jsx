import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Navigation from './Navigation';

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
