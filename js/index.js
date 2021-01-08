const generateBtnElem = document.querySelector('#getQuote');
const appElem = document.querySelector('#app');

const jsonDataUrl = '../data/quotes.json';

const getQuote = async () => {
    const response = await fetch(jsonDataUrl);
    const data = await response.json();

    findOutTheAmountOfData(data);

    // const dataAmount = data.length;

    // let randomQuoteNumb = getRandomQuoteNumb(dataAmount);
    
    // displayQuoteElem(data, randomQuoteNumb);
};

const findOutTheAmountOfData = (data) => {
    const amountOfData = data.length;

    let randomQuoteNumb = getRandomQuoteNumb(amountOfData);
    
    displayQuoteElem(data, randomQuoteNumb);
};

const getRandomQuoteNumb = (amountOfData) => {
    
    // let randomQuoteNumb = Math.floor(Math.random() * amountofData);
    return Math.floor(Math.random() * amountOfData);
};

const displayQuoteElem = (data, randomQuoteNumb) => {
    const { avatar, author, title, quote } = data[randomQuoteNumb];

    const avatarElem = document.createElement('img');

    // console.log(quote);
    avatarElem.setAttribute('src', avatar);
    avatarElem.setAttribute('alt', 'Profile image of the author');
    // avatar.alt = `${data[33].avatar}`;
    appElem.appendChild(avatarElem);
};

generateBtnElem.addEventListener('click', getQuote);