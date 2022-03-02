import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestionData } from '../redux/actions'
import { Routes, Route, useNavigate } from "react-router-dom";
import Question from "../components/question";
import useStateCallback from '../hooks/useStateCallback'

const Landing = () => {

  const disptach = useDispatch();
  const questions = useSelector(state => state.questions);
  const navigateTo = useNavigate();

  const [currentQuestionCount, setCurrentQuestionsCount] = useStateCallback(0);

  useEffect(() => {
    disptach(getQuestionData());
  }, []);

  const handleClick = num => {
    setCurrentQuestionsCount(prev => prev + 1, s => navigateTo(`q${s}`))
  }



  return (
    <>
      <h2>Welcome to Dog Winner</h2>
      <p>The only game on the internet where you can win a dog for each correct answer.</p>
      <Routes>
        <Route path={`q${currentQuestionCount}`} element={<Question data={questions[currentQuestionCount -1]} />} />
      </Routes>
      <button onClick={handleClick}>Proceed</button>
    </>
  )

};

export default Landing; 