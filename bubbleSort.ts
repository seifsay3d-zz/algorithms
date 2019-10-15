let arrayToSort = [1, 2, 4, 5, 8];

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let hasBeenSwapped = false;
    for (let j = 0; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        hasBeenSwapped = true;
      }
    }
    if (!hasBeenSwapped) break;
  }
  return array;
}

console.log(bubbleSort(arrayToSort));
