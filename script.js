const apiUrl = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const quoteBtn = document.getElementById("quote-btn");
const tweetBtn = document.getElementById("tweet-btn");

async function getQuote(url) {
    const response = await fetch(url);
    let data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by " + author.innerHTML, "Tweet Window", "width=600, height=500");
}

getQuote(apiUrl);

quoteBtn.addEventListener("click", () => {
    getQuote(apiUrl);
});

tweetBtn.addEventListener("click", tweet);