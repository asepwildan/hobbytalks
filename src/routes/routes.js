import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "../pages/homepage/homepage";
import Backgroundpage from "../pages/BackgroundPage/backgroundPage";
import Profile from "../pages/profile/profile";
import Category from "../pages/category/Category";
import LandingGoogle from "../pages/landingGoogle/landingGoogle";

function Routes() {
    return (
        <BrowserRouter>
            <Router>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/login" component={Backgroundpage} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/category" component={Category} />
                    <Route path="/register" component={Backgroundpage} />
                    <Route path="/:id" component={LandingGoogle} />
                </Switch>
            </Router>
        </BrowserRouter>
    );
}

export default Routes;
