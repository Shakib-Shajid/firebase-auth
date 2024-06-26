import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Privateroute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    // 1. location use here and login page also
    const location = useLocation()

    if (loading) {
        return (
            <div className="loading-container text-center m-20 md:m-52">  {/* Add a container for styling */}
                <span className="loading loading-spinner loading-xs"></span>
                <span className="loading loading-spinner loading-sm"></span>
                <span className="loading loading-spinner loading-md"></span>
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{from:location}} replace></Navigate>

};

export default Privateroute;