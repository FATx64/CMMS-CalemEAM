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
 * Budget views
 */
CalemViewDef['CalemViewDesignDropdownPanel']={
	CalemViewInfo: {
		id: 'CalemViewDesignDropdownPanel',
		type: 'CalemView',
		layout: {
		 CalemLayoutInfo: {
			tableLayout: {CalemTableLayoutInfo: {}},
			colLayout: {CalemColLayoutInfo: {colCount: 2}}, //Potentially col width definition.
			rows: [
					{CalemTrInfo: {cols: ['lb_dropdown_design']}},
					{CalemTrInfo: {cols: ['toolbar']}},												 						             
					{CalemTrInfo: {height: CalemViewUtil.H_FULL,   cols: ['tree']}}			                               				                               
				   ]
			}
		},
		itemMap : {
			CalemItemMap: {
			toolbar: {
				CalemToolBarDesignInfo: {
					type: 'CalemToolBar',
					layout: ['CalemTbCancel'],
					list: [ 					
					      			
					{ CalemButtonInfo: {
						id: 'CalemTbCancel', 
						customInfo: {
						  	   CalemMenuCustomInfo: {
						  	   	enabled: true
						  	   }
						  }
					  }
					}
				]
			} } ,
			'lb_dropdown_design': {
				CalemDesignLabelInfo: {id: 'dropdown_design', className: 'CalemEditCaption'}
			},
			'tree' : {
				CalemListDesignTreeInfo: true //dummy
			}
	}
 } //ItemMap	
}
};

