//click on list to check off 
$("ul").on("click", "li", function(event){
	$(this).toggleClass("checked");
	event.stopPropagation();
})

//Click on X to delete item 
$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing text value and clear input
		var todoText = $(this).val();
		$(this).val("");
		//add a new item list to ul
		$("ul").append("<li><span><i class='fas fa-trash'></i></span>" + todoText + "</li>");  //"" and '' should be used in switching manner
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})