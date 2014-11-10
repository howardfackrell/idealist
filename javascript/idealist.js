$(document).ready(function() {
  $(".shopping-list").on("click", ".fa-remove", function() {
  	$(this).closest('li').remove();
  });

  $(".entryfield").keypress(function(event) {
    if (event.which == 13) {
    	event.preventDefault();
    	var entryfield = $(".entryfield");
    	var newItem = entryfield.val();
    	entryfield.val('');
    	var t = $("<li><input type='checkbox' /><p>" + newItem + "</p><a class='fa fa-remove'></a></li>");
    	$(".shopping-list > ul").prepend(t);
    }
  });

  $(".shopping-list").on('click', "input[type=checkbox]", function() {
  	console.log("click happens");
    if ($(this).is(':checked')) {
      $(this).closest("li").addClass("done");
    } else {
      $(this).closest("li").removeClass("done");	
    }
  });
  
});