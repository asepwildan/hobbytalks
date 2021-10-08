import logo from "./logo.svg";
import "./App.css";
import Login from "./component/Login/login";
import BackgroundPage from "./component/BackgroundPage/backgroundPage";
import Register from "./component/Register/register";

function App() {
    return (
        <div className="App">
            <Register />
            {/* <Login /> */}
        </div>
    );
}

export default App;
