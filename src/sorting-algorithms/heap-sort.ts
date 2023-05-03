function heapSort(input: string): string {
  let arr = input.split('');
  let n = arr.length;

  // Construir um heap máximo
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
      heapify(arr, n, i);

  // Extrair elemento um por um do heap
  for (let i = n - 1; i > 0; i--) {
      // Mover a raiz atual para o fim
      let temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;

      // Chamar heapify na pilha reduzida
      heapify(arr, i, 0);
  }

  return arr.join('');
}

function heapify(arr: string[], n: number, i: number) {
  let largest = i;  // Inicializar maior como raiz
  let left = 2 * i + 1;  // Esquerda = 2*i + 1
  let right = 2 * i + 2;  // Direita = 2*i + 2

  // Se o filho esquerdo é maior que a raiz
  if (left < n && arr[left] > arr[largest])
      largest = left;

  // Se o filho direito é maior que a raiz
  if (right < n && arr[right] > arr[largest])
      largest = right;

  // Se maior não é raiz
  if (largest !== i) {
      let swap = arr[i];
      arr[i] = arr[largest];
      arr[largest] = swap;

      // Recursivamente heapify o subárvore afetado
      heapify(arr, n, largest);
  }
}

// Testando o algoritmo
export const runHeapSort = (unsortedString: string): string => {
  const sortedString = heapSort(unsortedString);
  return sortedString;
}
