import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "../pages/homepage/homepage";
import Backgroundpage from "../pages/BackgroundPage/backgroundPage";
import Profile from "../pages/profile/profile";
import ThreadDetail from "../pages/thread-detail/Thread-detail";
import MoreUserInfo from "../component/moreUserInfo/moreUserInfo";

function Routes() {
    return (
        <BrowserRouter>
            <Router>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/login" component={Backgroundpage} />
                    <Route path="/register" component={Backgroundpage} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/thread-detail" component={ThreadDetail} />

                </Switch>
            </Router>
        </BrowserRouter>
    );
}

export default Routes;
