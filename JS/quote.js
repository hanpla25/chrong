import quotesApi from "./quotesApi.js";

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

let quoteApiLength = quotesApi.length;

const todaysQuote = quotesApi[Math.floor(Math.random() * quoteApiLength)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
