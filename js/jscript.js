$(document).ready(function() {

	var current_section = 1;

	$('.inner_section').hide();
	$('.section_title').hide();
	$('.section_number').css({ opacity: 0.5 });

	$('#section_number_1').css({ opacity: 1.0 });
	$('#section_1 .inner_section').show();
	$('#section_1 .section_title').show();

	/*checks which payment section should be active in section 3 */
	function check3payment(){
		if ( $("#trans_type_cc").is(":checked") ) {
			$("#sec-3-1-dw_payment_info").fadeOut(300, function() {
				$("#sec-3-1-cc_payment_info").fadeIn(300);
			});
			$("#sec-3-1-cc_payment_info input").attr("required", "required");
		} else if ( $("#trans_type_dw").is(":checked") ) {
			$("#sec-3-1-cc_payment_info").fadeOut(300, function() {
				$("#sec-3-1-dw_payment_info").fadeIn(300);
			});
			$("#sec-3-1-dw_payment_info input").attr("required", "required");
		} else {
			$("#sec-3-1-cc_payment_info").fadeOut(300);
			$("#sec-3-1-dw_payment_info").fadeOut(300);
		}
	}

	/* checks to see if "use same address" is checked in section 3 */
	function check3address(){
		console.log("checking address");
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
			$(".bill_address label.error").hide();
  		} else {
			$(".bill_address input").attr("readonly", "").removeClass("pre-fill").val("");
			$(".bill_address select").removeAttr("disabled").val("select");
			$(".bill_address label.error").show();
  		}
	}



	/*this function is for all form submissions*/
	$('.form_submit').submit(function(event){
		event.preventDefault();
		if ( $(this).validate().form() ) {
			current_section++;
			console.log(current_section);
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
			if (current_section===3) {
				check3payment();
				check3address();
			}
		}
	});


	/* this function is for buttons that continue, but do not involve submitting a form */
	$("button.next_step").click(function(){
		current_section++;
		console.log(current_section);
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

	/* this function provides backward movements */
	$("button.back_step").click(function(){
		current_section--;
		console.log(current_section);
		$(this).parent().parent().parent(".section").toggleClass("active", 4000);
		$(this).parent().parent().parent(".section").prev().children(".section_number").css({ opacity: 0.5 });
		$(this).parent().parent(".inner_section").siblings(".section_title").fadeOut(300);
		$(this).parent().parent(".inner_section").fadeOut(300, function(){
			$(this).parent(".section").css("z-index", "auto");
			$(this).parent(".section").prev().css("z-index", "10");
			$(this).parent(".section").prev().children(".title_area").animate({width:'490px'}, 500);
			$(this).parent(".section").prev().animate({width:'490px'}, 500, function() {
				$(this).toggleClass("active", 4000);
				$(this).children(".inner_section").fadeIn(300);
				$(this).children(".section_title").fadeIn(300);
				$(this).prev().children(".section_number").css({ opacity: 1.0 });
			}).css('overflow', 'visible');
		});
	});


	$("#sec-3-1-payment_method input").click( check3payment );
	$("#sec-3-1-same_address input").click( check3address );

});	

