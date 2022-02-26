import { GET_QUESTION_DATA } from "../actionTypes";

const initialState = {};

function askQuestionData(state = initialState, action) {
  if (action.type === GET_QUESTION_DATA) {
    return action.payload.data;
  }
  return state;
}

export default askQuestionData;
