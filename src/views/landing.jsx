import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getQuestionData } from '../redux/actions'

const Landing = () => {

  const disptach = useDispatch();

  useEffect(() => {
    disptach(getQuestionData());
  }, []);

  return (
    <p>Landing</p>
  )

};

export default Landing; 