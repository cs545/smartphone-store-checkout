$.validator.setDefaults({
  submitHandler: function() { alert("submitted!"); }
});

$().ready(function() {
    $.validator.addMethod("firstname", function(value, element) {  
      return this.optional(element) || /^[a-z -']+$/i.test(value);  
    }, "Please enter a valid First Name.");  
  
  // validate billing details form on keyup and submit
  $("#billingdetails").validate({
     rules: {
  		firstname: "required",
  		lastname: "required",
     },
  });
});
     
  	
