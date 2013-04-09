$(document).ready(function() {

	//change default required message
	$.validator.messages.required = "required";

	$.validator.addMethod("valueNotEquals", function(value, element, arg)
	{
		return arg != value;
	}, "Value must not equal arg.");




	//Validating inputs in shipping form section
	$.validator.addMethod("recv_first_name", function(value, element) 
	{ 
		return this.optional(element) || /^[a-zA-Z]+([ '-][a-zA-Z]+)?$/i.test(value); 
	}, "enter a valid name");

	$.validator.addMethod("recv_last_name",function(value,element)
	{
		return this.optional(element) || /^[a-zA-Z]+([ '-][a-zA-Z]+)?$/i.test(value); 
	},"enter a valid name");

	$.validator.addMethod("recv_address_1",function(value,element)
	{
		return this.optional(element) || /^(?=\s*\S).*$/i.test(value); 
	},"enter a valid address");

	$.validator.addMethod("recv_city",function(value,element)
	{
		return this.optional(element) || /([a-zA-Z]+|[a-zA-Z]+\\s[a-zA-Z]+)/i.test(value); 
	},"enter a valid city");

	$.validator.addMethod("recv_zip",function(value,element)
	{
		return this.optional(element) || /^\d{5}(-\d{4})?$/i.test(value); 
	},"enter a valid zip code");

	$.validator.addMethod("recv_telephone",function(value,element)
	{
		return this.optional(element) || /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/i.test(value); 
	},"enter a valid phone number");

	//Rules in validating inputs in shipping form section
	$("#shipping_form").validate({
		rules: {
			recv_first_name: "required recv_first_name",
			recv_last_name: "required recv_last_name",
			recv_address_1: "required recv_address_1",
			recv_city: "required recv_city",
			recv_state: { valueNotEquals: "default" },
			recv_zip: "required recv_zip",
			recv_telephone: "required recv_telephone",
			ship_op: { valueNotEquals: "0.00" },
		}, messages: {
			recv_state: { valueNotEquals: "required" },
			ship_op: { valueNotEquals: "required" },
		}, errorPlacement: function(error, element) {
			error.insertAfter(element.prev().children("label"));
		},
		debug:true
	});




	//Validating inputs in billing details form section
	$.validator.addMethod("bill_first_name", function(value, element) 
	{
		return this.optional(element) || /^[a-zA-Z]+([ '-][a-zA-Z]+)?$/i.test(value); 
	},"enter a valid name");


	$.validator.addMethod("bill_last_name",function(value,element)
	{
		return this.optional(element) || /^[a-zA-Z]+([ '-][a-zA-Z]+)?$/i.test(value); 
	},"enter a valid name");


	$.validator.addMethod("bill_address_1",function(value,element)
	{
		return this.optional(element) || /^(?=\s*\S).*$/i.test(value); 
	},"enter a valid address");

	$.validator.addMethod("bill_city",function(value,element)
	{
		return this.optional(element) || /([a-zA-Z]+|[a-zA-Z]+\\s[a-zA-Z]+)/i.test(value); 
	},"enter a valid city");

	$.validator.addMethod("bill_zip",function(value,element)
	{
		return this.optional(element) || /^\d{5}(-\d{4})?$/i.test(value); 
	},"invalid");

	$.validator.addMethod("bill_telephone",function(value,element)
	{
		return this.optional(element) || /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/i.test(value); 
	},"invalid");

	$.validator.addMethod("bill_email",function(value,element)
	{
		return this.optional(element) || /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i.test(value); 
	},"invalid");


	$.validator.addMethod("cc_number",function(value,element)
	{
		return this.optional(element) || /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/i.test(value); 
	},"invalid");
	$.validator.addMethod("cc_expiry_date",function(value,element)
	{
		return this.optional(element) || /^(?:[01][0-9][/\-]1[3-9])$/i.test(value); 
	},"invalid");
	$.validator.addMethod("cc_csv",function(value,element)
	{
		return this.optional(element) || /^(?:[0-9]{3}[0-9]*)$/i.test(value); 
	},"invalid");


	$.validator.addMethod("dw_account",function(value,element)
	{
		return this.optional(element) || /^(?:[a-zA-Z0-9]{9}[a-zA-Z0-9]*)$/i.test(value); 
	},"invalid");
	$.validator.addMethod("dw_routing_no",function(value,element)
	{
		return this.optional(element) || /^(?:[0-9]{9})$/i.test(value); 
	},"invalid");
	$.validator.addMethod("dw_bank_phone",function(value,element)
	{
		return this.optional(element) || /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/i.test(value);
	},"invalid");


	$("#billing_form").validate({
		rules: {
			bill_first_name: "required bill_first_name",
			bill_last_name: "required bill_last_name",
			bill_address_1: "required bill_address_1",
			bill_city: "required bill_city",
			bill_state: { valueNotEquals: "default" },
			bill_zip: "required bill_zip",
			bill_telephone: "required bill_telephone",
			bill_email: "required bill_email",
			cc_number: "required cc_number",
			cc_expiry_date: "required cc_expiry_date",
			cc_card_type: { valueNotEquals: "default" },
			cc_csv: "required cc_csv",
			dw_account: "required dw_account",
			dw_routing_no: "required dw_routing_no",
			dw_bank_phone: "required dw_bank_phone",
		}, messages: {
			bill_state: { valueNotEquals: "required" },
			cc_card_type: { valueNotEquals: "required" },
		}, errorPlacement: function(error, element) {
			error.insertAfter(element.prev().children("label"));
		},
		debug:true
	});
});