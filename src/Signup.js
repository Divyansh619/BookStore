import React, { useState } from "react";
import { Country } from './Country'
import classes from './Signup.module.css'

const Signup = () => {
    const [inputField, setInputField] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [createPassword, setCreatePassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [mobileNumber, SetMobileNumber] = useState();
    const [error, setError] = useState({})

    const newFormValidation = () => {
        let error = {};
        let isValid = true;
        if (!email || email === " ") {
            error.email = "Please fill your email"
            isValid = false;
        }
        else if (!emailEligibility.test(email)) {
            isValid = false;
            error.email = "Not correct form of Email";
        }
        if (!fullName || fullName === "") {
            error.fullName = "Please enter your fullname"
            isValid = false;
        }
        if (!createPassword || createPassword === "") {
            error.createPassword = "please create a password "
            isValid = false;
        }
        if (!confirmPassword || confirmPassword === "") {
            error.confirmPassword = "Confirm your password"
            isValid = false;
        }
        if (!mobileNumber || mobileNumber === "") {
            error.mobileNumber = " enter your mobile number"
            isValid = false;
        }
        if (confirmPassword !== createPassword) {
            error.createPassword = "Password does not match"
            isValid = false;
        }
        setError(error);
        return isValid;
    }


    const emailEligibility = /^(([^<>()/.,;:\s@"]+(\.[^<>()/.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    const handleChange = (e) => {

        const mobNum = /^[0-9\b]+$/;
        if (e.target.value === "" || mobNum.test(e.target.value)) {
            SetMobileNumber(e.target.value)
        }
    }
    const Dropdown = () => {
        return (
            <>
                {Country.map((cntry) => {
                    return (
                        <option>{cntry.Country}</option>
                    )

                })}
            </>
        )
    }
    return (
        <div >

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    newFormValidation() ?
                        alert('Your account is created') : <></>
                }}
            >
                <div className={classes.signupcontainer}>
                    <h2 className={classes.inputone}> Signup here !</h2>
                    {/* {newField.map(() => {
                        return ( */}
                    <>
                        <div className={classes.inputone}>
                            <input

                                placeholder={"Enter your FullName"}
                                type="text"
                                className={classes.input}
                                onChange={(e) => setFullName(e.target.value)}
                                value={fullName}

                            />
                            <div className={classes.errorinput}>{error.fullName}</div>
                        </div>
                        <div className={classes.inputone}>
                            <input

                                placeholder={"Enter your Email"}
                                type="text"
                                className={classes.input}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className={classes.errorinput}>{error.email}</div>
                        </div>
                        <div className={classes.inputone}>
                            <input

                                placeholder={"Create a Password"}
                                type="text"
                                className={classes.input}
                                onChange={(e) => setCreatePassword(e.target.value)}
                            />
                            <div className={classes.errorinput}>{error.createPassword}</div>
                        </div>
                        <div className={classes.inputone}>
                            <input

                                placeholder={"Confirm a Password"}
                                type="text"
                                className={classes.input}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <div className={classes.errorinput}>{error.confirmPassword}</div>
                        </div>
                        <div className={classes.inputone}>
                            <input

                                placeholder={"Enter your MobileNumber"}
                                type="text"
                                className={classes.input}
                                onChange={(e) => { handleChange(e) }} maxLength='10'
                            />
                            <div className={classes.errorinput}>{error.mobileNumber}</div>
                        </div>
                        <div className={classes.inputone} >
                            <select

                                placeholder={"Choose Your Country"}
                                type="text"
                                className={classes.country}
                            >{Dropdown()}</select>
                        </div>
                        <div className={classes.inputone}>
                            <button className={classes.btnbtn}>Signup </button>
                        </div>
                    </>
                    {/* );
                    })} */}
                </div>
            </form>
        </div >
    );
};

export default Signup;
