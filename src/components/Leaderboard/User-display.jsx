export default function UserDisplay({ username, points, index }) {
	const divisionImages = [
		'challenger.png',
		'grandmaster.png',
		'master.png',
		'diamond.png',
		'emerald.png',
		'platinum.png',
		'gold.png',
		'silver.png',
		'bronze.png',
		'iron.png',
	];
	//TODO s obekt i importove
	const imageUrl = `../../../public/Images/${divisionImages[index]}`;
	return (
		<div className="user-box">
			<div className="devision">
				<img src={imageUrl} alt={`Division ${index + 1}`} />
			</div>
			<div className="user">
				<h2>User: {username}</h2>
				<h2>Points: {points}</h2>
			</div>
		</div>
	);
}
