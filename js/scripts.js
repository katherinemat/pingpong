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

    var userInput = Math.abs(Math.round(parseFloat($("input#number").val())));
    console.log(userInput);

    var result = countDown(userInput);

    if (result === false) {
      $(".badInput").show();
    } else {
      $("#results li").remove();
      $(".badInput").hide();
      for(n = 0; n < result.length; n++) {
        $("#results").append("<li>" + result[n]);
      }
    }
  });
});
