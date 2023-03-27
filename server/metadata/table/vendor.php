<?php
/*
 * The contents of this file are subject to the CalemEAM Public License Version
 * 1.0 ("License"); You may not use this file except in compliance with the
 * License. You may obtain a copy of the License at http://www.calemeam.com/license
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied.  See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is: CalemEAM Open Source
 *
 * The Initial Developer of the Original Code is CalemEAM Inc.
 * Portions created by CalemEAM are Copyright (C) 2007 CalemEAM Inc.;
 * All Rights Reserved.
 
 * Contributor(s): 
 */


//Checking basic initialization
if (!defined('_CALEM_DIR_')) die("Access denied at ".__FILE__);

$_CALEM_table=array(
    'table_name'=>'vendor',
    'module'=>'modCalemVendor',
    'cache_type'=>'memory',
    'order_by'=>array('field'=>'vendor', 'order'=>'ASC'),
    'primary_key'=>array(
    	'id'
    ),
    'unique_indexes'=>array(
    	'uidx_vendor'=>array('vendor'),
    ),
    'lookup_mapping'=>array(
    	'field'=>'id',
		'primary'=>'vendor'
    ),
    'fields'=>array(
    	'id'=>array(
    		'type'=>'guid'  		
    	),
    	'vendor'=>array(
    		'type'=>'varchar',
    		'length'=>30,
    		'required'=>true
    	),
    	'tax_code_id'=>array(
    		'type'=>'guid',
    		'lookup'=>'tax_code'
    	),
    	'status_id'=>array(
    		'type'=>'guid',
    		'lookup'=>'vendor_status'
    	),
    	'owner_user_id'=>array(
    		'type'=>'guid',
    		'lookup'=>'users'
    	),
    	'note'=>array(
    		'type'=>'varchar',
    		'length'=>76
    	), 
    	'contact_id'=>array(
    		'type'=>'guid',
    		'lookup'=>'contact'
    	),
    	'address'=>array(
    		'type'=>'varchar',
    		'length'=>512,
    		'label'=>'vendor_address'
    	),
    	'comment'=>array(
    		'type'=>'text',
    		'label'=>'vendor_comment'
    	),
    	'modified_time'=>array(
    		'type'=>'datetime'
    	),
    	'modified_id'=>array(
    		'type'=>'guid',
    		'lookup'=>'users'
    	),
    	'created_time'=>array(
    		'type'=>'datetime'
    	),
    	'created_id'=>array(
    		'type'=>'guid',
    		'lookup'=>'users'
    	)    	    
    ) //End of fields list    	
)
?>
