const generateBtnElem = document.querySelector('#getQuote');
const appElem = document.querySelector('#app');

const jsonDataUrl = '../data/quotes.json';

const getRandomQuoteNumb = (dataAmount) => {
    const randomQuoteNumb = Math.floor(Math.random() * dataAmount);
    return randomQuoteNumb;
};

async function getQuote() {
    const response = await fetch(jsonDataUrl);
    const data = await response.json();

    const dataAmount = data.length;

    const avatarElem = document.createElement('img');

    let randomQuoteNumb = getRandomQuoteNumb(dataAmount);

    // 1st way
    // avatar.setAttribute('src', data[33].avatar);
    // avatar.setAttribute('alt', 'Profile image of the author');
    // 2nd way
    const { avatar, author, title, quote } = data[randomQuoteNumb];
    console.log(title);
    avatarElem.src = avatar;
    avatarElem.alt = 'Profile image of the author';
    // avatar.alt = `${data[33].avatar}`;
    appElem.appendChild(avatarElem);
}

generateBtnElem.addEventListener('click', getQuote);