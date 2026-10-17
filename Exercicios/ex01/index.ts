// 1. Declaramos duas variáveis com os números que queremos somar.
const x = 10;
const y = 17;

// 2. Criamos uma função chamada sum
// Ela recebe dois parâmetros do tipo number e retorna um number
function sum(a: number, b: number): number {
    // 3. Somamos os dois parâmetros e retornamos o resultado
    return a + b;
}

// 4. Chamamos a função passando x e y como argumentos
// O resultado da soma é armazenado na variável result
const result = sum(x, y);

// 5. Exibimos o resultado no terminal
console.log(result);