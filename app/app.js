"use strict";
exports.__esModule = true;
var negociacao_1 = require("./models/negociacao");
var negociacao = new negociacao_1.Negociacao(new Date(), 100);
console.log(negociacao);
console.log(negociacao.data, negociacao.quantidade, negociacao.valor, negociacao.volume);
