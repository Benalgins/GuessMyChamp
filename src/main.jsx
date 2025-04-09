import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './components/AuthContex';

ReactDOM.createRoot(document.getElementById('root')).render(
	<AuthProvider>
		<BrowserRouter>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</BrowserRouter>
	</AuthProvider>
);
