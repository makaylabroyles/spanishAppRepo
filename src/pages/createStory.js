import React from "react";
import {redirect, Route, Routes, useNavigate, withRouter} from "react-router-dom";
const CreateStory = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let navigate = useNavigate();
    const routeChange = () => {
        navigate('/create-story');
    }
    return (
        <div className="standardPage">
            <h1>Create New Story</h1>
            <div className= "">
                <label htmlFor="">Question 1</label>
                <input id="createQuestions" type="text" name="question1" />
                <button>Add Image</button>
            </div>
            <div className="">
                <label htmlFor="password">Options</label>
                <input id="option1" type="text" name="option1" />
                <input id="option2" type="text" name="option2" />
                <input id="option3" type="text" name="option3" />
                <button>Add Option</button>
            </div>
            <div>
                <button>Add Question</button>
                <button>Finish Questions</button>
            </div>
        </div>

    );
};

export default CreateStory;