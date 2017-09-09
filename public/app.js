'use strict';

// make click function and put API request inside of it - function that runs when hitting the button that makes request for me

$('.weather-results').hide();
$('.weather-gif1').hide();
$('.weather-gif2').hide();
$('.weather-gif3').hide();
//stretch goal: create if statement that displays weather gifs depending on weather icon info provided by API

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
          $('#precip-chance').text(`Chance of Precipitation: ${response.currently.precipProbability}`);
          $('.weather-results').show();
          if ($('#weather-icon' == 'clear-day' || 'clear-night')) {
            $('.weather-gif1').show();
            console.log('Play ball!');
          } else if ($('#weather-icon' == 'rain' || 'thunderstorm')) {
            $('.weather-gif2').show();
          } else if ($('#weather-icon' == 'snow')) {
            $('weather-gif3').show();
          }
    }
  });
});
