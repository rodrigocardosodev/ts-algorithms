function hashSort(input: string): string {
  // Número de possíveis caracteres ASCII. Estamos assumindo que a string de entrada contém apenas caracteres ASCII.
  const CHAR_NUM = 128;

  // Cria um array de contagem para todos os caracteres ASCII possíveis e inicializa todos os elementos como 0
  let count: number[] = new Array(CHAR_NUM).fill(0);

  // Conta a ocorrência de cada caractere
  for (let i = 0; i < input.length; i++) {
      count[input.charCodeAt(i)]++;
  }

  let result: string[] = [];

  // Insere cada caractere no array de resultados de acordo com a contagem
  for (let i = 0; i < CHAR_NUM; i++) {
      for (let j = 0; j < count[i]; j++) {
          result.push(String.fromCharCode(i));
      }
  }

  // Converte o array de resultados em uma string
  return result.join('');
}

// Testando o algoritmo
const runHashSort = (unsortedString: string) => {
  const sortedString = hashSort(unsortedString);
  console.log(sortedString);
}

runHashSort("dcbaehgf");