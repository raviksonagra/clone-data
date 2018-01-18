$(document).ready(function(){	
	
	$('#save_setting').click(function(){
		$('#detail-form').submit();
	});
	$('#change-password').click(function(){
		$('#password_form').slideToggle();
	});
	var timeout = 3000; // in miliseconds (3*1000)
	$('.alert').delay(timeout).fadeOut(300);

	$('.edit_billing_address').click(function(){
		$('#billing_form').slideToggle();
	});

	$('#submit_contact').click(function(){
		$('#contact-form').submit();
	});

	$('.next').click(function(){
		$('#billing-form').submit();
	});
	$('.next_payment').click(function(){
	
		if($("#date").val() == ''){
			$(".alert-error").show().delay(3000).fadeOut(300);
		}else{
			$('#deliver-date').submit();
		}
		
	});


	$('.payment-method').click(function(){
		$(".payment-method").css("border","none");
		$(".payment-method").removeClass("active");

		$(this).css("border","3px solid #330914");
		$(this).addClass("active");
		
		$("#paypal_e-net").val($(this).attr("type"));	
		/*if($(this).attr("type") == 'paypal'){
			$("#paypal").val($(this).attr("type"));	
		}else if($(this).attr("type") == 'e-net'){
			$("#e-net").val($(this).attr("type"));	
		}*/
		
		//alert($(this).attr("type"));
	});
	$('.payment_type').click(function(){
		
		if($("#paypal_e-net").val() != 'paypal' && $("#paypal_e-net").val() != 'E-NET' ){
			$(".alert-error").show().delay(3000).fadeOut(300);
		}else{ 
			$('#payment-method').submit();
		}
	});

	$('.search-button').click(function(){
		$('#search-form').submit();
	});

	$('.product-page-search-button').click(function(){
		$('#product-page-search-form').submit();
	});

	$('#shipping_button').click(function(){
		$('#shipping-form').submit();
	});

	$('#shipping_button_edit').on('click', function (e) {
		$('#shipping-form-edit').submit();
	});
	
	$('.add-to-cart').on('click', function (e) {
		
		var price_id = $('#price_moq_2').val();

		sum = 0 ; 
		$('.post_quantity').each(function(){
		  sum += Number($(this).val());
		});

		$('.post_quantity').removeAttr('disabled');
		$.ajax({
			type:'POST',
			url:base_url+"product_detail/product_check_quantity",
			data:{
				price_id:price_id,
				sum:sum,
			},
			success :function(data){
				if(sum > data ){
					alert('please selected ' +data+ ' more quantity selected')
				}else{
					$('#add_to_cart_details').submit();
				}
			}
		});

		/*var in_stock_quantity = $("#in_stock_quantity").val();
		
		if(sum > in_stock_quantity){
			alert('only ' +in_stock_quantity+ ' items available stock this quantity')
		}else{
			$('#add_to_cart_details').submit();
		}*/
		
	});
	
	/*$('.remove_product').click(function(){
		$('#remove_cart_product').submit();
	});*/
	

	$('#checkbox').click(function(){

		  	if($(this).is(":checked")) {
			   var first_name 	= $('#b_firstname').val();
			   var lastname 	= $('#b_lastname').val();
			   var address1 	= $('#b_address1').val();
			   var address2 	= $('#b_address2').val();
			   var city 		= $('#b_city').val();
			   var state 		= $('#b_state').val();
			   var country 		= $('#b_country').val();
			   var postalcode 	= $('#b_postalcode').val();
			   var email 		= $('#b_email').val();
			   var contact		= $('#b_contact').val();
			   var fax			= $('#b_fax').val();
				$('#s_firstname').val(first_name);			
				$('#s_lastname').val(lastname);			
				$('#s_address1').val(address1);			
				$('#s_address2').val(address2);			
				$('#s_city').val(city);			
				$('#s_state').val(state);			
				$('#s_country').val(country);			
				$('#s_postalcode').val(postalcode);			
				$('#s_email').val(email);			
				$('#s_contact').val(contact);			
				$('#s_fax').val(fax);			
	   		} else{

				 $('#s_firstname').val($('#s_firstname').attr("attr"));
				 $('#s_lastname').val($('#s_lastname').attr("attr"));
				 $('#s_address1').val($('#s_address1').attr("attr"));
				 $('#s_address2').val($('#s_address2').attr("attr"));
				 $('#s_city').val($('#s_city').attr("attr"));
				 $('#s_state').val($('#s_state').attr("attr"));
				 $('#s_country').val($('#s_country').attr("attr"));
				 $('#s_postalcode').val($('#s_postalcode').attr("attr"));
				 $('#s_email').val($('#s_email').attr("attr"));
				 $('#s_contact').val($('#s_contact').attr("attr"));
				 $('#s_fax').val($('#s_fax').attr("attr"));
			}	


	});
	
});	

