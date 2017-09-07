'use strict';

// make click function and put API request inside of it - function that runs when hitting the button that makes request for me

$('#click-me').on('click', function(e) {
  e.preventDefault();
  $.ajax({
      url: "https://api.darksky.net/forecast/e8130e2e58e8b8f752de9220cb7c2e8e/37.8267,-122.4233",

      // The name of the callback parameter, as specified by the YQL service
      jsonp: "callback",

      // Tell jQuery we're expecting JSONP
      dataType: "jsonp",

      // Work with the response
      success: function( response ) {
          console.log( response ); // server response
      }
  });
});


// for lines 9-17
// .then(forecast => {
//     console.log(forecast)
//     .then(callback)
//     //do something, maybe append to page
// }, error => {
//     console.log(error)
//   };
// })
// }));

// letsPlay();
