//Mark a todo complete or undo the complete
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click to delete a todo
$("ul").on("click", "span", function(event){
	//$(this).toggleClass("delete");
	$(this).parent().fadeOut(500, function(){
		//this refers to li not span it is inside of the function called in parent
		$(this).remove();    
	});
	//stops event from bubbling up through parent elements
	event.stopPropagation();

});

//listener for text input
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add it to the ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText +"</li>");
	}
});

//click listener for + sign
$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});