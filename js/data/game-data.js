export const scoring = (answers, lives) => {
  if (answers.length < 10) {
    return -1;
  }
  let scores = lives * 50;
  answers.forEach((answer) => {
    switch (answer) {
      case `slow`:
        scores += 50;
        break;
      case `middle`:
        scores += 100;
        break;
      case `fast`:
        scores += 150;
        break;
    }
  });
  return scores;
};
