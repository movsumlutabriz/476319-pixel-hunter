export const AnswersTime = {
  START: 0,
  FAST: 10,
  SLOW: 20
};

export const initialGame = {
  questionNumber: 0,
  lives: 3,
  questionTime: AnswersTime.START
};


export const state = {
  questionNumber: initialGame[`questionNumber`],
  lives: initialGame[`lives`],
  questionTime: initialGame[`questionTime`]
};

export const QuestionsTypes = {
  TWO_PHOTO: 1,
  ONE_PHOTO: 2,
  THREE_PHOTOS: 3
};

export const questions = [
  {
    type: QuestionsTypes.TWO_PHOTO,
    question: `Угадайте для каждого изображения фото или рисунок?`,
    answerTime: null,
    images: [
      {
        url: `http://zefirka.net/wp-content/uploads/2015/08/samaya-krasivaya-priroda-dlya-puteshestvij-sovsem-ryadom-1.jpg`,
        type: `paint`,
        answer: null
      },
      {
        url: `https://i.imgur.com/DiHM5Zb.jpg`,
        type: `photo`,
        answer: null
      }
    ]
  },
  {
    type: QuestionsTypes.TWO_PHOTO,
    question: `Угадайте для каждого изображения фото или рисунок?`,
    answerTime: null,
    images: [
      {
        url: `http://i.imgur.com/DKR1HtB.jpg`,
        type: `photo`,
        answer: null
      },
      {
        url: `http://i.imgur.com/1KegWPz.jpg`,
        type: `photo`,
        answer: null
      }
    ]
  },
  {
    type: QuestionsTypes.TWO_PHOTO,
    question: `Угадайте для каждого изображения фото или рисунок?`,
    answerTime: null,
    images: [
      {
        url: `https://k32.kn3.net/5C7060EC5.jpg`,
        type: `photo`,
        answer: null
      },
      {
        url: `https://i.imgur.com/DiHM5Zb.jpg`,
        type: `photo`,
        answer: null
      }
    ]
  },
  {
    type: QuestionsTypes.ONE_PHOTO,
    question: `Угадай, фото или рисунок?`,
    answerTime: null,
    image: {
      url: `http://7oom.ru/wp-content/uploads/foto-priroda-23.jpg`,
      type: `photo`,
      answer: null
    }
  },
  {
    type: QuestionsTypes.ONE_PHOTO,
    question: `Угадай, фото или рисунок?`,
    answerTime: null,
    image: {
      url: `https://doorcountypulse.com/wp-content/uploads/2016/04/image1-660x440.jpeg`,
      type: `photo`,
      answer: null
    }
  },
  {
    type: QuestionsTypes.ONE_PHOTO,
    question: `Угадай, фото или рисунок?`,
    answerTime: null,
    image: {
      url: `https://i.ytimg.com/vi/3QV6wStbXQk/maxresdefault.jpg`,
      type: `photo`,
      answer: null
    }
  },
  {
    type: QuestionsTypes.THREE_PHOTOS,
    question: `Найдите рисунок среди изображений`,
    answer: null,
    answerTime: null,
    rightAnswer: `paint`,
    images: [
      {
        url: `http://pskovskie.ru/media/W1siZiIsIjIwMTYvMDgvMjgvM3JuaXpvZWtuaF9wcmlyb2RhX3Bza292c2tveV9vYmxhc3RpLmpwZyJdXQ/priroda_pskovskoy_oblasti.jpg?sha=e4823e3550242f60`,
        type: `photo`,
        answer: null
      },
      {
        url: `https://www.socwall.com/images/wallpapers/37980-1920x1280.jpg`,
        type: `photo`,
        answer: null
      },
      {
        url: `http://araratnews.am/wp-content/uploads/2017/01/%D0%A8%D0%B8%D1%88%D0%BA%D0%B8%D0%BD-588x375.jpg`,
        type: `paint`,
        answer: null
      }
    ]
  },
  {
    type: QuestionsTypes.THREE_PHOTOS,
    question: `Найдите рисунок среди изображений`,
    answer: null,
    answerTime: null,
    rightAnswer: `paint`,
    images: [
      {
        url: `http://www.nat-geo.ru/upload/iblock/ebe/ebe537cd5d0627d35abaa21d17f900b0.jpg`,
        type: `photo`
      },
      {
        url: `https://www.zooclub.ru/attach/6885.jpg`,
        type: `photo`
      },
      {
        url: `http://kak-narisovat.com/wp-content/uploads/2015/06/9_5.png`,
        type: `paint`
      }
    ]
  },
  {
    type: QuestionsTypes.THREE_PHOTOS,
    question: `Найдите рисунок среди изображений`,
    answer: null,
    answerTime: null,
    rightAnswer: `paint`,
    images: [
      {
        url: `http://o6oi.ru/main.php/68047-4/image_063.jpg`,
        type: `paint`
      },
      {
        url: `http://svistanet.com/wp-content/uploads/2016/05/priroda_foto_13_03.jpg`,
        type: `photo`
      },
      {
        url: `http://katyaburg.ru/sites/default/files/pictures/krasota_prirody/priroda_kartinki_foto_43.jpg`,
        type: `photo`
      }
    ]
  },
  {
    type: QuestionsTypes.THREE_PHOTOS,
    question: `Найдите рисунок среди изображений`,
    answer: null,
    answerTime: null,
    rightAnswer: `paint`,
    images: [
      {
        url: `https://static.make.ua/catalog/16/nature-876__1490262678__300h.jpg`,
        type: `photo`
      },
      {
        url: `http://indiaway.ru/sites/all/indijskaya-priroda.jpg`,
        type: `photo`
      },
      {
        url: `http://kavkaz-ecology.ru/_files/Moduls/gallery/images/T_gallery_items_F_image1_I_117_v1.jpg`,
        type: `paint`
      }
    ]
  }
];

