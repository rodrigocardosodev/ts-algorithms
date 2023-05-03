function selectionSort(input: string): string {
  let arr = input.split('');
  let n = arr.length;

  for (let i = 0; i < n; i++) {
      // Encontre o mínimo no array desordenado
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
          if (arr[j] < arr[minIdx]) {
              minIdx = j;
          }
      }

      // Troque o elemento mínimo encontrado com o primeiro elemento
      let temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
  }

  return arr.join('');
}

// Testando o algoritmo
export const runSelectionSort = (unsortedString: string) => {
  const sortedString = selectionSort(unsortedString);
  console.log(sortedString);
}
