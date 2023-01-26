import React from "react";
import Logo from "../components/logo";
import enterCode from "./enterCode";
import {redirect, Route, Routes, useNavigate, withRouter} from "react-router-dom";
const Home = () => {
    let navigate = useNavigate();
    const routeChange = () => {
        navigate('/enterCode');
    }
    return (
        <div className="App">
            <h2>CHOOSE A THEME</h2>
            <div>
                <p>[Theme 1]</p>
                <p>[Theme 2]</p>
                <p>[Theme 3]</p>
                <p>[Theme 4]</p>
                <p>[Theme 5]</p>
                <p>[Theme 6]</p>
                <div>
                    <button onClick={routeChange}>
                        Submit
                    </button>
                    <Routes>
                        <Route path="/enterCode" element={<enterCode />}/>
                            <enterCode />
                    </Routes>
                </div>
            </div>

        </div>
    );
};

export default Home;