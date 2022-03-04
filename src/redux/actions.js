import data from "./qestiondata.json";
import { SET_IMAGE, GET_QUESTION_DATA } from "./actionTypes";

// Randomizes questions before they're added ot redux store
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export const getQuestionData = () => {
  // console.log(shuffle(data));
  return {
    type: GET_QUESTION_DATA,
    data: shuffle(data),
  };
};

export const fetchImage = () => (dispatch) => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((data) => data.json())
    .then((response) => {
      dispatch(fetchSuccess(response.message));
    });
};

const fetchSuccess = (imageURL) => {
  return {
    type: SET_IMAGE,
    imageURL,
  };
};
