import { useContext } from "react";
import { Row, Col } from "reactstrap";

import AppContext from "../../AppContext";

const NewArticlesPage = () => {
	const context = useContext(AppContext);

	return Object.keys(context.articles).map((key, keyIndex) => {
		return (
			<Row className="my-5" key={keyIndex}>
				<h2>Topic: {key}</h2>
				{context.articles[key].map((article, articleIndex) => {
					return (
						<Row className="mb-5" key={articleIndex}>
							<Col xs={12} className="my-2">
								<h3>Title:</h3>
								<div>{article.title}</div>
							</Col>
							<Col xs={12} className="my-2">
								<h3>Summary:</h3>
								<div>{article.summary}</div>
							</Col>
							<Col xs={12} className="my-2">
								<h3>Published:</h3>
								<div>{article.published}</div>
							</Col>
						</Row>
					);
				})}
			</Row>
		);
	});
};

export default NewArticlesPage;
