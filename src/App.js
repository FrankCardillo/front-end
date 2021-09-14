import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import axios from "axios";

import AuthorsRankingPage from "./components/authorsRanking";
import Header from "./components/header";
import NewArticlesPage from "./components/newArticles";
import MainPage from "./components/mainPage";
import { AppProvider } from "./AppContext";

const App = () => {
	const [articles, setArticles] = useState([]);
	const [authors, setAuthors] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3001/newArticles")
			.then((res) => setArticles(res.data))
			.catch((e) =>
				/* Any error handling that displays a flash message, redirects to another page, etc. can happen here.
				As it stands the api isn't even passing the errors along to the client right now so this is doing nothing */
				console.log(e)
			);

		axios
			.get("http://localhost:3001/authorsRanking")
			.then((res) => setAuthors(res.data))
			.catch((e) => console.log(e));
	}, []);

	return (
		<div className="App">
			<AppProvider value={{ articles, authors }}>
				<Router>
					<Container>
						<Header />
						<Switch>
							<Route path="/newArticles">
								<NewArticlesPage />
							</Route>
							<Route path="/authorsRanking">
								<AuthorsRankingPage />
							</Route>
							<Route path="/">
								<MainPage />
							</Route>
						</Switch>
					</Container>
				</Router>
			</AppProvider>
		</div>
	);
};

export default App;
