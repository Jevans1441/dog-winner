import data from "../questions/questions";
import { GET_QUESTION_DATA } from "./actionTypes";

export const getQuestionData = () => {
  return {
    type: GET_QUESTION_DATA,
    payload: {
      data,
    },
  };
};
