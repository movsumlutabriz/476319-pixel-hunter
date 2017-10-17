export const getScoring = (answers, lives) => {
  if (answers.length < 10) {
    return -1;
  }
  let score = lives * 50;
  answers.forEach((item) => {
    if (item.right) {
      score += 100;
    }
    if (item.time < 10) {
      score -= 50;
    }
    if (item.time > 20) {
      score += 50;
    }
  });
  return score;
};

export const getTimer = (time) => {
  return {
    tick: () => {
      time--;
      if (time <= 0) {
        return `end`;
      }
      return time;
    }
  };
};
