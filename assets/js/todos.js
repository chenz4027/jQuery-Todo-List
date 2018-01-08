// Check off Specific Todos by CLicking

$("ul").on("click", "li", function(){
	// if li is gray
	$(this).toggleClass("completed");
});


//Click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
		//this here refers to the li not the span
	});
	//remove the li
	event.stopPropagation();
});


$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var value = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$('ul').append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>" + value + "</li>")

	}
	
});

$(".fa-plus").click(function(){
	$("input[type = 'text']").fadeToggle();
});
