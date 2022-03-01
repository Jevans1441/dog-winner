import data from "./qestiondata.json";
import { GET_QUESTION_DATA } from "./actionTypes";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
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
