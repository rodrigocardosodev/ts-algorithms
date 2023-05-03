function radixSort(input: string): string {
  let arr = input.split('');
  const maxLen = Math.max(...arr.map(str => str.length));

  for (let i = 0; i < maxLen; i++) {
      let buckets: string[][] = Array.from({ length: 27 }, () => []); // 26 letras + 1 para strings vazias

      for (let str of arr) {
          let index = str.length <= i ? 0 : (str.charCodeAt(i) - 'a'.charCodeAt(0) + 1);
          buckets[index].push(str);
      }

      arr = buckets.reduce((acc, val) => acc.concat(val), []);
  }

  return arr.join('');
}

// Testando o algoritmo
export const runRadixSort = (unsortedString: string) => {
  const sortedString = radixSort(unsortedString);
  console.log(sortedString);
}
