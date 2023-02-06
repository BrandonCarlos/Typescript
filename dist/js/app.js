import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date());
console.log(negociacao.volume);

console.log(negociacao);
negociacao.quantidad = 10;
console.log(negociacao.quantidad);
// console.log(negociacao.data);
// console.log(negociacao.quantidade);
// console.log(negociacao.valor);
console.log(negociacao.volume);