function loadmore(){
	$.ajax({
		url:'product_list/loadmore/1',
		data:{
		  offset :$('#offset').val(),
		  limit :limit,
		  search:$('#search_kyeword').val(),
		},
	   dataType: "text",
		success :function(data){
			//console.log(data);
			
			if(data == '0'){
				$("#load-more_button").hide();
			}else{
				
			}
		}
	});

	$.ajax({
		url:'product_list/loadmore',
		data:{
		  offset :$('#offset').val(),
		  limit :limit,
		  search:$('#search_kyeword').val(),
		},
	   dataType: "text",
		success :function(data){
			//console.log(data);
			if(data != ''){
				$('#load-more').append(data)
				$('#offset').val(+$('#offset').val()+limit)
			}else{
				
			}
		}
	});
}
function edit_quantity($curTimeOfAddCart="",$pid=""){
	var pid = $pid;
	var curTimeOfAddCart = $curTimeOfAddCart;
		$('#quantity_form'+curTimeOfAddCart+pid).slideToggle();
		$(".quantity_count"+curTimeOfAddCart+pid).slideToggle();
}
function cancle_quantity($curTimeOfAddCart="",$pid=""){
	var pid = $pid;
	var curTimeOfAddCart = $curTimeOfAddCart;
		$('#quantity_form'+curTimeOfAddCart+pid).slideToggle();
		$(".quantity_count"+curTimeOfAddCart+pid).slideToggle();
}
function quantity_update($curTimeOfAddCart="",$pid=""){
	var curTimeOfAddCart = $curTimeOfAddCart;
	var pid = $pid;
	var quantity = $("#quantity_add"+curTimeOfAddCart+pid).val()

	$.ajax({
		type:'POST',
		url:base_url+"my_cart/update_cart",
		data:{
			curTimeOfAddCart:curTimeOfAddCart,
			pid:pid,
		  	quantity:quantity,
		},
		success :function(data){
			//console.log(pid);

			if($("#quantity_add"+curTimeOfAddCart+pid).val() != ''){
				$(".quantity_count"+curTimeOfAddCart+pid).text($("#quantity_add"+curTimeOfAddCart+pid).val());		
			}
			$("#quantity_form"+curTimeOfAddCart+pid).slideToggle();
			$(".quantity_count"+curTimeOfAddCart+pid).slideToggle();
			location.reload();
		}
	});
}
function remove_quantity($curTimeOfAddCart="",$pid=""){
	var curTimeOfAddCart = $curTimeOfAddCart;
		pid = $pid;
		result  = confirm('Are you sure you want to delete this?');
	
	if(result){
		$.ajax({
			type:'POST',
			url:base_url+"my_cart/remove_cart_quantity",
			data:{
				curTimeOfAddCart:curTimeOfAddCart,
				pid:pid,
			},
			success :function(data){
				window.location = base_url+"my_cart/";
			}
		});
	}
		
}
function remove_quantity_review($curTimeOfAddCart="",$pid=""){
	var curTimeOfAddCart = $curTimeOfAddCart;
		pid = $pid;
		result  = confirm('Are you sure you want to delete this?');
	
	if(result){
		$.ajax({
			type:'POST',
			url:base_url+"my_cart/remove_cart_quantity",
			data:{
				curTimeOfAddCart:curTimeOfAddCart,
				pid:pid,
			},
			success :function(data){
				window.location = base_url+"review_and_confirm/";
			}
		});
	}
		
}

