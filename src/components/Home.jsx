function Home() {
	return (
		<div className="section home">
			<div className="about">
				<div className="wellcome-img">
					<img src="/Images/wellcome-pengu.png" alt="" />
				</div>
				<p>
					Wellcome to GuessMychamp, if your a loving fan of League of Legends
					and want to test your knowladge of champions this is the right place
					for you!
				</p>
				{/* <p>
					Register to compete in the leaderboard by guessing or adding champions
					and acquiring points on GuessMyChamp, where your predictions and
					knowledge earn you a spot at the top!
				</p> */}
			</div>
			<div className="try-demo">
				<p>Jump in and take a demo run at guessing champions</p>
				<button>Demo Run</button>
			</div>
		</div>
	);
}

export default Home;
