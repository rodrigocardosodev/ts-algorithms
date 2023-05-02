function mergeSort(input: string): string {
  if (input.length <= 1) {
      return input;
  }

  const middle = Math.floor(input.length / 2);
  const left = input.slice(0, middle);
  const right = input.slice(middle);

  return merge(
      mergeSort(left),
      mergeSort(right)
  );
}

function merge(left: string, right: string): string {
  let resultArray: string[] = [], leftIndex = 0, rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
          resultArray.push(left[leftIndex]);
          leftIndex++;
      } else {
          resultArray.push(right[rightIndex]);
          rightIndex++;
      }
  }
  return resultArray
      .concat(left.slice(leftIndex).split(''))
      .concat(right.slice(rightIndex).split(''))
      .join('');
}
const runMergeSort = (unsortedString: string) => {
  const sortedString = mergeSort(unsortedString)
  console.log(sortedString);
}

runMergeSort("dcbaehgf");