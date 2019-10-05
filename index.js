async function fetchRandomQuote() {
    const response = await fetch('https://api.kanye.rest')
    const body = await response.json()

    document.querySelector('#quote').innerHTML = body.quote
}

fetchRandomQuote()
