$(document).ready(function() {

	var current_section = 1;
	console.log(current_section);

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

	/* sets up section 4 */
	function setupSection4() {
		console.log("setting up section 4");

		$(".sec-4-1-details").empty();

		if ( $("#trans_type_cc").is(":checked") ) {
			$("#sec-4-1-credit_card").show();
			$("#sec-4-1-direct_withdraw").hide();
		} else if ( $("#trans_type_dw").is(":checked") ) {
			$("#sec-4-1-credit_card").hide();
			$("#sec-4-1-direct_withdraw").show();
		}

		$("#sec-4-1-ship_fname").append( $("#recv_first_name").val() );
		$("#sec-4-1-ship_lname").append( $("#recv_last_name").val()  );
		$("#sec-4-1-ship_addr1").append( $("#recv_address_1").val()  );
		$("#sec-4-1-ship_addr2").append( $("#recv_address_2").val()  );
		$("#sec-4-1-ship_city").append(  $("#recv_city").val()       );
		$("#sec-4-1-ship_city").append(  ","                         );
		$("#sec-4-1-ship_state").append( $("#recv_state").val()      );
		$("#sec-4-1-ship_zip").append(   $("#recv_zip").val()        );
		$("#sec-4-1-ship_phone").append( $("#recv_telephone").val()  );
		if ( $("#ship_op").val()==5 ) {
			$("#sec-4-1-ship_method").append( "standard shipping" );
		} else if ( $("#ship_op").val()==20 ) {
			$("#sec-4-1-ship_method").append( "2 day express" );
		} else if ( $("#ship_op").val()==30 ) {
			$("#sec-4-1-ship_method").append( "overnight" );
		}

		$("#sec-4-1-bill_fname").append( $("#bill_first_name").val() );
		$("#sec-4-1-bill_lname").append( $("#bill_last_name").val()  );
		$("#sec-4-1-bill_addr1").append( $("#bill_address_1").val()  );
		$("#sec-4-1-bill_addr2").append( $("#bill_address_2").val()  );
		$("#sec-4-1-bill_city").append(  $("#bill_city").val()       );
		$("#sec-4-1-bill_city").append(  ","                         );
		$("#sec-4-1-bill_state").append( $("#bill_state").val()      );
		$("#sec-4-1-bill_zip").append(   $("#bill_zip").val()        );
		$("#sec-4-1-bill_phone").append( $("#bill_telephone").val()  );

		$("#sec-4-1-cc_number").append(  $("#cc_number").val()      );
		$("#sec-4-1-cc_expiry").append(  $("#cc_expiry_date").val() );
		$("#sec-4-1-cc_type").append(    $("#cc_card_type").val()   );
		$("#sec-4-1-dw_account").append( $("#dw_account").val()     );
		$("#sec-4-1-dw_routing").append( $("#dw_routing_no").val()  );

	}


	/* sets up section 5 */
	function setupSection5() {
		console.log("setting up section 5");
		
		$(".sec-5-1-details").empty();

		if ( $("#trans_type_cc").is(":checked") ) {
			$("#sec-5-1-credit_card").show();
			$("#sec-5-1-direct_withdraw").hide();
		} else if ( $("#trans_type_dw").is(":checked") ) {
			$("#sec-5-1-credit_card").hide();
			$("#sec-5-1-direct_withdraw").show();
		}

		$("#sec-5-1-ship_fname").append( $("#recv_first_name").val() );
		$("#sec-5-1-ship_lname").append( $("#recv_last_name").val()  );
		$("#sec-5-1-ship_addr1").append( $("#recv_address_1").val()  );
		$("#sec-5-1-ship_addr2").append( $("#recv_address_2").val()  );
		$("#sec-5-1-ship_city").append(  $("#recv_city").val()       );
		$("#sec-5-1-ship_city").append(  ","                         );
		$("#sec-5-1-ship_state").append( $("#recv_state").val()      );
		$("#sec-5-1-ship_zip").append(   $("#recv_zip").val()        );
		$("#sec-5-1-ship_phone").append( $("#recv_telephone").val()  );

		if ( $("#ship_op").val()==5 ) {
			$("#sec-5-1-ship_method").append( "standard shipping" );
		} else if ( $("#ship_op").val()==20 ) {
			$("#sec-5-1-ship_method").append( "2 day express" );
		} else if ( $("#ship_op").val()==30 ) {
			$("#sec-5-1-ship_method").append( "overnight" );
		}

		$("#sec-5-1-bill_fname").append( $("#bill_first_name").val() );
		$("#sec-5-1-bill_lname").append( $("#bill_last_name").val()  );
		$("#sec-5-1-bill_addr1").append( $("#bill_address_1").val()  );
		$("#sec-5-1-bill_addr2").append( $("#bill_address_2").val()  );
		$("#sec-5-1-bill_city").append(  $("#bill_city").val()       );
		$("#sec-5-1-bill_city").append(  ","                         );
		$("#sec-5-1-bill_state").append( $("#bill_state").val()      );
		$("#sec-5-1-bill_zip").append(   $("#bill_zip").val()        );
		$("#sec-5-1-bill_phone").append( $("#bill_telephone").val()  );

		$("#sec-5-1-cc_number").append(  $("#cc_number").val()      );
		$("#sec-5-1-cc_expiry").append(  $("#cc_expiry_date").val() );
		$("#sec-5-1-cc_type").append(    $("#cc_card_type").val()   );
		$("#sec-5-1-dw_account").append( $("#dw_account").val()     );
		$("#sec-5-1-dw_routing").append( $("#dw_routing_no").val()  );

	}

	function checkSteps() {
		if (current_section===3) {
			check3payment();
			check3address();
		} else if (current_section===4) {
			setupSection4();
		} else if (current_section===5) {
			setupSection5();
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
			checkSteps();
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
		checkSteps();
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
		checkSteps();
	});


	$("#sec-3-1-payment_method input").click( check3payment );
	$("#sec-3-1-same_address input").click( check3address );

	$("button#edit_billing").click(function(){
		current_section--;
		console.log(current_section);
		$(this).parent().parent(".section").toggleClass("active", 4000);
		$(this).parent().parent(".section").prev().children(".section_number").css({ opacity: 0.5 });
		$(this).parent(".inner_section").siblings(".section_title").fadeOut(300);
		$(this).parent(".inner_section").fadeOut(300, function(){
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
		checkSteps();
	});

	$("button#edit_shipping").click(function(){
		current_section=current_section-2;
		console.log(current_section);
		$(this).parent().parent(".section").toggleClass("active", 4000);
		$(this).parent().parent(".section").prev().children(".section_number").css({ opacity: 0.5 });
		$(this).parent(".inner_section").siblings(".section_title").fadeOut(300);
		$(this).parent(".inner_section").fadeOut(300, function(){

			$(this).parent(".section").css("z-index", "auto");

			$(this).parent(".section").prev().children(".title_area").animate({width:'490px'}, 500);
			$(this).parent(".section").prev().animate({width:'490px'}, 500);

			$(this).parent(".section").prev().prev().css("z-index", "10");
			$(this).parent(".section").prev().prev().children(".title_area").animate({width:'490px'}, 500);
			$(this).parent(".section").prev().prev().animate({width:'490px'}, 500, function() {
				$(this).toggleClass("active", 4000);
				$(this).children(".inner_section").fadeIn(300);
				$(this).children(".section_title").fadeIn(300);
				$(this).prev().children(".section_number").css({ opacity: 1.0 });
			}).css('overflow', 'visible');
		});
		checkSteps();
	});
	/* this function updates cart contents based on shipping options */
    $("select[name=ship_op]").change(function() {
			var BeforeTaxPrice = 0;
			var Tax = 0;
			var TotalCharge = 0;
			$("#Order_Summary #Shipping_handling_price td:eq(1)").text('$ '+ $("#ship_op option:selected").val());
			BeforeTaxPrice = parseFloat($("#ship_op option:selected").val()) + 100.00;
			Tax = BeforeTaxPrice * 0.06;
			TotalCharge = BeforeTaxPrice + Tax;
			$("#Order_Summary #Before_tax_price td:eq(1)").text('$ '+ String(BeforeTaxPrice.toFixed(2)));
			$("#Order_Summary #Tax td:eq(1)").text('$ '+ String(Tax.toFixed(2)));
			$("#Order_Summary #Total_charge td:eq(1)").text('$ '+ String(TotalCharge.toFixed(2)));
	});
});	

