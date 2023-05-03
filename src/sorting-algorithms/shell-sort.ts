function shellSort(input: string): string {
  let arr = input.split('');
  let n = arr.length;

  // Comece com um intervalo grande, depois reduza
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
      // Faça uma inserção ordenada para este intervalo (ou lacuna)
      for (let i = gap; i < n; i++) {
          let temp = arr[i];
          let j;
          for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
              arr[j] = arr[j - gap];
          }
          arr[j] = temp;
      }
  }

  return arr.join('');
}

// Testando o algoritmo
export const runShellSort = (unsortedString: string): string => {
  const sortedString = shellSort(unsortedString);
  return sortedString;
}
