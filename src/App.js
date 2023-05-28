import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home.jsx";
import "./styles/App.scss";
import Header from "./components/Header.jsx";
import { Toaster } from "react-hot-toast";
import Cart from "./components/Cart.jsx";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/cart"} element={<Cart />} />
                </Routes>
                <Toaster />
            </BrowserRouter>
        </div>
    );
}

export default App;
