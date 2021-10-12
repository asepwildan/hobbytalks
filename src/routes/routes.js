import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "../pages/homepage/homepage";
import Backgroundpage from "../pages/BackgroundPage/backgroundPage";
import Profile from "../pages/profile/profile";

function Routes() {
    return (
        <BrowserRouter>
            <Router>
                <Switch>
                    {/* route */}
                    <Route exact path="/" component={Homepage} />
                    <Route path="/login" component={Backgroundpage} />
                    <Route path="/register" component={Backgroundpage} />
                    <Route path="/profile" component={Profile} />
                </Switch>
            </Router>
        </BrowserRouter>
    );
}

export default Routes;
