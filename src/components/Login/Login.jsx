import { Link } from "react-router-dom";

const Login = () => {


    // access the form info
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
    }
    return (
        <div>
            <form onSubmit = {handleLogin} className="card-body md:w-2/3 mx-auto">
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