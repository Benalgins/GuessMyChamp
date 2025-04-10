import { Link } from 'react-router-dom';

export default function Error() {
	return (
		<div className="section no-content">
			<div className="no-content-container">
				<div className="nothing-here">
					<div className="img-container">
						<img src="../public/Images/ops.png" alt="" />
					</div>
					<div className="no-content-title">
						<h2>Whoops... Looks like you've taken a wrong turn!</h2>
						<Link className="no-problem" to={'/'}>
							Let's get you back on track.
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
