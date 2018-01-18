$(document).ready( function () {
	$('#grid_other_product').bind('processing',function(e, oSettings, bShow){showHideDatatableProcessing(bShow)});
	dTable = $('#grid_other_product').dataTable({
		bJQueryUI:false,
		bProcessing:true,
		bServerSide: true,
		sAjaxSource: "list_product/index_json",
		"sDom": "fCl<'table-responsive'rt><'row'<p i>>",
		"oColVis": {
			"aiExclude": [table_total_col-1]
        },
        "aoColumnDefs": [{
				"bVisible": false,
				'aTargets': []
			}
		],
		aoColumns: [
						{"sName": "products.product_id"},
						{"sName": "product_name"},
						{"sName": "category_name"},
						{"sName": "name"},
						{"sName": "type_name"},
						{"sName": "product_price"},
						{"sName": "product_short_desc"},
						{"sName": "product_sku"},
						{"sName": "total_quantity"},
						{"sName": "sold_quantity"},
						{"sName": "in_stock_quantity"},
						{"sName": "discontinued"},
		            	{"sName": "ID",
       						"bSearchable": false,
       						"bSortable": false,
						}		            	
		           ],
		sPaginationType: "bootstrap"});
		//dTable.fnSort([[14,'desc']]);	
		$('#grid_other_product_wrapper .dataTables_filter input').addClass("input-medium form-control");
		$('#grid_other_product_wrapper .dataTables_length select').addClass("select2-wrapper");

		/*dTable.columnFilter({
	        aoColumns: [    
	                 null,
					 { type: "text" },
					 { type: "text" },
	        		 { type: "text" },
	                 { type: "text" },
	                 null,
	                 { type: "text" },
	                 null,
	                 { type: "text" },
					 { type: "text" },
	                 { type: "text" },
	                 null,
					 null,
	                 null,
	                 null,
	                 null,
	                 null,
	                 null,
	                 null
	            ],
				bUseColVis: true
        });	*/
});