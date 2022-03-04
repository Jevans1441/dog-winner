import { SET_IMAGE, GET_QUESTION_DATA } from "../actionTypes";

const initialState = [];

function imagesReducer(state = initialState, action) {
  if (action.type === SET_IMAGE) {
    return [...state, action.imageURL];
  } else if (action.type === GET_QUESTION_DATA) {
    return initialState;
  }
  return state;
}

export default imagesReducer;
