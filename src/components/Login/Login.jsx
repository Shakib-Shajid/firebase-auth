import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {


    // use context
    const { signIn } = useContext(AuthContext)

    // redirect in secret page
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    // find the location where it comes from 
    const from = location.state?.from?.pathname || '/';


    // access the form info
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // go to coming location
                navigate(from, {replace:true})
            })
    }




    return (
        <div>
            <form onSubmit={handleLogin} className="card-body md:w-2/3 mx-auto">
                <h3 className="text-center font-bold text-xl md:text-3xl">Login Page</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-2">
                    <button className="btn btn-primary">Login</button>
                </div>
                <small className="my-2">Do not have account? <Link to="/signup">Click here</Link></small>
            </form>

        </div>
    );
};

export default Login;