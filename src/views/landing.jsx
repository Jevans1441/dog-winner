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
  const [isGameEnd, setIsGameEnd] = useState(false)

  useEffect(() => {
    disptach(getQuestionData());
  }, []);

  const handleNavigation = (nextQuestionNum) => {
    if (!isGameEnd && currentQuestionCount < 10) {
      navigateTo(`q${nextQuestionNum}`)
    }
    if (currentQuestionCount >= 10) {
      setIsGameEnd(true)
    }
  }

  const handleNewGame = () => {
    disptach(getQuestionData());
    setIsGameEnd(false);
    setCurrentQuestionsCount(1);
    navigateTo('/q1')
  }

  const handleClick = num => {
    setCurrentQuestionsCount(prevState => prevState + 1, newState => handleNavigation(newState))
  }



  return (
    <>
      <h2>Welcome to Dog Winner</h2>
      <p>The only game on the internet where you can win a dog for each correct answer.</p>
      <Routes>
        <Route path={`q${currentQuestionCount}`} element={<Question data={questions[currentQuestionCount -1]} />} />
      </Routes>
      {!isGameEnd && <button disabled={isGameEnd} onClick={handleClick}>Proceed</button>}
      {isGameEnd && ( 
        <>
          <p>Game Over</p>
          <button onClick={handleNewGame}>New Game</button>
        </>
      )}
    </>
  )

};

export default Landing; 