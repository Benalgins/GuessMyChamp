export default function Catalog() {
	const URL =
		'https://ddragon.leagueoflegends.com/cdn/15.7.1/data/en_US/champion.json';
	return (
		<div className="section catalog">
			<div className="catalog-content">
				<div className="title">
					<h2>Here are all Champions of League of Legends added so far!</h2>
					<p>
						If you find a missing champion be the first to add it and get{' '}
						<span>10 points</span>!
					</p>
				</div>
				<div className="all-champions">
					<div className="champions"></div>
				</div>
			</div>
		</div>
	);
}
