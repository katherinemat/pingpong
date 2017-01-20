var countDown = function(number) {
  var countDownArray = [];

  for(i = number-1; i >= 0; i--) {
    countDownArray.push(number - i);
  }

  var arrayLength = countDownArray.length;

  for(j = 0; j < arrayLength; j++) {
    if (countDownArray[j] % 15 === 0) {
      countDownArray.splice(countDownArray[j-1], 1, "pingpong");
    } else if (countDownArray[j] % 5 === 0) {
      countDownArray.splice(countDownArray[j-1], 1, "pong");
    }
  }

  return countDownArray;
}


$(document).ready(function() {
  $("form#inputNumber").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#number").val());
    var result = countDown(userInput);
    $("#results").text(result);
  });
});
