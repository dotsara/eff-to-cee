"use strict";

var formattedFahr = "&deg;F";
var formattedCels = "&deg;C";

$(document).ready(function() {
  console.log("hello! we are ready to convert.");

  var convertedFahr, convertedCels;
  var $resultsContainer = $('#results');


  $('#convert_temp').on('click', function(event){
    event.preventDefault();
    var tempToConvert = $('#temperature').val();
    console.log("You clicked the 'Convert!' button!");
    console.log("tempToConvert: " + tempToConvert);

    /*
      this time, I convert the number entered (still checking that it's
      a number) and display the number as a temp in both scales and 
      converted in both scales.
    */
    if ($.isNumeric(tempToConvert)) {
      convertedFahr = fahrToCels(tempToConvert);
      convertedCels = celsToFahr(tempToConvert);

      var resultFahr = "<p>" + tempToConvert + formattedFahr + " is " + convertedCels +  formattedCels + "</p>";
      var resultCels = "<p>" + tempToConvert + formattedCels + " is " + convertedFahr + formattedFahr + "</p>";
      
      /*
        emptying the results, in case someone's entering new numbers
        without reloading the page
      */
      $resultsContainer.empty();
      $resultsContainer.append(resultFahr, resultCels);
    } else {
      $resultsContainer.addClass("error");
      $resultsContainer.html("Ah, we can only convert numbers.");
    };

  })
});

var fahrToCels = function (fahr) {
  return ((fahr - 32) * (5/9)).toFixed(0);
};

var celsToFahr = function (celsius) {
  return (((celsius * 9) / 5) + 32).toFixed(0);
};
