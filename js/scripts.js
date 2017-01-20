var countDown = function(number) {
  if (!number) {
    return false;
  }

  var countDownArray = [];

  for(i = number-1; i >= 0; i--) {
    countDownArray.push(number - i);
  }
  var arrayLength = countDownArray.length;

  for(j = 0; j < arrayLength; j++) {
    var divisible = countDownArray[j];
    if (divisible % 15 === 0) {
      countDownArray.splice((divisible - 1), 1, "pingpong");
    } else if (divisible % 5 === 0) {
      countDownArray.splice((divisible - 1), 1, "pong");
    } else if (divisible % 3 === 0) {
      countDownArray.splice((divisible -1), 1, "ping");
    }
  }
  return countDownArray;
}

$(document).ready(function() {
  $("form#inputNumber").submit(function(event) {
    event.preventDefault();

    $(".submitted").toggle();
    $(".notSubmitted").toggle();

    var userInput = Math.abs(Math.round(parseFloat($("input#number").val())));

    var result = countDown(userInput);

    if (result === false) {
      $("#results li").remove();
      $(".badInput").show();
    } else {
      $("#results li").remove();
      $(".badInput").hide();
      for(n = 0; n < result.length; n++) {
        if (result[n] === "pingpong") {
          $("#results").append("<li class='pingpong'>" + result[n]);
        } else if (result[n] === "pong") {
          $("#results").append("<li class='pong'>" + result[n]);
        } else if (result[n] === "ping") {
          $("#results").append("<li class='ping'>" + result[n]);
        } else {
          $("#results").append("<li>" + result[n]);
        }
      }
    }
  });
});
