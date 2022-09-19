export const getRandomArray = (array: any[], length: number) => {
  let result = [];
  for (let i = 0; i < length; i++) {    
    const randomIndex = Math.floor(Math.random() * array.length);
    result.push(array[randomIndex]);
  }
  return result;
};
