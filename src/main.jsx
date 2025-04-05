import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/styles.css';
import Home from './components/Home.jsx';
import Navigation from './components/Navigation.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Navigation />
		<Home />
	</StrictMode>
);
