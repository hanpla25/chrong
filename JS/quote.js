import quotesApi from "./quotesApi.js";

// DOM
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

// 변수
let quoteApiLength = quotesApi.length;
const todaysQuote = quotesApi[Math.floor(Math.random() * quoteApiLength)];

// 이벤트리스너
quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = `- ${todaysQuote.author}`;
