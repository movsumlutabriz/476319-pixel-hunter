export const QuestionType = {
  GAME1: `two-of-two`,
  GAME2: `tinder-like`,
  GAME3: `one-of-three`,
};

export const AnswerType = {
  painting: `painting`,
  photo: `photo`
};
AnswerType.paint = AnswerType.painting;

<<<<<<< HEAD
export const randomQuestion = (list) => {
  const questionIndex = Math.floor(Math.random() * list.length);
  return list[questionIndex];
=======
export const randomQuestion = (questionList) => {
  questionList.sort(() => Math.random() - 0.5);
  return questionList.pop();
>>>>>>> 4e64eb84c8c36cf9760eca200e26fc3b18c45ced
};

const DATA_URL = `https://es.dump.academy/pixel-hunter/questions`;
export const loaderQuestions = fetch(DATA_URL);
