import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "../pages/homepage/homepage";
import Backgroundpage from "../pages/BackgroundPage/backgroundPage";

function Routes() {
    return (
        <BrowserRouter>
            <Router>
                <Switch>
                    {/* route */}
                    <Route exact path="/" component={Homepage} />
                    <Route path="/login" component={Backgroundpage} />
                    <Route path="/register" component={Backgroundpage} />
                </Switch>
            </Router>
        </BrowserRouter>
    );
}

export default Routes;
