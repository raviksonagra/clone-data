$(document).ready(function(){	
	$('select').each(function(index){
		var select_option_count = $(this).children().length;
		
		if(select_option_count > 10){
			if(!$(this).hasClass('select2') && !$(this).hasClass('cs-select')){
				$(this).addClass('select2');
			}
		}else{
			if(!$(this).hasClass('select2-wrapper') && !$(this).hasClass('cs-select')){
				$(this).addClass('select2-wrapper');
			}
		}
	});
	
	$('select.select2').select2();	
	$(".select2-wrapper").select2({minimumResultsForSearch: -1});
	
	$('select').change(function(){
		$(this).removeClass('error');
		$(this).next('span.error').remove();
	});

	//HTML5 editor
	$('.text-editor').wysihtml5();
	$('.text-editor2').wysihtml5();
	$('.text-editor3').wysihtml5();
	$('.text-editor4').wysihtml5();

	$.validator.addMethod('comboboxNotNone', function(value, element) {
        return (value != '0');
    }, 'Please select an option.');
	
	$.validator.addMethod('lessthan', function(value, element) {
        return (value > '0');
    }, 'Please enter valid value.');

	$("#show_tp").timepicker({
		showLeadingZero: true
	});

	$("#show_dp").datepicker({
		autoclose: true,
		forceParse: false,
		format: 'D dd MM yyyy'
	});

	$(document).on('change','#date', function (ev) {
		//alert('fsf');
		//alert($(this).attr('name'));
		$(this).removeClass('error');
		$(this).next('span.error').remove();
	});
	
	$("#date_year").datepicker( {
		autoclose: true,
		forceParse: false,
		format: " yyyy",
		viewMode: "years", 
		minViewMode: "years"
	});


	$("#add_user_form_datatable").validate({
		submitHandler: function(form) {
			jQuery(form).ajaxSubmit({
				success: function(data){
					if(data == ''){
						$('#myModal').delay(1000).modal('hide');
						parent.reload_datatable();
					}else{
						$(".containerfdfdf").show();
						$(".containerfdfdf").html('<div class="alert alert-danger" role="alert"><button class="close" data-dismiss="alert"></button>'+data+'</div>');
					}
				}
			});
			
		},
		rules: {
			user_roll_id: {
				comboboxNotNone: true
			},
			first_name:{				
				required:true
			},
			last_name:{				
				required:true
			},
			email:{				
				required:true,
				email: true
			},
			username:{				
				required:true
			},			
			password:{				
				required:true
			},
			password_confirm: {
				required:true,
				equalTo: "#reg_password"
			}
		},
		messages: {
			user_roll_id: "Please select role",
			first_name: "Please enter your first name",
			last_name: "Please enter your last name",
			email: "Please enter your email",
			username: "Please enter username",
			password: "Please enter password"
		}
	});

	$("#add_order_form_datatable").validate({
		submitHandler: function(form) {
			jQuery(form).ajaxSubmit({
				success: function(data){
					if(data == ''){
						$('#myModal').delay(1000).modal('hide');
						parent.reload_datatable();
					}else{
						$(".containerfdfdf").show();
						$(".containerfdfdf").html('<div class="alert alert-danger" role="alert"><button class="close" data-dismiss="alert"></button>'+data+'</div>');
					}
				}
			});
			
		},
		rules: {
			order_status: {
				comboboxNotNone: true
			},
			
		},
		messages: {
			order_status: "Please select order status",
		}
	});

	$("#add_client_form_datatable").validate({
		submitHandler: function(form) {
			jQuery(form).ajaxSubmit({
				success: function(data){
					if(data == ''){
						$('#myModal').delay(1000).modal('hide');
						parent.reload_datatable();
					}else{
						$(".containerfdfdf").show();
						$(".containerfdfdf").html('<div class="alert alert-danger" role="alert"><button class="close" data-dismiss="alert"></button>'+data+'</div>');
					}
				}
			});
			
		},
		/*rules: {
			client_status: {
				comboboxNotNone: true
			},
			
		},
		messages: {
			client_status: "Please select client status",
		}*/
	});
	$("#add_supplier_form_datatable").validate({
		submitHandler: function(form) {
			jQuery(form).ajaxSubmit({
				success: function(data){
					if(data == ''){
						$('#myModal').delay(1000).modal('hide');
						parent.reload_datatable();
					}else{
						$(".containerfdfdf").show();
						$(".containerfdfdf").html('<div class="alert alert-danger" role="alert"><button class="close" data-dismiss="alert"></button>'+data+'</div>');
					}
				}
			});
			
		},
		rules: {
			name: {
				required: true
			},
			email:{				
				required:true,
				email: true
			},
			address:{				
				required:true
			},
			city:{				
				required:true
			},
			state:{				
				required:true
			},
			country:{				
				required:true
			},
			fax:{				
				required:true
			},
			contact_number:{				
				required:true
			},
			payment_method: {
				comboboxNotNone: true
			},
			password:{				
				required:true
			},
			password_confirm: {
				required:true,
				equalTo: "#reg_password"
			}
		},
		messages: {
			name: "Please select name",
			email: "Please enter your email",
			address: "Please enter your address",
			email: "Please enter your email",
			city: "Please enter city",
			state: "Please enter state",
			country: "Please enter country",
			fax: "Please enter fax",
			payment_method:"Please select payment method",
			password: "Please enter password"
		}
	});

	$("#add_product_form_datatable").validate({
		/*submitHandler: function(form) {
			
		},*/
		rules: {
			/*product_name: {
				required: true
			},
			product_price:{				
				required:true
			},
			product_types: {
				comboboxNotNone: true
			},
			product_categories: {
				comboboxNotNone: true
			},
			product_sku:{				
				required:true
			},
			suppliers_name: {
				comboboxNotNone: true
			},
			total_quantity: {
				required:true,
				min: 1,
				digits: true,
			},*/
		},
		messages: {
			product_name: "Please select product name",
			product_price: "Please enter your product price",
			product_types: "Please select your product type",
			product_categories: "Please select your product category",
			product_sku: "Please enter your product sku",
			suppliers_name: "Please select product supplier name",
			total_quantity: {
				min: "Value must be greater than Zero",
				required :"Please enter valid quantity digit",
			}
		}
	});

	$("#add_product_type_form_datatable").validate({
		submitHandler: function(form) {
			jQuery(form).ajaxSubmit({
				success: function(data){
					if(data == ''){
						$('#myModal').delay(1000).modal('hide');
						parent.reload_datatable();
					}else{
						$(".containerfdfdf").show();
						$(".containerfdfdf").html('<div class="alert alert-danger" role="alert"><button class="close" data-dismiss="alert"></button>'+data+'</div>');
					}
				}
			});
			
		},
		rules: {
			type_name:{				
				required:true
			},
			
		},
		messages: {
			
			type_name: "Please enter your product type",
			
		}
	});

	$("#add_category_form_datatable").validate({
		submitHandler: function(form) {
			jQuery(form).ajaxSubmit({
				success: function(data){
					if(data == ''){
						$('#myModal').delay(1000).modal('hide');
						parent.reload_datatable();
					}else{
						$(".containerfdfdf").show();
						$(".containerfdfdf").html('<div class="alert alert-danger" role="alert"><button class="close" data-dismiss="alert"></button>'+data+'</div>');
					}
				}
			});
			
		},
		rules: {
			category_name:{				
				required:true
			},
			
		},
		messages: {
			category_name: "Please enter your category name",
		}
	});

	$('#btn_user_password_update').click(function(event) {

		if($('#user_password').val() == "")
		{
			$('#error_div').html('<span class="error"><label for="" generated="true" class="error">Please enter password.</label></span>');
		    return false;
		}
		else if($('#user_password_confirm').val() == "")
		{
			$('#error_div').html('<span class="error"><label for="" generated="true" class="error">Please enter Confirm password.</label></span>');
		    return false;
		}
		else if($('#user_password').val() != $('#user_password_confirm').val())
		{
			$('#error_div').html('<span class="error"><label for="" generated="true" class="error">password & confirm pass must be same.</label></span>');
		    return false;
		}
		// get the form data
		// there are many ways to get this data using jQuery (you can use the class or id also)
		var formData = {
			'user_password' 	: $('#user_password').val(),
			'user_password_confirm' 	: $('#user_password_confirm').val(),
			'user_id' 	: $('input[name=user_id]').val()
		};
		
		// process the form
		$.ajax({
			type 		: 'POST', // define the type of HTTP verb we want to use (POST for our form)
			url 		: CI.base_url+'list_user/save_user_pass', // the url where we want to POST
			data 		: formData, // our data object
			success: function(data) {
				$('#error_div').html('');
				$('#message_div').html('<div class="alert alert-success"><button data-dismiss="alert" class="close"></button>'+data+'</div>');
				$('#user_password').val('');
				$('#user_password_confirm').val('');
			}
		});
		
		// stop the form from submitting the normal way and refreshing the page
		event.preventDefault();
	});

	$('#btn_supplier_password_update').click(function(event) {

		if($('#supplier_password').val() == "")
		{
			$('#error_div').html('<span class="error"><label for="" generated="true" class="error">Please enter password.</label></span>');
		    return false;
		}
		else if($('#supplier_password_confirm').val() == "")
		{
			$('#error_div').html('<span class="error"><label for="" generated="true" class="error">Please enter Confirm password.</label></span>');
		    return false;
		}
		else if($('#supplier_password').val() != $('#supplier_password_confirm').val())
		{
			$('#error_div').html('<span class="error"><label for="" generated="true" class="error">password & confirm pass must be same.</label></span>');
		    return false;
		}
		// get the form data
		// there are many ways to get this data using jQuery (you can use the class or id also)
		var formData = {
			'supplier_password' 	: $('#supplier_password').val(),
			'supplier_password_confirm' 	: $('#supplier_password_confirm').val(),
			'supplier_id' 	: $('input[name=supplier_id]').val()
		};
		
		// process the form
		$.ajax({
			type 		: 'POST', // define the type of HTTP verb we want to use (POST for our form)
			url 		: CI.base_url+'admin/suppliers/save_supplier_pass', // the url where we want to POST
			data 		: formData, // our data object
			success: function(data) {
				$('#error_div').html('');
				$('#message_div').html('<div class="alert alert-success"><button data-dismiss="alert" class="close"></button>'+data+'</div>');
				$('#supplier_password').val('');
				$('#supplier_password_confirm').val('');
			}
		});
		
		// stop the form from submitting the normal way and refreshing the page
		event.preventDefault();
	});
	
	$("#add_role_form_datatable").validate({
		submitHandler: function(form) {
			jQuery(form).ajaxSubmit({
				success: function(data){
					if(data == ''){
						$('#myModal').delay(1000).modal('hide');
						parent.reload_datatable();
					}else{
						$(".containerfdfdf").show();
						$(".containerfdfdf").html('<div class="alert alert-danger" role="alert"><button class="close" data-dismiss="alert"></button>'+data+'</div>');
						
					}
				}
			});
			
		},
		rules: {
			user_roll_name: {
				required: true
			}
		},
		messages: {
			user_roll_name: "Please enter role."
		}
	});

	$("#add_gst_form_datatable").validate({
		submitHandler: function(form) {
			jQuery(form).ajaxSubmit({
				success: function(data){

				}
			});
			
		},
		rules: {
			gst: {
				required: true,
				number:true
			},
			web_site_contact_email: {
				required:true,
				email: true
			}
		},
		messages: {
			gst:{
				number : "Please enter only GST number Tax.",
				required :"Please enter gst tax.",
			},
			web_site_contact_email: "Please enter web site mail."
		}
	});

});
