import React, { useState } from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Signup from "./Signup";

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});

    let navigate = useNavigate();

    // const handleChange = (e) => {
    //     setPassword(e.target.value);
    //     setUserName(e.target.value);
    //     console.log(password);
    //     console.log(userName);
    // };
    const formValidation = () => {
        let error = {};
        let isValid = true;
        if (!userName || userName === "") {
            error.userName = "UserName is Mandatory";
            isValid = false;
        }
        if (!password || password === "") {
            error.password = "Password is Mandatory ";
            isValid = false;
        }
        setError(error);
        return isValid;
    };

    return (

        <form
            onSubmit={(e) => {
                e.preventDefault();
                formValidation()
                    ? navigate("/Store")
                    : console.log("Fill your details");
            }}
        >
            <div className={classes.logincontainer}>
                <div className={classes.loginhead}> Login Form</div>
                <div className={classes.loginbox}>
                    <div>
                        <input
                            placeholder="Enter your email"
                            onChange={(e) => setUserName(e.target.value)}
                            value={userName}
                        />
                        <div className={classes.errorname}>{error.userName}</div>
                    </div>
                    <div className={classes.secinput}>
                        <input
                            placeholder="Enter Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                        <div className={classes.errorname}>{error.password}</div>
                    </div>
                </div>
                <button className={classes.btn}>Login</button>
                <div className={classes.tag}>
                    Dont have account ?{" "}
                    <Link to="/Signup" className="signuplink">
                        Signup
                    </Link>
                    here
                </div>
            </div>
        </form>

    );
};

export default Login;
