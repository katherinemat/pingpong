var countDown = function(number) {
  var countDownArray = [];
  for(index = 0; index < number; index++) {
    countDownArray.push(number - index);
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
