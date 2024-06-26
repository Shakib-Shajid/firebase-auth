import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Signup = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignIn = event =>{
        event.preventDefault();
        console.log(event);
        const form =event.target;
        const email = form.email.value;
        const password= form.password.value;
        console.log(email, password);
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
    }
    
    return (
        <div>
            <form onSubmit={handleSignIn} className="card-body md:w-2/3 mx-auto">
                <h3 className="text-center font-bold text-xl md:text-3xl">Sign Up Page</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                </div>
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