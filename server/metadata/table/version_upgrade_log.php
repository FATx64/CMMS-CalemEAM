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
    'table_name'=>'version_upgrade_log',
    'module'=>'modCalemAdmin',
    'cache_type'=>'database',
    'primary_key'=>array(
    	'id'
     ),
    'fields'=>array(
    	'id'=>array(
    		'type'=>'guid'  		
    	),
    	'vid'=>array(
    		'type'=>'varchar',
    		'length'=>30
    	),
    	'ver_note'=>array(
    		'type'=>'varchar',
    		'length'=>76
    	),
    	'prev_vid'=>array(
    		'type'=>'varchar',
    		'length'=>30
    	),
    	'prev_ver_note'=>array(
    		'type'=>'varchar',
    		'length'=>76
    	),
    	'prev_props'=>array(
    		'type'=>'varchar',
    		'length'=>2000
    	),
    	'status_id'=>array(
    		'type'=>'guid',
    		'lookup'=>'version_status'    	
    	),
    	'start_time'=>array(
    		'type'=>'datetime'
    	),
    	'end_time'=>array(
    		'type'=>'datetime'
    	),
    	'upgrade_note'=>array(
    		'type'=>'varchar',
    		'length'=>76
    	),
    	'results'=>array(
    		'type'=>'text',
    		'label'=>'upgrade_log'
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
