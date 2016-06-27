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

    if ($.isNumeric(tempToConvert)) {
      convertedFahr = fahrToCels(tempToConvert);
      convertedCels = celsToFahr(tempToConvert);

      console.log("convertedFahr: " + convertedFahr);
      console.log("convertedCels: " + convertedCels);
      console.log("Original number converted!");

      var resultFahr = formatConvertedTemp(tempToConvert, convertedFahr, formattedFahr);
      var resultCels = formatConvertedTemp(tempToConvert, convertedCels, formattedCels);
      
      console.log(resultFahr);
      console.log(resultCels);
      
      $resultsContainer.append(resultFahr, resultCels);
    } else {
      $resultsContainer.addClass("error");
      $resultsContainer.html("Ah, we can only convert numbers.");
    }
  })
});

var fahrToCels = function (fahr) {
  return ((fahr - 32) * (5/9)).toFixed(0);
};

var celsToFahr = function (celsius) {
  return (((celsius * 9) / 5) + 32).toFixed(0);
};

var formatConvertedTemp = function(orig, temp, scale) {
  return "<p>" + orig + " is " + temp + scale + "!</p>";
};