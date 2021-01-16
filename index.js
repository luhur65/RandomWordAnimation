const textH1 = document.querySelector('h1');
const playButton = document.querySelector('.play');
const dataText = ['Zonk', 'Apple', 'Banana', 'Papaya', 'Watermelon', 'Zonk', 'Coconuts', 'Pineapple', 'Orange', 'Strawberry', 'Grapes', 'Zonk'];

// ... generate random num by length data
const getRandomNum = limit => Math.floor(Math.random() * limit);

// ... take text by random num
const getTextbyRandom = text => text[getRandomNum(text.length)];

// ... show Up alert
const myCustomAlert = (title, text, type) => `<div class="alert alert-${type} alert-dismissible fade show" role="alert"> <strong>${title}!</strong> ${text} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> </div>`;

// ... set alert into html
const getMyCustomAlert = (text, place) => (text == 'Zonk') ? place.innerHTML = myCustomAlert('Sorry', 'Maybe Next time you will get fruit', 'danger') : place.innerHTML = myCustomAlert('Yummy', 'You got ' + text, 'success');

// ... play
const play = _ => {

  // ... alert bootstrap
  const showUpAlert = document.querySelector('.show-alert');
  showUpAlert.innerHTML = "";

  // ... disabled the button when clicked
  playButton.disabled = true;

  // ... make interval to animation the text 
  const i = setInterval(function () {
    textH1.innerHTML = getTextbyRandom(dataText);
  }, 150);

  // ... stop the interval and activated button
  setTimeout(function () {
    clearInterval(i);
    playButton.disabled = false;
    getMyCustomAlert(textH1.innerHTML, showUpAlert);
  }, 8000);

}