$('#price_moq_2').change(function() {
	var price_id = $(this).val();
	$('.post_quantity').removeAttr('disabled');
	$.ajax({
		type:'POST',
		url:base_url+"product_detail/product_moq_price",
		data:{
			price_id:price_id,
		},
		success :function(data){
			$('#unit_price_id').text(data);
			$('input[name="unit_price"]').val(data);
		}
	});
	
		
});

function like_button($pid=""){
	var	pid = $pid;
	var allreadyAdd = $('.like-button').attr('type');
	
	if(allreadyAdd == ''){
		$.ajax({
			type:'POST',
			url:base_url+"product_detail/save_list_product",
			data:{
				pid:pid,
			},
			success :function(data){
				$(".like-button").addClass('like_button');
				$('.like-button').attr('type' ,'allready_add')
			}
		});
	}else{
		alert('All Ready Added In Your Save List');
	}
		
}

$(function(){
	$("#detail-form").validate({
		rules: {			
			email:{				
				required:true,
				email: true
			},
			contact_number:{
			   	required:true,
			  	minlength:10,
			  	maxlength:10,
			  	number: true
			},
		},
		messages: {
			email: "Please enter valid Email",
			contact_number: "Please enter Phone number",
		},
	});
});

$.validator.addMethod('comboboxNotNone', function(value, element) {
    return (value != '0');
}, 'Please select an option.');

$(function(){ 
	$("#add_to_cart_details").validate({

		rules: {
			price_moq: {
				comboboxNotNone: true
			},
			'attribute_value[]': {
				comboboxNotNone: true
			},
			'attribute_dropdown[]': {
				comboboxNotNone: true
			},
			'attribute_dropdown_quantity[]': {
				required:true,
				digits: true
			},
			
		},
		messages: {
			price_moq: "Please select quantity",
			'attribute_value[]': "Please select required",
			'attribute_dropdown[]': "Please select required",
			'required[]': "Please this required",
		}
	});
});

$(function(){
	$("#password_form").validate({
		rules: {			
			password:{				
				required:true
			},
			password_confirm: {
				required:true,
				equalTo: "#Password_chnage"
			},
		},
		messages: {
			password: "Please enter password"
		},
	});
});

/*jQuery.validator.addMethod("cdnPostal", function(postal, element) {
    return this.optional(element) || 
    postal.match(/[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/);
}, "Please specify a valid postal code.");*/

$(function(){
	$("#shipping-form").validate({
		rules: {			
			email:{				
				required:true,
				email: true
			},
			phone: {
				required:true,
			  	minlength:10,
			  	maxlength:10,
			  	number: true
			},
			/*Postal_Code:{
				required: true,
            	cdnPostal: true
			}*/
		},
		messages: {
			email: "Please enter Valid email",
			phone: "Please enter Valid phone number",

		},
	});
});


$(function(){
	$("#billing-form").validate({
		rules: {			
			b_email:{				
				required:true,
				email: true
			},
			b_contact: {
				required:true,
			  	minlength:10,
			  	maxlength:10,
			  	number: true
			},
		},
		messages: {
			b_email: "Please enter Valid email",
			b_contact: "Please enter Valid phone number",

		},
	});
});

$(document).on('click', '.add_drop_quantity', function() {
		//var product_attribute_sample = $("#sample_add_temp").html();
	//$("#dropdown_quantity").append(product_attribute_sample);
	//$clone_attr = $(this).closest('div.details-row').clone().insertAfter($(this).closest('div.details-row'));
	$clone_attr = $(this).closest('div#dropdown_append').clone().insertAfter($(this).closest('div#dropdown_append'));
	$clone_attr.find('.add_drop_quantity').hide();
	$clone_attr.find('.inside-price-label span').hide();
	$clone_attr.find('.delete_drop_quantity').show();
	
});

$(document).on('click', '.delete_drop_quantity', function() {
	$clone_attr = $(this).closest('div.details-row').find('div#dropdown_append');
	if($clone_attr.length>1){
		$(this).closest('div#dropdown_append').remove();
	}
});

// $(document).on('keyup', '.post_quantity', function() {
//   alert($('#price_moq_2').val());
// });