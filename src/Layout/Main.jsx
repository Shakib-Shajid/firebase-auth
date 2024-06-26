import Navbar from "../components/shared/Navbar"
import Footer from "../components/shared/Footer"
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;