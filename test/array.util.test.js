import { expect } from 'chai';

import { sortObjectArrayByKeyAndDirection } from '../utils/array.util';

describe('utils', () => {
  it('sortObjectArrayByKeyAndDirection should return a sorted object list with a given key and direction', () => {
    const testObjectList = [
      { name: 'a', key: 1 },
      { name: 'b', key: 5 },
      { name: 'c', key: 3 },
      { name: 'd', key: 2 },
      { name: 'e', key: 4 },
    ];

    const expectedResult = [
      { name: 'a', key: 1 },
      { name: 'd', key: 2 },
      { name: 'c', key: 3 },
      { name: 'e', key: 4 },
      { name: 'b', key: 5 },
    ];

    const result1 = sortObjectArrayByKeyAndDirection(testObjectList, 'asc', 'key');
    const result2 = sortObjectArrayByKeyAndDirection(testObjectList, 'desc', 'key');
    const result3 = sortObjectArrayByKeyAndDirection(testObjectList, null, 'key');

    expect(result1).to.deep.equal(expectedResult);
    expect(result2).to.deep.equal(expectedResult.reverse());
    expect(result3).to.deep.equal(testObjectList);
  });
});
