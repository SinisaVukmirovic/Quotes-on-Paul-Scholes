const generateBtnElem = document.querySelector('#getQuote');
const appElem = document.querySelector('#app');

const jsonData = '../data/quotes.json';

async function getQuote() {
    const response = await fetch(jsonData);
    const data = await response.json();
    // const { avatar, author, title, quote } = data;
    // console.log(data[33].avatar);
    const avatar = document.createElement('img');

    // 1st way
    // avatar.setAttribute('src', data[33].avatar);
    // avatar.setAttribute('alt', 'Profile image of the author');
    // 2nd way
    avatar.src = data[33].avatar;
    avatar.alt = 'Profile image of the author';
    
    // avatar.alt = `${data[33].avatar}`;
    appElem.appendChild(avatar);
}

generateBtnElem.addEventListener('click', getQuote);