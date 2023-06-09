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
 


CalemViewDef['CalemPoReportRead']={
	CalemViewInfo: {
		id: 'CalemPoReportRead',
		type: 'CalemView',
		layout: {
		 CalemLayoutInfo: {
			tableLayout: {CalemTableLayoutInfo: {}},
			colLayout: {CalemColLayoutInfo: {colCount: 4}}, 
			rows: [
					{CalemTrInfo: {cols: ['lb_caption']}},
					{CalemTrInfo: {cols: ['toolbar']}},
               {CalemTrInfo: {cols: ['err']}},
               
					{CalemTrInfo: {cols: ['lb_cost']}},
					{CalemTrInfo: {cols: ['lb_last_changes']}}                                                                             				                               				                               
				   ]
			}
		},
		itemMap : {
			CalemItemMap: {
			toolbar: {
				CalemToolBarInfo: {
					type: 'CalemToolBar',
					layout: ['CalemTbPrint', 'CalemTbCancel', 'sep2', 'CalemTbCustomize'],
					list: [
					
					{ CalemButtonInfo: {
						  id: 'CalemTbPrint',
						  customInfo: {
						  	  CalemMenuCustomInfo: {
						  	  	 enabled: false,
						  	  	 events: [
						  	   		{CalemEventInfo: {id: CalemEvent.RECORD_POS_VALID, func: '_enableIt'}},
						  	   		{CalemEventInfo: {id: CalemEvent.RECORD_POS_INVALID, func: '_disableIt'}}
						  	   	]
						  	  }
						  }  
					  }		
					},
					
					{CalemSeparator: {id: 'sep', className: 'CalemToolBarSeparator'}},
					
					{ CalemButtonInfo: {id: 'CalemTbCancel'}},
					
					{ CalemButtonInfo: {id: 'CalemTbCustomize'}}
				]
			} },
			'lb_caption': {
				CalemLabelInfo: {id: 'po', className: 'CalemEditCaption'}
			},
			'err': {
				CalemFormErrorInfo: {id: 'form_error'}
			},
			'lb_cost': {
				CalemLabelInfo: {id: 'sec_po_cost', className: 'CalemEditSection'}
			},
			'lb_last_changes': {
				CalemLabelInfo: {id: 'last_changes', className: 'CalemEditSection'}
			}
	}
 } 	
}
};

