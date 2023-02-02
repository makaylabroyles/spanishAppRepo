import React from "react";
import enterCode from "../pages/enterCode";
import enter from "../pages/enterCode.js"
import {redirect, Route, Routes, useNavigate, withRouter} from "react-router-dom";
import EnterCode from "../pages/enterCode";
import themePage from "./themePage";
const Home = () => {
    let navigate = useNavigate();
    const routeChange = () => {
        navigate('/enter-code');
    }
    return (
        <div className="homePage">
            <h1>Choose type of play</h1>
            <div>
                <button onClick={routeChange}>
                    Ready to Play
                </button>
                <Routes>
                    <Route path ="/enter-code" element={<EnterCode />} />
                </Routes>
            </div>
        </div>
    );
};

export default Home;