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

//Base CalemDao
require_once _CALEM_DIR_ . 'server/include/core/database/CalemDbo.php';
require_once _CALEM_DIR_ . 'server/include/core/CalemFactory.php';

class CalemRcmFailureDbo extends CalemDbo {	
	//Keep function_id and template_id in sync using code.
	public function beforeInsert($baseTable, $baseData, $customTable, $customData) {
		if (isset($baseData['function_id']) && $baseData['function_id']) {
			$dbo=CalemFactory::getDbo('rcm_function');
			$row=$dbo->fetchById($baseData['function_id']);
			$baseData['template_id']=$row['template_id'];	
		}
		return $baseData;
	}
	
	public function beforeUpdate($baseTable, $baseCurrent, $baseUpdate) {
		if (isset($baseUpdate['function_id']) && $baseUpdate['function_id']) {
			$dbo=CalemFactory::getDbo('rcm_function');
			$row=$dbo->fetchById($baseUpdate['function_id']);
			$baseUpdate['template_id']=$row['template_id'];
		}
		return $baseUpdate;
	}
}

?>