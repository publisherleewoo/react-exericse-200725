import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";

import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

function App(props) {
    console.log("앱의", props);
    return (
        <div className="App">
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profiles">프로필</Link>
                </li>
                <li>
                    <Link to="/history">history 예제</Link>
                </li>
            </ul>
            <hr />
            <Route path="/" component={Home} exact />
            <Route path={["/about", "/info"]} component={About} />
            <Route path="/profiles" component={Profiles} />
            <Route path="/history" component={HistorySample} />
        </div>
    );
}

export default App;
