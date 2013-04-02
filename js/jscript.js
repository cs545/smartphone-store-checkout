$(document).ready(function() {
				
	$('.inner_section').hide();
	$('.section_title').hide();
	$('.section_number').css({ opacity: 0.5 });

	$('#section_number_1').css({ opacity: 1.0 });
	$('#section_1 .inner_section').show();
	$('#section_1 .section_title').show();

	$('#shipping_form').submit(function(event){
		event.preventDefault();
		console.log(this);
		$(this).parent().parent(".section").toggleClass("active", 4000);
		$(this).parent().parent(".section").prev().children(".section_number").css({ opacity: 0.5 });
		$(this).parent(".inner_section").siblings(".section_title").fadeOut(300);
		$(this).parent(".inner_section").fadeOut(300, function(){
			$(this).siblings(".title_area").animate({width:'39px'}, 500);
			$(this).parent(".section").animate({width:'39px'}, 500, function(){
				$(this).css("z-index", "auto");
				$(this).next().css("z-index", "10");
				$(this).children(".section_number").css("z-index", "11");
				$(this).next().toggleClass("active", 4000);
				$(this).next().children(".inner_section").fadeIn(300);
				$(this).next().children(".section_title").fadeIn(300);
				$(this).children(".section_number").css({ opacity: 1.0 });
			}).css('overflow', 'visible');
		});
	});

	$("button.next_step").click(function(){
		$(this).parent().parent().parent(".section").toggleClass("active", 4000);
		$(this).parent().parent().parent(".section").prev().children(".section_number").css({ opacity: 0.5 });
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
				$(this).children(".section_number").css({ opacity: 1.0 });
			}).css('overflow', 'visible');
		});
	});


	

	$("#sec-3-1-same_address input").click(function() {
		if ( $(this).is(":checked") ) {
			$(".bill_address input").attr("readonly", "readonly").addClass("pre-fill");
			$(".bill_address select").val( $("#recv_state").val() ).attr("disabled", "disabled");
			$("#bill_first_name").val( $("#recv_first_name").val() );
			$("#bill_last_name").val( $("#recv_last_name").val() );
			$("#bill_address_1").val( $("#recv_address_1").val() );
			$("#bill_address_2").val( $("#recv_address_2").val() );
			$("#bill_city").val( $("#recv_city").val() );
			$("#bill_zip").val( $("#recv_zip").val() );
			$("#bill_telephone").val( $("#recv_telephone").val() );
  		} else {
			$(".bill_address input").attr("readonly", "").removeClass("pre-fill").val("");
			$(".bill_address select").removeAttr("disabled").val("select")
  		}
	});


});	

