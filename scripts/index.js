const initialTheme = document.querySelector('.toggle-1');
const themeOne = document.querySelector('.theme-1');
const themeTwo = document.querySelector('.theme-2');
const themeThree = document.querySelector('.theme-3');
const key = Array.from(document.getElementsByClassName('keys'));
const getAndDisplayScreen = document.querySelector('.content');


themeOne.addEventListener('click', () => {
  initialTheme.classList.remove('toggle-2');
  initialTheme.classList.remove('toggle-3');
})

themeTwo.addEventListener('click', () => {
  initialTheme.classList.add('toggle-2');
  initialTheme.classList.remove('toggle-3');
})

themeThree.addEventListener('click', () => {
  initialTheme.classList.add('toggle-3');
})


key.forEach(num => {
  num.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case 'RESET':
        getAndDisplayScreen.innerText = '';
        break;
      case 'DEL':
        getAndDisplayScreen.innerText = getAndDisplayScreen.innerText.slice(0, -1);
        break;
      case '=':
        try {
          getAndDisplayScreen.innerText = eval(getAndDisplayScreen.innerText);
        } catch {
          getAndDisplayScreen.innerText = 'Error!';
        }
        break;
    
      default:
        getAndDisplayScreen.innerText += e.target.innerText;
    }
  })
})

