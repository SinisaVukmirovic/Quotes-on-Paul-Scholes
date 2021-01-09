const generateBtnElem = document.querySelector('#getQuote');
const appElem = document.querySelector('#app');

const generateQuote = () => {
    getQuotesData().then(results => {
        const amountOfData = results.length;

        let randomQuoteNumb = getRandomQuoteNumb(amountOfData);
        let randomedQuote = results[randomQuoteNumb];

        // const { avatar, author, title, quote } = results[randomQuoteNumb];
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
    // const { avatar, author, title, quote } = data[randomQuoteNumb];
    const { avatar, author, title, quote } = randomedQuote;

    appElem.innerHTML = `
        <img src=${avatar} alt="Profile image of the Quote author">
        <h3>${author}</h3>
        <span>${title}</span>
        <p>${quote}</p>
    `;

    // const avatarElem = document.createElement('img');

    // console.log(quote);
    // avatarElem.setAttribute('src', avatar);
    // avatarElem.setAttribute('alt', 'Profile image of the author');
    // // avatar.alt = `${data[33].avatar}`;
    // appElem.appendChild(avatarElem);
};

generateBtnElem.addEventListener('click', generateQuote);