export const getLives = () => {
  let lives = state.lives;
  questions.forEach((question) => {
    if (lives <= 0) {
      return;
    }
    switch (question.type) {
      case QuestionsTypes.TWO_PHOTO:
        if ((question.images[0].answer !== null && question.images[0].answer !== question.images[0].type) || (question.images[0].answer !== null && question.images[1].answer !== question.images[1].type)) {
          lives--;
        }
        break;
      case QuestionsTypes.ONE_PHOTO:
        if (question.image.answer !== null && question.image.answer !== question.image.type) {
          lives--;
        }
        break;
      case QuestionsTypes.THREE_PHOTOS:
        if (question.answer !== null && question.answer !== question.rightAnswer) {
          lives--;
        }
        break;
    }
  });
  return lives;
};

export const reset = () => {
  state.questionNumber = null;
  questions.forEach((question) => {
    switch (question.type) {
      case QuestionsTypes.TWO_PHOTO:
        question.images[0].answer = null;
        break;
      case QuestionsTypes.ONE_PHOTO:
        question.image.answer = null;
        break;
      case QuestionsTypes.THREE_PHOTOS:
        question.answer = null;
        break;
    }
  });
};

export const getAnswersScoring = () => {
  let score = 0;
  questions.forEach((question) => {
    if (isRightAnswer(question)) {
      score += 100;
    }
  });
  return score;
};

const isRightAnswer = (question) => {
  switch (question.type) {
    case QuestionsTypes.TWO_PHOTO:
      if (question.images[0].answer === question.images[0].type && question.images[1].answer === question.images[1].type) {
        return true;
      }
      break;
    case QuestionsTypes.ONE_PHOTO:
      if (question.image.answer === question.image.type) {
        return true;
      }
      break;
    case QuestionsTypes.THREE_PHOTOS:
      if (question.answer === question.rightAnswer) {
        return true;
      }
  }
  return false;
};

export const getFastAnswersCount = () => {
  let fastAnswersCount = 0;
  questions.forEach((question) => {
    if (isRightAnswer(question) && isFastAnswer(question)) {
      fastAnswersCount++;
    }
  });
  return fastAnswersCount;
};

export const getFastAnswersScoring = () => getFastAnswersCount() * 50;

export const getSlowAnswersCount = () => {
  let slowAnswersCount = 0;
  questions.forEach((question) => {
    if (isSlowAnswer(question)) {
      slowAnswersCount++;
    }
  });
  return slowAnswersCount;
};

export const getSlowAnswersScoring = () => getSlowAnswersCount() * -50;

export const getLivesScoring = () => getLives() * 50;

export const getTotalScoring = () => getAnswersScoring() + getLivesScoring() + getFastAnswersScoring() + getSlowAnswersScoring();

export const isFastAnswer = (question) => question.answerTime <= AnswersTime.FAST;

export const isSlowAnswer = (question) => question.answerTime >= AnswersTime.SLOW;

export const setNextQuestion = () => {
  state.questionTime = AnswersTime.START;
  if (state.questionNumber === null) {
    state.questionNumber = 0;
  } else {
    state.questionNumber++;
  }
};

export const getCurrentQuestion = () => {
  return questions[state.questionNumber];
};
