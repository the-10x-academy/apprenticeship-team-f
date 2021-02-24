import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage";
import PostList from "./Components/HomePage/PostList.js";
import FileUpload from "./Components/HomePage/FileUpload/FileUpload.js";

function App() {

    return (
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/insta" component={PostList} />
                    <Route exact path="/instaUpload" component={FileUpload} />
                </Switch>
                
            </Router>
    );

}

export default App;