import logo from "./logo.svg";
import "./App.css";
import Login from "./component/Login/login";
import BackgroundPage from "./pages/BackgroundPage/backgroundPage";
import Register from "./component/Register/register";

function App() {
    return (
        <div className="App">
            {/* <Register /> */}
            {/* <Login /> */}
            <BackgroundPage />
        </div>
    );
}

export default App;
