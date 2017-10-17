import assert from 'assert';
import {getScoring, getTimer} from './game-data';

describe(`Array`, () => {
  describe(`#indexOf()`, () => {
    it(`should return -1 when the value is not present`, () => {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});

describe(`getScoring`, () => {
  it(`Если игрок ответил меньше чем на 10 вопросов, то игра считается непройденой и функция должна вернуть -1`, () => {
    assert.equal(-1, getScoring([], 3));
  });
  it(`Если игрок ответил на все вопросы и не быстро и не медленно и у него остались все жизни, то функция должна вернуть 1150 очков`, () => {
    assert.equal(1150, getScoring([
      {right: true, time: 11},
      {right: true, time: 17},
      {right: true, time: 18},
      {right: true, time: 15},
      {right: true, time: 13},
      {right: true, time: 12},
      {right: true, time: 11},
      {right: true, time: 17},
      {right: true, time: 15},
      {right: true, time: 16}
    ], 3));
  });
  it(`Если все ответы быстрые, остались все жизни, функция возвращает 1650`, () => {
    assert.equal(1650, getScoring([
      {right: true, time: 21},
      {right: true, time: 27},
      {right: true, time: 28},
      {right: true, time: 25},
      {right: true, time: 23},
      {right: true, time: 22},
      {right: true, time: 21},
      {right: true, time: 27},
      {right: true, time: 25},
      {right: true, time: 26}
    ], 3));
  });
  it(`Если все ответы медленные, остались все жизни, функция возвращает 650`, () => {
    assert.equal(650, getScoring([
      {right: true, time: 1},
      {right: true, time: 7},
      {right: true, time: 8},
      {right: true, time: 5},
      {right: true, time: 3},
      {right: true, time: 2},
      {right: true, time: 1},
      {right: true, time: 7},
      {right: true, time: 5},
      {right: true, time: 6}
    ], 3));
  });
  it(`Если три ответа неправильные, а остальные не быстрые и не медленные, то функция возвращает 700`, () => {
    assert.equal(700, getScoring([
      {right: true, time: 11},
      {right: false, time: 17},
      {right: true, time: 18},
      {right: true, time: 15},
      {right: false, time: 13},
      {right: true, time: 12},
      {right: true, time: 11},
      {right: false, time: 17},
      {right: true, time: 15},
      {right: true, time: 16}
    ], 0));
  });
});

describe(`getTimer`, () => {
  it(`При достижении конца таймер должен сообщить о том, что он закончен`, () => {
    const timer = getTimer(3);
    timer.tick();
    timer.tick();
    assert.equal(`end`, timer.tick());
  });
  it(`При каждом обновлении таймера (вызов метода tick) время уменьшается на единицу`, () => {
    const timer = getTimer(5);
    assert.equal(4, timer.tick());
    assert.equal(3, timer.tick());
    assert.equal(2, timer.tick());
    assert.equal(1, timer.tick());
  });
});
