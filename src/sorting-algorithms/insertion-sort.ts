function insertionSort(input: string): string {
  let arr = input.split('');
  let n = arr.length;

  for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;

      // Mova os elementos do arr[0...i-1], que são maiores que a chave, para uma posição à frente de sua posição atual
      while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j];
          j = j - 1;
      }
      arr[j + 1] = key;
  }

  return arr.join('');
}

// Testando o algoritmo
export const runInsertionSort = (unsortedString: string): string => {
  const sortedString = insertionSort(unsortedString);
  return sortedString;
}
