function quickSort(input: string): string {
  if (input.length <= 1) {
      return input;
  }

  let arr = input.split('');
  quickSortHelper(arr, 0, arr.length - 1);
  return arr.join('');
}

function quickSortHelper(arr: string[], low: number, high: number) {
  if (low < high) {
      let pi = partition(arr, low, high);
      quickSortHelper(arr, low, pi - 1);
      quickSortHelper(arr, pi + 1, high);
  }
}

function partition(arr: string[], low: number, high: number): number {
  let pivot = arr[high];
  let i = (low - 1);

  for (let j = low; j <= high - 1; j++) {
      if (arr[j] < pivot) {
          i++;
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
      }
  }
  let temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;
  return (i + 1);
}

const runQuickSort = (unsortedString: string) => {
  const sortedString = quickSort(unsortedString);
  console.log(sortedString);
}

runQuickSort("dcbaehgf");
