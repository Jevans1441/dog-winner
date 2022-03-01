const askRdmQuestion = () => {
  const targets = questions[Math.floor(Math.random() * question.length)];
  return targets;
};
console.log(askRdmQuestion());
