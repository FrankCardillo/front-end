import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

const Header = () => {
	return (
		<Row className="my-5">
			<Col xs={4} className="text-center">
				<Link to="/">Main Page</Link>
			</Col>
			<Col xs={4} className="text-center">
				<Link to="/newArticles">New Articles Page</Link>
			</Col>
			<Col xs={4} className="text-center">
				<Link to="/authorsRanking">Authors Ranking Page</Link>
			</Col>
		</Row>
	);
};

export default Header;
