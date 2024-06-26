import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div>
            <form className="card-body md:w-2/3 mx-auto">
                <h3 className="text-center font-bold text-xl md:text-3xl">Sign Up Page</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                </div>
                <small className="my-2">Have an account? <Link to="/login">Click here</Link></small>
            </form>
        </div>
    );
};

export default Signup;