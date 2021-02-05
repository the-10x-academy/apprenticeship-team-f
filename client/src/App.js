import React from 'react';
import { 
        BrowserRouter as Router,
        Route,Link,Switch,Redirect
} from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage";


function App() {
    return (
            <Router>
                <switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/insta" component={HomePage} />
                </switch>
                
            </Router>
    );
}

export default App;
