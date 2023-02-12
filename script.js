let apiQuotes = [];
const quoteContainer = document.getElementById('quote-container');
const textQuote = document.getElementById('quote');
const textAuthor = document.getElementById('author');
const btnTwitter = document.getElementById('twitter-btn');
const btnNewQuote = document.getElementById('new-quote-btn');

// Show new quote
function newQuote() {
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  // Check if author fiels is blank and replace it with "Unknown"
  if (!quote.author) {
    textAuthor.textContent = 'Unknown';
  } else {
    textAuthor.textContent = quote.author;
  }

  // Check if Quote length is long, so determine style
  if (quote.text.length > 100) {
    textQuote.classList.add('long-quote');
  } else {
    textQuote.classList.remove('long-quote');
  }
  textQuote.textContent = quote.text;
}

function twittQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${textQuote.textContent} - ${textAuthor.textContent}`;
  window.open(twitterUrl, '_blank');
}

btnNewQuote.addEventListener('click', newQuote);
btnTwitter.addEventListener('click', twittQuote);

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
