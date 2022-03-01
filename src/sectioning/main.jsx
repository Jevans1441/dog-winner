import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getQuestionData } from '../redux/actions'

const Main = () => {

    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions)

    useEffect(() => {
        dispatch(getQuestionData())
    });




    return (
        <main>
            <div>
                <div className="question-section">
                    <p></p>
                </div>
            </div>
        </main>
    )
}


export default Main;