import { Link } from 'react-router-dom';

export default function ChampionProfile({
	name,
	position,
	gender,
	releaseYear,
	onDelete,
	onEdit,
	_id,
}) {
	const championImageURL = `https://ddragon.leagueoflegends.com/cdn/15.7.1/img/champion/${name}.png`;

	return (
		<div className="champion-profile">
			<div className="champion-profile-container">
				<div className="img">
					<img src={championImageURL} alt={`${name}`} />
				</div>
				<div className="description">
					<div className="name">
						<h3>Name:</h3>
						<h2>{name}</h2>
					</div>
					<div className="gender">
						<h3>Gender:</h3>
						<h2>{gender}</h2>
					</div>
					<div className="yearOfRelease">
						<h3>Year of release:</h3>
						<h2>{releaseYear}</h2>
					</div>
					<div className="lane">
						<h3>Lane:</h3>
						<h2>{position}</h2>
					</div>
				</div>
			</div>
			<div className="buttons">
				<Link className={'link-styles'} to={`/champions/edit/${_id}`}>
					<button className="edit-btn">Edit</button>
				</Link>
				<button onClick={() => onDelete(_id)}>Delete</button>
			</div>
		</div>
	);
}
