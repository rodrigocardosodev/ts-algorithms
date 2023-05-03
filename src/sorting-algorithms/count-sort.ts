function countingSort(input: string): string {
  let arr = input.split('');
  let n = arr.length;
  let output: string[] = new Array(n);
  let count: number[] = new Array(26).fill(0);  // Assume que a entrada contém apenas letras minúsculas

  // Armazene a contagem de cada caracter
  for (let i = 0; i < n; i++)
      count[arr[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;

  // Mude count[i] para que count[i] agora contenha a posição atual deste caracter na matriz de saída
  for (let i = 1; i <= 25; i++)
      count[i] += count[i - 1];

  // Construa a matriz de caracteres de saída
  for (let i = n - 1; i >= 0; i--) {
      output[count[arr[i].charCodeAt(0) - 'a'.charCodeAt(0)] - 1] = arr[i];
      count[arr[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
  }

  return output.join('');
}

// Testando o algoritmo
export const runCountingSort = (unsortedString: string) => {
  const sortedString = countingSort(unsortedString);
  console.log(sortedString);
}
