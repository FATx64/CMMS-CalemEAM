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

require_once _CALEM_DIR_ . 'server/modules/report/controller/CalemReportController.php';
require_once _CALEM_DIR_ . 'server/modules/report/render/list/CalemReportListRender.php';

/**
 * CalemFormList
 * This is the listView form.
 * 
 */
class CalemReportList extends CalemReportController {
	 
	//By default it's read render
	public function _createRender($vId, $vInfo) {
		$render=new CalemReportListRender($vId, $vInfo, $this);
		return $render;	
	}
	
	/**
	 * Prepare grid info
	 * {aclMap: MapOfHiddenFields,
	 *  listInfo: CalemListInfo
	 * }
	 * Combining acls, custom and original layout.
	 */
	public function getGridCustomInfo() {
		$customInfo=$this->getCustomInfo();
		$layout= $customInfo->getLayout();
		$gridListInfo= $layout ? $layout->getGridLayout() : $this->render->getViewInfo()->getItem('grid')->getListInfo();
		return array('acl'=>$customInfo->getAcl()->getViewAcl()->getAcl(), 'listInfo'=>$gridListInfo);
	}
}
?>