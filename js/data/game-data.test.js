import assert from 'assert';
import {scoring} from './game-data';

describe(`Array`, () => {
  describe(`#indexOf()`, () => {
    it(`should return -1 when the value is not present`, () => {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});

describe(`Scoring`, () => {
  it(`Если игрок ответил меньше чем на 10 вопросов, то игра считается непройденой и функция должна вернуть -1`, () => {
    assert.equal(-1, scoring([], 3));
  });
  it(`Если игрок ответил на все вопросы и не быстро и не медленно и у него остались все жизни, то функция должна вернуть 1150 очков`, () => {
    assert.equal(1150, scoring([`middle`, `middle`, `middle`, `middle`, `middle`, `middle`, `middle`, `middle`, `middle`, `middle`], 3));
  });
  it(`Если все ответы быстрые, остались все жизни, функция возвращает 1650`, () => {
    assert.equal(1650, scoring([`fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`], 3));
  });
  it(`Если все ответы медленные, остались все жизни, функция возвращает 650`, () => {
    assert.equal(650, scoring([`slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`], 3));
  });
  it(`Если три ответа неправильные, а остальные не быстрые и не медленные, то функция возвращает 700`, () => {
    assert.equal(700, scoring([`middle`, `fail`, `middle`, `fail`, `middle`, `middle`, `fail`, `middle`, `middle`, `middle`], 0));
  });
});
