const loadQuote = () =>{
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => displayQuote(data))
}

const displayQuote = quote => {
    document.getElementById('quote').innerText = quote.quote;
}