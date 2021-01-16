const RandomWord = (config = {
  dataText: [],
  htmlElem: '',
  interval: 150,
  timeout : 8000
}) => {

  // get element text
  const getTextElementHTML = elem => document.querySelector(elem);

  // get random number
  const getRandomInt = limit => Math.floor(Math.random() * limit);

  // ... take text by random num
  const getTextbyRandom = AllText => AllText[getRandomInt(AllText.length)];

  // set interval to make animation
  const i = setInterval(function () {
    getTextElementHTML(config.htmlElem).innerHTML = getTextbyRandom(config.dataText);
  }, 150);

  // ... stop the interval 
  setTimeout(function () {
    clearInterval(i);
  }, 8000);

}

export default RandomWord;