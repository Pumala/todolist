$(document).ready(function() {

  var remainingCount = 0;
  var completedCount = 0;
  var totalCount = 0;


  $("input:text").keypress(function(event) {
    if (event.which === 13) {
      newTodo = $(this).val();
      $(this).val("");
      $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + newTodo + "</li>");
      totalCount++;
      remainingCount++;
      updateCount();
    }
  });

  $("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
      if ($(this).hasClass("completed")) {
        completedCount++;
        remainingCount--;
        updateCount();
      } else {
        completedCount--;
        remainingCount++;
        updateCount();
      }
  });

  $("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(1000, function() {
      $(this).remove();
      if ($(this).hasClass("completed")) {
        completedCount--;
      } else {
        remainingCount--;
      }
      totalCount--;
      updateCount();
    });
    event.stopPropagation();
  });

  function updateCount() {
    $("#remaining-count").text(remainingCount);
    $("#completed-count").text(completedCount);
    $("#total-count").text(totalCount);
  }

  $(function() {
      $("ul").sortable();
      $("ul").disableSelection();
    });

})