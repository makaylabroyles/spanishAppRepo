import React from "react";
import {redirect, Route, Routes, useNavigate, withRouter} from "react-router-dom";
import themePage from "./themePage";

const enterCode = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let navigate = useNavigate();
    const routeChange = () => {
        navigate('/choose-a-theme');
    }
    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
    return (
        <div className="standardPage">
            <h2>GO TO WWW.SPANISHLAB.COM/ENTERCODE</h2>
            <div>
                <p>SPANISH STORY CODE: </p>
                <div className= "genCodeContainer">
                    <p>{makeid(3)+ "-"+ makeid(3) + "-" + makeid(3)}</p>
                </div>
                <div>
                    <button onClick={routeChange} className="primaryButton">
                        Ready to Play
                    </button>
                    <Routes>
                        <Route path ="/choose-a-theme" element={<themePage />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default enterCode;