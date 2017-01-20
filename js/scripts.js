var countDown = function(number) {
  var countDownArray = [];
  countDownArray.push(number, number - 1, number - 2, number - 3);
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
