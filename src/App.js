import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import "./App.css";
import Home from "./Home";
import Bookstore from "./Bookstore";

const App = () => {
  return (
    <BrowserRouter>
      <div className="linkcontainer">
        <h2 className="homelink">
          <Link to="/" className="homelink">
            Home
          </Link>
        </h2>
        <div className="logsign">

          <h2>
            <Link to="/Login" className="loginlink">
              Login/
            </Link>
          </h2>
          <h2>
            <Link to="/Signup" className="signuplink">
              Signup
            </Link>
          </h2>

        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Store" element={<Bookstore />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
