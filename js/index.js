const app = document.querySelector('main.app');

const generateBtnElem = app.querySelector('#getQuote');
const quoteElem = app.querySelector('.quote-elem');

const generateQuote = () => {
    getQuotesData().then(results => {
        const amountOfData = results.length;

        let randomQuoteNumb = getRandomQuoteNumb(amountOfData);
        let randomedQuote = results[randomQuoteNumb];

        // const { avatar, author, desc, quote } = results[randomQuoteNumb];
        // console.log(author);

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

    // let randomQuoteNumb = getRandomQuoteNumb(dataAmount);
    
    // displayQuoteInfo(data, randomQuoteNumb);
};

const getRandomQuoteNumb = (amountOfData) => {
    return Math.floor(Math.random() * amountOfData);
};


const displayQuoteInfo = (randomedQuote) => {
    // const { avatar, author, desc, quote } = data[randomQuoteNumb];
    const { avatar, author, desc, quote } = randomedQuote;

    quoteElem.innerHTML = `
        <h2 class="author">${author}</h2>
        <span class="desc">${desc}</span>
        <p class="quote">${quote}</p>
        <img class="image" src=${avatar} alt="Profile image of the Quote author" />
    `;

    // const avatarElem = document.createElement('img');

    // console.log(quote);
    // avatarElem.setAttribute('src', avatar);
    // avatarElem.setAttribute('alt', 'Profile image of the author');
    // // avatar.alt = `${data[33].avatar}`;
    // appElem.appendChild(avatarElem);
};

generateBtnElem.addEventListener('click', generateQuote);