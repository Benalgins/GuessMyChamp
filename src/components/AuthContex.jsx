import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const token = Cookies.get('userId');
		if (token) {
			setIsAuthenticated(true);
		} else {
			setIsAuthenticated(false);
		}
	}, []);

	return (
		<AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
			{children}
		</AuthContext.Provider>
	);
};
