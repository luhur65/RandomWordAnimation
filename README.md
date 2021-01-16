# Random Word 

[![Netlify Status](https://api.netlify.com/api/v1/badges/bb0b322c-cd3d-4c54-8a41-792d559d8f1a/deploy-status)](https://app.netlify.com/sites/random-text/deploys)

Demo 
[Lihat Demo](https://random-text.netlify.app)

<p>Random Word is a package to create random word animation and generate randomized words based on word data provided by the user.</p>

## How to use

```JavaScript 
// Config for Random Word
RandomWord({
  dataText: [], // Words to be shuffled as animation 
  htmlElem: '', // The placeholder html tag for text
  interval: 150, // by default time inteval set to 150
  timeout: 8000, // by default timeout set to 8000 ( 8 seconds)
});
```

here a example to use random word :

```JavaScript  

// call the random word

import RandomWord from "./script/src/main.js";

RandomWord({
  dataText: ['hai', 'hello'],
  htmlElem: 'h1',
});

```

<p> If you want to change or add features of this package please make a pull req on Github so I'll be happy to check your code </p>.
<p> All of my contact person is on my github account , don't forget to check it</p>