<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed'); ?>
<script type="text/javascript" src="<?php echo autoVersioning('assets/admin/js/grid/list_product.js'); ?>"></script>

<?php

if($this->session->userdata('role_id') == '1' || in_array("add_product",$this->arrAction)) { ?>
	<div id="add_model_link" class="hide"><a href="list_product/add" class="btn btn-success" target="_blank"><?php echo $this->lang->line('add_new'); ?> <i class="fa fa-plus"></i></a></div>
<?php
} 
?>

<div class="panel bg-white">
	<div class="panel-heading">
	  	<div class="pull-right">
		</div>
		<div class="clearfix"></div>
	</div>
	<div class="panel-body ">
		<table class="table" id="grid_other_product">
			<thead>
				<tr>
					<th>DB ID</th>
					<th>Product Name</th>
					<th>Product Category</th>
					<th>Suplire Name</th>
					<th>Product Type</th>
					<th>Price</th>
					<th>product Short Desc</th>
                    <th>Product Sku</th>
                    <th>Total Quantity</th>
                    <th>Sold Quantity</th>
                    <th>In Stock Quantity</th>
                    <th>Discontinued</th>
					<th></th>
				</tr>
			</thead>
			<!-- <tfoot>
				<tr>
					<th>DB ID</th>
					<th>Staff Name</th>
					<th>Email 1</th>
					<th>Email 2</th>
					<th>DOB</th>
					<th>Contact number 1</th>
					<th>Contact number 2</th>
                    <th>Role</th>
					<th>Date Added</th>
					<th>Last Updated</th>
					<th><?php echo $this->lang->line('user_p_action'); ?></th>
				</tr>
			</tfoot> -->
			<tbody> </tbody>
		</table>
	</div>
</div>