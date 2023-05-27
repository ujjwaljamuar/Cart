import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home.jsx";
import "./styles/App.scss";
import Header from "./components/Header.jsx";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path={"/"} element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
