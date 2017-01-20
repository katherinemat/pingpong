var countDown = function(number) {
  var countDownArray = [];
  for(index = number-1; index >= 0; index--) {
    countDownArray.push(number - index);
  }

  countDownArray.splice(2, 1, "ping");
  countDownArray.splice(4, 1, "pong");

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
