import React from 'react';
import challenger from '../../../public/Images/challenger.png';
import grandmaster from '../../../public/Images/grandmaster.png';
import master from '../../../public/Images/master.png';
import diamond from '../../../public/Images/diamond.png';
import emerald from '../../../public/Images/emerald.png';
import platinum from '../../../public/Images/platinum.png';
import gold from '../../../public/Images/gold.png';
import silver from '../../../public/Images/silver.png';
import bronze from '../../../public/Images/bronze.png';
import iron from '../../../public/Images/iron.png';

const divisionImages = [
	challenger,
	grandmaster,
	master,
	diamond,
	emerald,
	platinum,
	gold,
	silver,
	bronze,
	iron,
];

export default function UserDisplay({ username, points, index }) {
	return (
		<div className={`user-box ${index < 3 ? 'top-three' : ''}`}>
			<div className="devision">
				<img src={divisionImages[index]} alt={`Division ${index + 1}`} />
			</div>
			<div className="user">
				<h2>User: {username}</h2>
				<h2>Points: {points}</h2>
			</div>
		</div>
	);
}
