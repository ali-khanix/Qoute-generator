let apiQuotes = [];

const quoteContainer = document.getElementById('quote-container');

const textQuote = document.getElementById('quote');
const textAuthor = document.getElementById('author');

const btnTwitter = document.getElementById('twitter-btn');
const btnNewQuote = document.getElementById('new-quote-btn');

// Show new quote
function newQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  textQuote.textContent = quote.text;
  author.textContent = quote.author;
}

btnNewQuote.addEventListener('click', () => {});

async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes';

  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    //Cath error here
  }
}

// On Load
getQuotes();
