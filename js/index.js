const app = document.querySelector('main.app');

const generateBtnElem = app.querySelector('#getQuote');
const quoteElem = app.querySelector('.quote-elem');

const generateQuote = () => {
    getQuotesData().then(results => {
        const amountOfData = results.length;

        let randomQuoteNumb = getRandomQuoteNumb(amountOfData);
        let randomedQuote = results[randomQuoteNumb];

        displayQuoteInfo(randomedQuote);

    }).catch(error => {
        console.log(error);
    });
};

const getQuotesData = async () => {
    const jsonDataUrl = '../data/quotes.json';

    const response = await fetch(jsonDataUrl);
    const data = await response.json();

    return data;
};

const getRandomQuoteNumb = (amountOfData) => {
    return Math.floor(Math.random() * amountOfData);
};


const displayQuoteInfo = (randomedQuote) => {
    const { avatar, author, desc, quote } = randomedQuote;

    quoteElem.innerHTML = `
        <h2 class="author">${author}</h2>
        <span class="desc">${desc}</span>
        <div class="quote">
            <p>${quote}</p>
        </div>
        <img class="image" src=${avatar} alt="Profile image of the Quote author" />
    `;
};

generateBtnElem.addEventListener('click', generateQuote);