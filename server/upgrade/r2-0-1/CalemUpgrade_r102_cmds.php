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

$_CALEM_cmds = array(
	//Scheduler - new tables
	'new_scheduler_task'=>array(
		'cmd'=>'CalemCmdCreateTable',
		'param'=>array(
			'table'=>'scheduler_task'
		)		
	),
	'new_scheduler_job'=>array(
		'cmd'=>'CalemCmdCreateTable',
		'param'=>array(
			'table'=>'scheduler_job'
		)		
	),
	'new_scheduler_job_log'=>array(
		'cmd'=>'CalemCmdCreateTable',
		'param'=>array(
			'table'=>'scheduler_job_log'
		)		
	),
	'new_semaphore'=>array(
		'cmd'=>'CalemCmdCreateTable',
		'param'=>array(
			'table'=>'semaphore'
		)		
	),
	
	//Dashboard - new tables	
	'new_dash_wo_orig_day'=>array(
		'cmd'=>'CalemCmdCreateTable',
		'param'=>array(
			'table'=>'dash_wo_orig_day'
		)		
	),
	'new_dash_wo_orig_md'=>array(
		'cmd'=>'CalemCmdCreateTable',
		'param'=>array(
			'table'=>'dash_wo_orig_md'
		)		
	),
	
	//doc upload
	'new_doc_attachment'=>array(
		'cmd'=>'CalemCmdCreateTable',
		'param'=>array(
			'table'=>'doc_attachment'
		)		
	),
	'new_doc_upload'=>array(
		'cmd'=>'CalemCmdCreateTable',
		'param'=>array(
			'table'=>'doc_upload'
		)		
	),
	
	//Upgrade - new tables
	'new_version'=>array(
		'cmd'=>'CalemCmdCreateTable',
		'param'=>array(
			'table'=>'version'
		)
	),
	'new_version_upgrade_log'=>array(
		'cmd'=>'CalemCmdCreateTable',
		'param'=>array(
			'table'=>'version_upgrade_log'
		)
	),
	
	//Asset auto-numbering
	'new_asset_seq'=>array(
		'cmd'=>'CalemCmdCreateTable',
		'param'=>array(
			'table'=>'asset_seq'
		)	
	),
	
	//IN auto-numbering
	'new_in_seq'=>array(
		'cmd'=>'CalemCmdCreateTable',
		'param'=>array(
			'table'=>'in_seq'
		)	
	),
	
	//Updates to existing tables
	'alter_po'=>array(
		'cmd'=>'CalemCmdAddField',
		'param'=>array(
			'table'=>'po',
			'fields'=>array('next_user_id', 'next_note')
		)	
	),
	'alter_requisition'=>array(
		'cmd'=>'CalemCmdAddField',
		'param'=>array(
			'table'=>'requisition',
			'fields'=>array('next_user_id', 'next_note')
		)	
	),
	'alter_inventory'=>array(
		'cmd'=>'CalemCmdAddField',
		'param'=>array(
			'table'=>'inventory',
			'fields'=>array('abc_id', 'abc_time')
		)	
	),
	//Alter field types
	'alter_users'=>array(
		'cmd'=>'CalemCmdModifyFieldType',
		'param'=>array(
			'table'=>'users',
			'fields'=>array('username', 'full_name', 'email_work', 'email_other',
			                'company', 'city', 'state', 'country')
		)
	),
	//Change field names for document
	'alter_document'=>array(
		'cmd'=>'CalemCmdModifyFieldName',
		'param'=>array(
			'table'=>'document',
			'fields'=>array(
				'url_change'=>array('id'=>'content', 'oldId'=>'url')			
			)
		
		)
	
	),
	//Added asset photo
	'alter_asset_photo'=>array(
		'cmd'=>'CalemCmdAddField',
		'param'=>array(
			'table'=>'asset',
			'fields'=>array('upload_id')
		)
	),
	
	//Vendor module
	'alter_vendor'=>array(
		'cmd'=>'CalemCmdAddField',
		'param'=>array(
			'table'=>'vendor',
			'fields'=>array('status_id', 'owner_user_id', 'comment')
		)	
	),
	
	'new_vendor_contact'=>array(
		'cmd'=>'CalemCmdCreateTable',
		'param'=>array(
			'table'=>'vendor_contact'
		)	
	),
	
	'new_contract'=>array(
		'cmd'=>'CalemCmdCreateTable',
		'param'=>array(
			'table'=>'contract'
		)	
	),
	
	'new_contract_contact'=>array(
		'cmd'=>'CalemCmdCreateTable',
		'param'=>array(
			'table'=>'contract_contact'
		)	
	),
	
	'contract_doc'=>array(
		'cmd'=>'CalemCmdCreateTable',
		'param'=>array(
			'table'=>'contract_doc'
		)	
	),
	
	//Asset service log
	'new_asset_service_log'=>array(
		'cmd'=>'CalemCmdCreateTable',
		'param'=>array(
			'table'=>'asset_service_log'
		)	
	),
	//Asset contract
	'new_asset_contract'=>array(
		'cmd'=>'CalemCmdCreateTable',
		'param'=>array(
			'table'=>'asset_contract'
	)
	),
	//Asset description
	'alter_asset_add_desc'=>array(
		'cmd'=>'CalemCmdAddField',
		'param'=>array(
			'table'=>'asset',
			'fields'=>array('description')
	)
	),
	//Inventory desc
	'alter_in_add_desc'=>array(
		'cmd'=>'CalemCmdAddField',
		'param'=>array(
			'table'=>'inventory',
			'fields'=>array('description')
		)	
	),
	//WO note
	'alter_workorder_add_note'=>array(
		'cmd'=>'CalemCmdAddField',
		'param'=>array(
			'table'=>'workorder',
			'fields'=>array('note')
		)	
	),
);

?>
