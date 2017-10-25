export default {
  currentQuestionIndex: 0,
  player: {
    name: null,
    lives: 3
  },
  questions: [
    {
      type: 1,
      question: `Угадайте для каждого изображения фото или рисунок?`,
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
      type: 1,
      question: `Угадайте для каждого изображения фото или рисунок?`,
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
      type: 1,
      question: `Угадайте для каждого изображения фото или рисунок?`,
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
      type: 2,
      question: `Угадай, фото или рисунок?`,
      image: {
        url: `http://7oom.ru/wp-content/uploads/foto-priroda-23.jpg`,
        type: `photo`,
        answer: null
      }
    },
    {
      type: 2,
      question: `Угадай, фото или рисунок?`,
      image: {
        url: `https://doorcountypulse.com/wp-content/uploads/2016/04/image1-660x440.jpeg`,
        type: `photo`,
        answer: null
      }
    },
    {
      type: 2,
      question: `Угадай, фото или рисунок?`,
      image: {
        url: `https://i.ytimg.com/vi/3QV6wStbXQk/maxresdefault.jpg`,
        type: `photo`,
        answer: null
      }
    },
    {
      type: 3,
      question: `Найдите рисунок среди изображений`,
      answer: null,
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
      type: 3,
      question: `Найдите рисунок среди изображений`,
      answer: null,
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
      type: 3,
      question: `Найдите рисунок среди изображений`,
      answer: null,
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
      type: 3,
      question: `Найдите рисунок среди изображений`,
      answer: null,
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
  ],

  getLives() {
    let lives = 3;
    this.questions.forEach((question) => {
      if (lives <= 0) {
        return;
      }
      switch (question.type) {
        case 1:
          if ((question.images[0].answer !== null && question.images[0].answer !== question.images[0].type) || (question.images[0].answer !== null && question.images[1].answer !== question.images[1].type)) {
            lives--;
          }
          break;
        case 2:
          if (question.image.answer !== null && question.image.answer !== question.image.type) {
            lives--;
          }
          break;
        case 3:
          if (question.answer !== null && question.answer !== question.rightAnswer) {
            lives--;
          }
          break;
      }
    });
    return lives;
  },

  reset() {
    this.currentQuestionIndex = 0;
    this.questions.forEach((question) => {
      switch (question.type) {
        case 1:
          question.images[0].answer = null;
          break;
        case 2:
          question.image.answer = null;
          break;
        case 3:
          question.answer = null;
          break;
      }
    });
  },

  getAnswersScoring() {
    let score = 0;
    this.questions.forEach((question) => {
      switch (question.type) {
        case 1:
          if (question.images[0].answer === question.images[0].type && question.images[1].answer === question.images[1].type) {
            score += 100;
          }
          break;
        case 2:
          if (question.image.answer === question.image.type) {
            score += 100;
          }
          break;
        case 3:
          if (question.answer === question.rightAnswer) {
            score += 100;
          }
          break;
      }
    });
    return score;
  },

  getLivesScoring() {
    return this.getLives() * 50;
  },

  getTotalScoring() {
    return this.getAnswersScoring() + this.getLivesScoring();
  }
};
