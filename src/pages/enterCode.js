import React from "react";
import {redirect, Route, Routes, useNavigate, withRouter} from "react-router-dom";

const enterCode = () => {
    return (
        <div className="enterCodePage">
            <h2>GO TO WWW.SPANISHLAB.COM/ENTERCODE</h2>
            <div>
                <p>SPANISH STORY CODE: </p>
                <p>[Filler space for a box wth code in it]</p>
                <button>Ready to Play</button>
            </div>
        </div>
    );
};

export default enterCode;