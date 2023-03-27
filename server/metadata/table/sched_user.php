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
    'table_name'=>'sched_user',
    'module'=>'modCalemSched',
    'cache_type'=>'database',
    'order_by'=>array('field'=>'sched_date', 'order'=>'DESC'),
    'primary_key'=>array('id'),
    'unique_indexes'=>array(
    	'uidx_sched_user'=>array('user_id', 'sched_date', 'shift_id')
    ),
    'indexes'=>array(
      'idx_sched_user_date'=>array('sched_date')
    ),
    'fields'=>array(
    	'id'=>array(
    		'type'=>'guid'  		
    	),
    	'user_id'=>array(
    		'type'=>'guid',
    		'lookup'=>'users',
    		'required'=>true
    	),
    	'sched_date'=>array(
    		'type'=>'date',
    		'required'=>true
    	),
    	'shift_id'=>array(
    		'type'=>'guid',
    		'lookup'=>'shift',
    		'required'=>true
    	),
    	'total_hours'=>array(
    		'type'=>'double'
    	),
    	'sched_hours'=>array(
    		'type'=>'double',
    		'required'=>true
    	),
    	'hours_sched'=>array(
    		'type'=>'double'
    	),
    	'note'=>array(
    		'type'=>'varchar',
    		'length'=>76
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
