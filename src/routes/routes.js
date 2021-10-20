import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "../pages/homepage/homepage";
import Backgroundpage from "../pages/BackgroundPage/backgroundPage";
import Profile from "../pages/profile/profile";
import Category from "../pages/category/Category";
import LandingGoogle from "../pages/landingGoogle/landingGoogle";
import ThreadDetail from "../pages/thread-detail/Thread-detail";

function Routes() {
    return (
        <BrowserRouter>
            <Router>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/category" component={Category} />
                    <Route path="/thread-detail" component={ThreadDetail} />
                    <Route path="/account/:id" component={Backgroundpage} />
                </Switch>
            </Router>
        </BrowserRouter>
    );
}

export default Routes;
