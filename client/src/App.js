import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect,
} from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage";
import PostList from "./Components/HomePage/PostList.js";

function App() {
	return (
		<Router>
			<switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/insta" component={PostList} />
			</switch>
		</Router>
	);
}

export default App;
