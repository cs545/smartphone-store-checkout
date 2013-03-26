$(document).ready(function() {
				
	$('.inner_section').hide();
	$('.section_title').hide();

	$('#section_1 .inner_section').show();
	$('#section_1 .section_title').show();



	$("button.next_step").click(function(){
		$(this).parent().parent().parent(".section").toggleClass("active", 4000);
		$(this).parent().parent(".inner_section").siblings(".section_title").fadeOut(300);
		$(this).parent().parent(".inner_section").fadeOut(300, function(){
			$(this).siblings(".title_area").animate({width:'39px'}, 500);
			$(this).parent(".section").animate({width:'39px'}, 500, function(){
				$(this).css("z-index", "auto");
				$(this).next().css("z-index", "10");
				$(this).children(".section_number").css("z-index", "11");
				$(this).next().toggleClass("active", 4000);
				$(this).next().children(".inner_section").fadeIn(300);
				$(this).next().children(".section_title").fadeIn(300);
			}).css('overflow', 'visible');
		});
	});

});	
