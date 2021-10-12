import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import noThread from "../pages/profile/No-thread";
import ThreadDetail from "../pages/thread-detail/Thread-detail";

function Routes() {
    return (
        <BrowserRouter>
            <Router>
                <Switch>
                    <Route exact path="/" component={noThread} />
                    <Route path="/thread-detail" component={ThreadDetail} />
                </Switch>
            </Router>
        </BrowserRouter>
    );
}

export default Routes;