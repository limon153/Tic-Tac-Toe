import {
  getWinningPostion,
  getPlayerWinningPosition,
  getAiNextMove,
} from './game';

it('checking if next move of ai is win', () => {
  expect(
    getWinningPostion([null, 'X', null, 'O', 'X', 'O', null, null, null], 'X')
  ).toEqual(7);
  expect(
    getWinningPostion(['X', 'X', null, 'O', 'X', 'O', 'O', null, null], 'X')
  ).toEqual(8);
  expect(
    getWinningPostion(['X', 'O', null, 'O', 'X', 'O', 'O', null, null], 'X')
  ).toEqual(8);
  expect(
    getWinningPostion([null, 'O', null, 'O', null, 'O', 'O', null, null], 'O')
  ).toEqual(0);
  expect(
    getWinningPostion(['X', 'O', null, 'O', null, 'O', 'O', null, null], 'X')
  ).toEqual(null);
});

it('checking if next move of player is win', () => {
  expect(
    getPlayerWinningPosition(
      [null, 'X', null, 'O', 'X', 'O', null, null, null],
      'O'
    )
  ).toEqual(7);
  expect(
    getPlayerWinningPosition(
      ['X', 'X', null, 'O', 'X', 'O', 'O', null, null],
      'O'
    )
  ).toEqual(8);
  expect(
    getPlayerWinningPosition(
      ['X', 'O', null, 'O', 'X', 'O', 'O', null, null],
      'O'
    )
  ).toEqual(8);
  expect(
    getPlayerWinningPosition(
      [null, 'O', null, 'O', null, 'O', 'O', null, null],
      'X'
    )
  ).toEqual(0);
  expect(
    getPlayerWinningPosition(
      ['X', 'O', null, 'O', null, 'O', 'O', null, null],
      'O'
    )
  ).toEqual(null);
});

it('get next move of ai should win', () => {
  expect(
    getAiNextMove([null, 'X', null, 'O', 'X', 'O', null, null, null], 'X')
  ).toEqual(7);
});

it('get next move of ai when player should win', () => {
  expect(
    getAiNextMove([null, 'X', null, 'O', 'X', 'O', null, null, null], 'O')
  ).toEqual(7);
});

it('get next move of ai when there is just good position', () => {
  const position = getAiNextMove(
    [null, null, null, 'O', 'X', 'O', null, null, null],
    'X'
  );
  const isRightPosition =
    position === 0 ||
    position === 2 ||
    position === 6 ||
    position === 8 ||
    position === 4;
  expect(isRightPosition).toBeTruthy();
});

it('get next move of ai when there is some position', () => {
  expect(
    getAiNextMove(['O', 'X', 'O', null, 'O', null, 'X', 'O', 'X'], 'O')
  ).not.toBeNull();
});
