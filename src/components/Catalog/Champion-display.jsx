export default function ChampionDisplay({ name }) {
	const championImageURL = `https://ddragon.leagueoflegends.com/cdn/15.7.1/img/champion/${name}.png`;
	return (
		<div className="champion-box">
			<div className="image">
				<img src={championImageURL} alt={`${name}`} />
			</div>
			<div className="name">
				<p>{name}</p>
			</div>
		</div>
	);
}
