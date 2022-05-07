// возвращает массив элементов boolean с одним единственном элементом true в заданной позиции
export const getButtonStateArray = (
  size: number,
  activIndex: number
): boolean[] => {
  const arr = new Array(size);
  arr.forEach((element, index) => (arr[index] = true));
  arr[activIndex] = true;
  return arr;
};
