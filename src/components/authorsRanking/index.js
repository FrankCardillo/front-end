import { useContext } from "react";
import { Row, Col } from "reactstrap";

import AppContext from "../../AppContext";

const AuthorsRankingPage = () => {
	const context = useContext(AppContext);

	return context.authors.map((author, index) => {
		return (
			<Row className="my-5" key={index}>
				<h2>Author: {author.authorName}</h2>
				<Col xs={12} className="my-2">
					Total Publications: {author.totalPublications}
				</Col>
				<Col xs={12} className="my-2">
					Most Recent Publication Date: {author.mostRecentPublication}
				</Col>
			</Row>
		);
	});
};

export default AuthorsRankingPage;
