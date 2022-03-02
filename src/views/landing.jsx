import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestionData } from '../redux/actions'
import { Routes, Route, useNavigate } from "react-router-dom";
import Question from "../components/question";

const Landing = () => {

  const disptach = useDispatch();
  const questions = useSelector(state => state.questions);
  const navigateTo = useNavigate();

  useEffect(() => {
    disptach(getQuestionData());
  }, []);

  const handleClick = () => {
    navigateTo('q1')
  }

  return (
    <>
      <h2>Welcome to Dog Winner</h2>
      <p>The only game on the internet where you can win a dog for each correct answer.</p>
      <button onClick={handleClick}>Start Game</button>
      <Routes>
        <Route path="/q1" element={<Question data={questions[0]} />} />
      </Routes>
    </>
  )

};

export default Landing; 