$(document).ready(function() {
  $("form#inputNumber").submit(function(event) {
    event.preventDefault();
    var result = parseInt($("input#number").val());
    $("#results").text(result);
  });
});
