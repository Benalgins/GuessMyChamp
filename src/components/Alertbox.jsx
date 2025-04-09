import React, { useEffect } from 'react';

export default function AlertBox({ alert, onClose, duration = 1500 }) {
	useEffect(() => {
		if (alert.show) {
			const timer = setTimeout(() => {
				onClose();
			}, duration);
			return () => clearTimeout(timer);
		}
	}, [alert.show, duration, onClose]);

	if (!alert.show) return null;

	return (
		<div className={`alert-container ${alert.type}`}>
			<p>{alert.message}</p>
		</div>
	);
}
