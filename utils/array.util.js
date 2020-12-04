export function sortObjectArrayByKeyAndDirection(objectList, direction, key) {
  direction = direction.toLowerCase();
  if (!direction || !key) {
    return objectList;
  }
  // assume direction is given as null, 'asc' or 'dsc'
  const dir = direction === 'asc' ? 1 : -1;
  return objectList.sort((op1, op2) => {
    if (op1[key] === op2[key]) return 0;
    return op1[key] > op2[key] ? dir : (dir * -1);
  });
}
