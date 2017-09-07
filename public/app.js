'use strict';

// make click function and put API request inside of it - function that runs when hitting the button that makes request for me

$('#click-me').on('click', function(e) {
  let latlong = $(`select[name=cities]`).val();
  console.log(latlong);
  e.preventDefault();
  $.ajax({
      url: `https://api.darksky.net/forecast/e8130e2e58e8b8f752de9220cb7c2e8e/${latlong}`,

      // The name of the callback parameter, as specified by the YQL service
      jsonp: "callback",

      // Tell jQuery we're expecting JSONP
      dataType: "jsonp",

      // Work with the response
      success: function( response ) {
          console.log( response ); // server response
          $('#summary').text(`Summary: ${response.daily.summary}`);
          $('#weather-icon').text(`Weather Symbol:: ${response.currently.icon}`);
          $('#precip-chance').text(`Chance of Precipitation: ${response.daily.data.precipProbability}`);
          $('#precip-type').text(`Type of Precipitation: ${response.daily.data.precipType}`);
          $('#high').text(`High: ${response.daily.data.apparentTemperatureHigh}`);
          //create rawIndex template of what I want everything to look like
      }
  });
});

// Summary: response.daily.summary
// Weather Symbol: response.currently.icon
// Chance of Precipitation: response.daily.data.precipProbability
// Type of Precipitation: response.daily.data.precipType
// High: response.daily.data.apparentTemperatureHigh
