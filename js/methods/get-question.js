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

export const randomQuestion = (questionList) => {
  questionList.sort(() => Math.random() - 0.5);
  return questionList.pop();
};

const DATA_URL = `https://es.dump.academy/pixel-hunter/questions`;
export const loaderQuestions = fetch(DATA_URL);
