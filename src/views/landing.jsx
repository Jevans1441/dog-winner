import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestionData, fetchImage, setWrongImage } from '../redux/actions'
import { Routes, Route, useNavigate } from "react-router-dom";
import useStateCallback from '../hooks/useStateCallback'
import Welcome from '../components/welcome';
import Status from '../components/status';
import QuestionForm from '../components/questionForm'
import Modal from "../components/modal";

const Landing = () => {

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const questions = useSelector(state => state.questions);
  const images = useSelector(state => state.images)

  const [currentQuestionCount, setCurrentQuestionsCount] = useStateCallback(0);
  const [isWrongAnswer, setIsWrongAnswer] = useState(false);
  const [isGameEnd, setIsGameEnd] = useState(false)

  useEffect(() => {
    dispatch(getQuestionData());
  }, []);

  const handleNavigation = (nextQuestionNum) => {
    if (!isGameEnd && currentQuestionCount < 10) {
      navigateTo(`q${nextQuestionNum}`)
      setIsWrongAnswer(false)
    }
    if (currentQuestionCount >= 10) {
      setIsGameEnd(true)
    }
  }

  const handleNewGame = () => {
    dispatch(getQuestionData());
    setIsGameEnd(false);
    setCurrentQuestionsCount(1);
    navigateTo('/q1')
  }

  const handleClick = num => {
    setCurrentQuestionsCount(prevState => prevState + 1, newState => handleNavigation(newState))
  }

  const handleSubmit = (e, isCorrect) => {
    e.preventDefault();
    if (isCorrect) {
      dispatch(fetchImage())
    } else {
      dispatch(setWrongImage())
    }
    setTimeout(() => {
      setCurrentQuestionsCount(prevState => prevState + 1, newState => handleNavigation(newState))
    }, 2000);
  };


  return (
    <>
      {currentQuestionCount < 1 && <Welcome />}
      {!isGameEnd && currentQuestionCount > 0 && <Status count={currentQuestionCount} />}
      <Routes>
        <Route
          element={<QuestionForm action={handleSubmit} data={questions[currentQuestionCount - 1]} />}
          path={`q${currentQuestionCount}`}
        />
      </Routes>
      {!isGameEnd && currentQuestionCount < 1 && (
        <button disabled={isGameEnd} onClick={handleClick}>Start Game</button>
      )}
      {isGameEnd && ( 
        <>
          <p>Game Over</p>
          <button onClick={handleNewGame}>New Game</button>
        </>
      )}
      {images[currentQuestionCount - 1] && (
        <Modal imageURL={images[currentQuestionCount - 1]} message="some message tdb" />
      )}
    </>
  )
};

export default Landing; 