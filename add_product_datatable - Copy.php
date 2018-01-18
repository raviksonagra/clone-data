<script type="text/javascript" src="<?php print base_url(); ?>assets/admin/js/jquery.form.js"></script>
<!-- <script type="text/javascript" src="<?php print base_url(); ?>assets/admin/js/validation.js"></script> -->
<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
print form_open_multipart('admin/list_product/add/'.$id, array('id' => 'add_product_form_datatable','name'=>'formmain')) ."\r\n";
?>
<div class="header clearfix text-left">
	<h5><?php if(!$id){ echo 'Add'; }else{ echo 'Edit'; } ?></h5>
</div>

<div class="body">
	<?php $this->load->view('generic/flash_error'); ?>
	<div class="containerfdfdf"></div>
    <div class="row">
        <div class="col-sm-6">
            <div class="form-group form-group-default required">
                <?php print form_label('Product Name', 'reg_product_name'); ?>
                <?php print form_input(array('name' => 'product_name', 'id' => 'reg_product_name', 'value' => ($rowdata)?$rowdata->product_name:$this->session->flashdata('product_name'), 'class' => 'form-control')); ?>
            </div>
        </div>
        
        <div class="col-sm-6">
            <div class="form-group form-group-default required">
                <?php print form_label('Product Price', 'reg_product_price'); ?>
                <?php print form_input(array('name' => 'product_price', 'id' => 'reg_product_price', 'value' =>($rowdata)?$rowdata->product_price:$this->session->flashdata('product_price'), 'class' => 'form-control')); ?>
            </div>
        </div>
        <div class="clear"></div>
    </div>	
    <div class="row">
    	<div class="col-sm-6">
			<div class="form-group form-group-default form-group-default-select2">
				<?php print form_label('Product Types', 'product_types'); ?>
				<?php  print form_dropdown('product_types',$product_types,($rowdata)?$rowdata->product_type_id:'0','id="product_types" class="full-width"'); ?>
            </div>
		</div>
		<!-- <div class="col-md-6">
			<div class="form-group form-group-default form-group-default-select2 required">
				<?php print form_label('Product Types', 'product_types'); ?>
				<select name="product_types" id="product_types" class="full-width"'>
					 <option>Select Product Types</option>
					<?php foreach($product_types as $caproduct_types):?>
								<option value="<?php echo $caproduct_types['product_type_id']; ?>"><?php echo $caproduct_types['type_name']; ?></option>
					<?php endforeach;?>
				</select>
			</div>
        </div> -->
		<div class="col-sm-6">
			<div class="form-group form-group-default form-group-default-select2 required">
				<?php print form_label('Product Categories', 'reg_product_categories'); ?>
				<?php  print form_dropdown('product_categories',$category,($rowdata)?$rowdata->product_category_id:'0','id="product_categories" class="full-width"'); ?>
            </div>
		</div>
		<div class="clear"></div>
	</div>

	<div class="row">            
		<div class="col-sm-6">
			<div class="form-group form-group-default input-group col-sm-12">
				<?php print form_label('Product Sku', 'product_sku'); ?>
				<?php print form_input(array('name' => 'product_sku', 'id' => 'product_sku', 'value' =>($rowdata)?$rowdata->product_sku:$this->session->flashdata('product_sku'), 'class' => 'form-control')); ?>
			</div>
		</div>
		<div class="col-sm-6">
			<div class="form-group form-group-default form-group-default-select2 required">
				<?php print form_label('Suppliers Name', 'reg_suppliers_name'); ?>
				<?php  print form_dropdown('suppliers_name',$suppliers,($rowdata)?$rowdata->supplier_id:'0','id="suppliers_name" class="full-width"'); ?>
            </div>
		</div>
		
		<div class="clear"></div>
	</div>
	<div class="row">

	<div class="row">            
		<div class="col-sm-6">
			<div class="form-group form-group-default input-group col-sm-12">
				<?php print form_label('Total Quantity', 'total_quantity'); ?>
				<?php print form_input(array('name' => 'total_quantity', 'id' => 'total_quantity', 'value' =>($inventory)?$inventory->total_quantity:$this->session->flashdata('total_quantity'), 'class' => 'form-control')); ?>
			</div>
		</div>
		<div class="col-sm-6">
			<div class="form-group form-group-default form-group-default-select2 required">
				<?php print form_label('Discontinued', 'reg_discontinued'); ?>
				<?php  
				$discontinued = array("no"=>"No","yes"=>"Yes");
				print form_dropdown('discontinued',$discontinued,($inventory)?$inventory->discontinued:'No','id="reg_discontinued" class="full-width"'); 
				?>
            </div>
		</div>
		
		<div class="clear"></div>
	</div>
	<div class="row">
		<div class="col-sm-6">
			<div class="form-group form-group-default required">
				<?php print form_label('Product Short Desc', 'reg_product_short_desc'); ?>
				<?php print form_textarea(array('name' => 'product_short_desc', 'id' => 'reg_product_short_desc', 'value' =>($rowdata)?$rowdata->product_short_desc:$this->session->flashdata('product_short_desc'), 'class' => 'form-control text-editor')); ?>
			</div>
		</div>

		<div class="col-sm-6">
			<div class="form-group form-group-default ">
				<div class="form-group required">
				<?php print form_label('Product Long Desc', 'reg_product_long_desc'); ?>
				<?php print form_textarea(array('name' => 'product_long_desc', 'id' => 'reg_product_long_desc', 'value' =>($rowdata)?$rowdata->product_long_desc:$this->session->flashdata('product_long_desc'), 'class' => 'form-control text-editor2')); ?>
			</div>
			</div>
		</div>
		<div class="clear"></div>
	</div>
	<div class="row">
		<div class="col-sm-6">
	        <div class="form-group">
	          <?php print form_label('Photo', 'photo'); ?>
	          <?php print  form_upload(array('name' => 'uploadpic[]', 'id' => 'uploadpic', 'value' => '','multiple'=>'')); ?>
	        </div>
		</div>
	
		<div class="clear"></div>
	</div>
	<div class="row">
		<div class="col-sm-10">
			<?php
			if(is_array($product_image) && count($product_image) > 0)
			{
				foreach($product_image as $result_value){ ?>
			
				<div class="img-wrap image-wrap-<?php echo encrypt_decrypt('e', $result_value->image_id); ?>">
				    <span class="close" onclick="delete_image('<?php echo encrypt_decrypt('e', $result_value->image_id); ?>')">&times;</span>
				    <input type="hidden" name="image_id" value="<?php echo $result_value->image_id; ?>">
				    <img src="<?php print base_url(); ?>uploads/product_images/<?php echo $result_value->product_id; ?>/<?php echo $result_value->image_url; ?>" width="100" height="70">
				</div>
				<?php }
			}?>
		</div>
	</div>
	<fieldset>
		<legend>Product Price:</legend>
		<?php
			if(is_array($product_moq_price) && count($product_moq_price) > 0)
			{
				foreach($product_moq_price as $key => $result_value){?>
				<div class="row">
					<div class="col-sm-4">
						<div class="form-group form-group-default input-group col-sm-12">
							<?php print form_label('Product MOQ', 'product_moq'); ?>
							<?php print form_input(array('name' => 'product_moq[]', 'id' => 'product_moq', 'value' =>($result_value)?$result_value['product_moq']:$this->session->flashdata('product_moq'), 'class' => 'form-control')); ?>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="form-group form-group-default input-group col-sm-12">
							<?php print form_label('Unit price', 'unit_price'); ?>
							<?php print form_input(array('name' => 'unit_price[]', 'id' => 'unit_price', 'value' =>($result_value)?$result_value['unit_price']:$this->session->flashdata('unit_price'), 'class' => 'form-control')); ?>
						</div>
					</div>
					
					<div class="col-sm-1" id="add_product_moq">
						<div class="btn btn-primary">Add</div>
					</div>
					
					<div class="col-sm-1" id="delete_product_moq" style="display: none;">
						<div class="btn btn-danger">Delete</div>
					</div>
					<div class="clear"></div>
				</div>
			<?php }
		}else{?>

			<div class="row">
				<div class="col-sm-4">
					<div class="form-group form-group-default input-group col-sm-12">
						<?php print form_label('Product MOQ', 'product_moq'); ?>
						<?php print form_input(array('name' => 'product_moq[]', 'id' => 'product_moq', 'value' =>'', 'class' => 'form-control')); ?>
					</div>
				</div>
				<div class="col-sm-4">
					<div class="form-group form-group-default input-group col-sm-12">
						<?php print form_label('Unit price', 'unit_price'); ?>
						<?php print form_input(array('name' => 'unit_price[]', 'id' => 'unit_price', 'value' =>'', 'class' => 'form-control')); ?>
					</div>
				</div>
				
				<div class="col-sm-1" id="add_product_moq">
					<div class="btn btn-primary">Add</div>
				</div>
				
				<div class="col-sm-1" id="delete_product_moq" style="display: none;">
					<div class="btn btn-danger">Delete</div>
				</div>
				<div class="clear"></div>
			</div>

		<?php }?>
	</fieldset>
	<fieldset id="product_attribute">
		<legend>Product Attribute: <span class="btn btn-primary" id="attribute_add_button">Add</span></legend>
		<div id="product_attributes">
		<?php 
			if(is_array($product_attribute_update) && count($product_attribute_update) > 0)
			{
				foreach($product_attribute_update as $result_value){ ?>
					<div id="" class="row" data-id="PID">
						<div class="col-sm-12">
							<div class="col-sm-3">
								<div class="form-group form-group-default input-group col-sm-12">
									<?php print form_label('Attributes Lable', 'attribute_lable'); ?>
									<?php print form_input(array('name' => 'attributes[PID][attribute_lable]', 'id' => 'attribute_lable', 'value' =>($result_value)?$result_value['label']:$this->session->flashdata('attribute_lable'), 'class' => 'form-control')); ?>
								</div>
							</div>
							<div class="col-sm-3">
								<div class="form-group form-group-default input-group col-sm-12 attribute_field_dropdown">
									<?php print form_label('Attributes Type', 'attribute_type'); ?>
									<?php  print form_dropdown('attributes[PID][attribute_type]',$product_attribute_type,($result_value)?$result_value['type']:'0','id="attribute_type" class="full-width attribute_type"'); ?>
								</div>
							</div>
							<div class="col-sm-1" id="attribute_delete_button">
								<button class="btn btn-danger">DELETE</button>
							</div>
						</div>
						<?php
							foreach ($result_value['details'] as $option_value) { 

								if($result_value['type'] == 'text'){ ?> 
									<div class="col-sm-12 attribute_text_value">
										<div class="col-sm-3">&nbsp
										</div>
										<div class="form-group form-group-default col-sm-6">
											<?php print form_label('Text Area', 'text_area'); ?>
											<?php print form_textarea(array('name' => 'attributes[PID][text_area][]', 'id' => 'text_area', 'value' =>($option_value)?$option_value['attribute_value']:$this->session->flashdata('option'), 'class' => 'form-control text-editor')); ?>
										</div>
									</div>

								<?php }else{ ?>

									<div class="col-sm-12 attribute_value_option" >
										<div class="col-sm-3">&nbsp
										</div>
										<div class="col-sm-3">
											<div class="form-group form-group-default input-group col-sm-12 field_options">
												<?php print form_label('Option', 'option'); ?>
												<?php print form_input(array('name' => 'attributes[PID][option][]', 'id' => 'option', 'value' =>($option_value)?$option_value['attribute_value']:$this->session->flashdata('option'), 'class' => 'form-control')); ?>
											</div>
											
										</div>
										<div class="col-sm-1">
											<span class="add_option"><i class="fa fa-plus-circle"></i></span>
											<span class="subtract_option"><i class="fa fa-minus-circle"></i></span>
										</div>
									</div>

								<?php }
								?>

								
								
								
									

								
						<?php }

						?>
						<div class="clear"></div>
					</div>
				<?php }
			}else{?>
				<div id="" class="row" data-id="PID">
						<div class="col-sm-12">
							<div class="col-sm-3">
								<div class="form-group form-group-default input-group col-sm-12">
									<?php print form_label('Attributes Lable', 'attribute_lable'); ?>
									<?php print form_input(array('name' => 'attributes[PID][attribute_lable]', 'id' => 'attribute_lable', 'value' =>'', 'class' => 'form-control')); ?>
								</div>
							</div>
							<div class="col-sm-3">
								<div class="form-group form-group-default input-group col-sm-12 attribute_field_dropdown">
									<?php print form_label('Attributes Type', 'attribute_type'); ?>
									<?php  print form_dropdown('attributes[PID][attribute_type]',$product_attribute_type,'','id="attribute_type" class="full-width attribute_type"'); ?>
								</div>
							</div>
							<div class="col-sm-1" id="attribute_delete_button">
								<button class="btn btn-danger">DELETE</button>
							</div>
						</div>
						<div class="col-sm-12 attribute_value_option" style="display: none;">
							<div class="col-sm-3">&nbsp
							</div>
							<div class="col-sm-3">
								<div class="form-group form-group-default input-group col-sm-12 field_options">
									<?php print form_label('Option', 'option'); ?>
									<?php print form_input(array('name' => 'attributes[PID][option][]', 'id' => 'option', 'value' =>'', 'class' => 'form-control')); ?>
								</div>
								
							</div>
							<div class="col-sm-1">
								<span class="add_option"><i class="fa fa-plus-circle"></i></span>
								<span class="subtract_option"><i class="fa fa-minus-circle"></i></span>
							</div>
						</div>
						<div class="col-sm-12 attribute_text_value" style="display: none;">
							<div class="col-sm-3">&nbsp
							</div>
							<div class="form-group form-group-default col-sm-6">
								<?php print form_label('Text Area', 'text_area'); ?>
								<?php print form_textarea(array('name' => 'attributes[PID][text_area][]', 'id' => 'text_area', 'value' =>'', 'class' => 'form-control text-editor')); ?>
							</div>
						</div>
						<div class="clear"></div>
					</div>

			<?php } 
		?>
		</div>
	</fieldset>
	<div id="product_attribute_sample" class="hide">
		<div id="" class="row" data-id="PID">
			<div class="col-sm-12">
				<div class="col-sm-3">
					<div class="form-group form-group-default input-group col-sm-12">
						<?php print form_label('Attributes Lable', 'attribute_lable'); ?>
						<?php print form_input(array('name' => 'attributes[PID][attribute_lable]', 'id' => 'attribute_lable', 'value' =>'', 'class' => 'form-control','disabled' => 'disabled')); ?>
					</div>
				</div>
				<div class="col-sm-3">
					<div class="form-group form-group-default input-group col-sm-12 attribute_field_dropdown">
						<?php print form_label('Attributes Type', 'attribute_type'); ?>
						<?php  print form_dropdown('attributes[PID][attribute_type]',$product_attribute_type,'','id="attribute_type" class="full-width attribute_type" disabled="disabled"'); ?>
					</div>
				</div>
				<div class="col-sm-1" id="attribute_delete_button">
					<button class="btn btn-danger">DELETE</button>
				</div>
			</div>
			<div class="col-sm-12 attribute_value_option" style="display: none;">
				<div class="col-sm-3">&nbsp
				</div>
				<div class="col-sm-3">
					<div class="form-group form-group-default input-group col-sm-12 field_options">
						<?php print form_label('Option', 'option'); ?>
						<?php print form_input(array('name' => 'attributes[PID][option][]', 'id' => 'option', 'value' =>'', 'class' => 'form-control','disabled' => 'disabled')); ?>
					</div>
					
				</div>
				<div class="col-sm-1">
					<span class="add_option"><i class="fa fa-plus-circle"></i></span>
					<span class="subtract_option"><i class="fa fa-minus-circle"></i></span>
				</div>
			</div>
			<div class="col-sm-12 attribute_text_value" style="display: none;">
				<div class="col-sm-3">&nbsp
				</div>
				<div class="form-group form-group-default col-sm-6">
					<?php print form_label('Text Area', 'text_area'); ?>
					<?php print form_textarea(array('name' => 'attributes[PID][text_area]', 'id' => 'text_area', 'value' =>'', 'class' => 'form-control text-editor' ,'disabled' => 'disabled')); ?>
				</div>
			</div>
			<div class="clear"></div>
		</div>
	</div>
</div>
<div class="modal-footer">
	<input type="submit" name="student_submit" id="student_submit" value="<?php if(!$id){ echo 'Add Product'; }else{ echo 'Update Product'; } ?>" class="btn btn-primary"/>
</div>	
<?php	
print form_close() ."\r\n";
?>


<script type="text/javascript">
	function delete_image($image_id=""){
		var image_id = $image_id;
		var delete_image =confirm("Do you want to delete this?")
		if(delete_image == true){
			$.ajax({
				type:'POST',
				url:base_url+"admin/list_product/delete_product_image",
				data:{
					image_id:image_id,
				},
				success :function(data){
					if(image_id != ''){
						$('.image-wrap-'+image_id).remove();
					}
					
				}
			});
		}
		
	}

</script>