import { GET_QUESTION_DATA } from "../actionTypes";

const initialState = [];

function askQuestionData(state = initialState, action) {
  if (action.type === GET_QUESTION_DATA) {
    console.log(action.data);
    return action.data;
  }
  return "Attempt to set question data failed.";
}

export default askQuestionData;
