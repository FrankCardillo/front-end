import { Row, Col } from "reactstrap";

const MainPage = () => {
	return (
		<Row>
			<Col xs={12} className="text-center">
				Welcome to this fabulous app that returns some very specific information
				from arxiv! Please use the nav bar above to find your way around.
			</Col>
		</Row>
	);
};

export default MainPage;
