import React from "react";
import enterCode from "../pages/enterCode";
import enter from "../pages/enterCode.js"
import {redirect, Route, Routes, useNavigate, withRouter} from "react-router-dom";
import EnterCode from "../pages/enterCode";
const Home = () => {
    let navigate = useNavigate();
    const routeChange = () => {
        navigate('/enter-code');
    }
    return (
        <div className="homePage">
            <h2>CHOOSE A THEME</h2>
            <div>
                <p>[Theme 1]</p>
                <p>[Theme 2]</p>
                <p>[Theme 3]</p>
                <p>[Theme 4]</p>
                <p>[Theme 5]</p>
                <p>[Theme 6]</p>
                <div className="enterCode">
                    <button onClick={routeChange}>
                        Submit
                    </button>
                    <Routes>
                        <Route path ="/enter-code" element={<EnterCode />} />
                    </Routes>
                </div>
            </div>

        </div>
    );
};

export default Home;