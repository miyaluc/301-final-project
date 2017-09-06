'use strict';

// make click function and put API request inside of it - function that runs when hitting the button that makes request for me

$('#click-me').on('click', function(e) {
    e.preventDefault();
    $.getJSON('https://api.darksky.net/forecast/e8130e2e58e8b8f752de9220cb7c2e8e/37.8267,-122.4233&callback=?', function(forecast) {
      console.log(forecast);
      // .then(function) {
        //do something, maybe append to page
      // };
    });
  })
// }

// letsPlay();
