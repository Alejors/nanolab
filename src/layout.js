import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/home";
import Navbar from "./components/navbar";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <BrowserRouter basename={basename}>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Layout;