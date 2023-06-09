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
 
/**
 * To build cache data:
 * - acl_group and dependencies
 * Cache built here will be loaded along with other custom data.
 */ 


//Checking basic initialization
if (!defined('_CALEM_DIR_')) die("Access denied at ".__FILE__);

require_once _CALEM_DIR_ . 'server/modules/admin/CalemAclGroupDbo.php';
require_once _CALEM_DIR_ . 'server/include/core/CalemFactory.php';

/**
 * This file generate a zip file for all the static meta data.
 */
class CalemCacheAclGroup {
	private $parentMap=array();
	
	public function load() {
		$dbo=new CalemAclGroupDbo();
		$rows=$dbo->getAll();
		$data=array();
		foreach ($rows as $row) {
			$dataRow=array();
			foreach ($row as $key=>$val) {
				$dataRow[]=$val;	
			}
			$data[]=$dataRow;
			$this->addParent($row['id'], $row['parent_group_id']);	
		}
		//Searializing the object
		$group=array('data'=>$data, 'parentMap'=>$this->parentMap);
		$cache=CalemFactory::getDataCacheManager();
		$cache->save($group, 'acl_group');
	}	
	
	private function addParent($id, $parentId) {
		if ($parentId!=CALEM_OOB && $parentId!=CUSTOM_SYSTEM) {
			$parentId=CUSTOM_SYSTEM;
		}
		if (isset($this->parentMap[$id])) {
			$list=$this->parentMap[$id];	
		} else {
			$list=array(CALEM_OOB);	
		}
		if ($parentId!==null) {
			array_splice($list, 0, 0, $parentId);
		}
		$this->parentMap[$id]=$list;
	}	
}
?>
