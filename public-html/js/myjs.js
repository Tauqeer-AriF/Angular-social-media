$(document).ready(function(){
  $("#like").click(function(){
      $("#like").toggleClass("like")
    $("#dislike").toggle(1000);
  });
});


$(document).ready(function(){
  $("#dislike").click(function(){
      $("#dislike").toggleClass("dislike")
  });
});