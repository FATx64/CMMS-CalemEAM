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
CalemViewDef['CalemWoViewEdit']={
	CalemViewInfo: {
		id: 'CalemWoViewEdit',
		type: 'CalemView',
		layout: {
		 CalemLayoutInfo: {
			tableLayout: {CalemTableLayoutInfo: {}},
			colLayout: {CalemColLayoutInfo: {colCount: 4}}, //Potentially col width definition.
			rows: [
					{CalemTrInfo: {cols: ['lb_caption']}},
					{CalemTrInfo: {cols: ['toolbar']}},
               {CalemTrInfo: {cols: ['err']}},
               
                {CalemTrInfo: {cols: ['lb_failure']}},
					{CalemTrInfo: {cols: ['lb_origin']}},
					{CalemTrInfo: {cols: ['lb_assignment']}},               
					{CalemTrInfo: {cols: ['lb_schedule']}},
					{CalemTrInfo: {cols: ['lb_codes']}},
					{CalemTrInfo: {cols: ['lb_cost']}},
					{CalemTrInfo: {cols: ['lb_last_changes']}},
					{CalemTrInfo: {cols: ['lb_completion']}}, 
					{CalemTrInfo: {cols: ['lb_accept']}},
					{CalemTrInfo: {cols: ['lb_downtime']}}                                                                                                            				                               				                               
				   ]
			}
		},
		itemMap : {
			CalemItemMap: {
			toolbar: {
				CalemToolBarInfo: {
					type: 'CalemToolBar',
					layout: ['CalemTbSave', 'CalemTbCancel', 'sep', 'CalemTbCustomize'],
					list: [	  					 
					  { CalemButtonInfo: {
							 id: 'CalemTbSave', 
							 customInfo: {
							  	   CalemMenuCustomInfo: {
							  	   	enabled: false,
							  	   	events: [
							  	   		{CalemEventInfo: {id: CalemEvent.EDIT_CHANGED, func: '_enableIt'}},
							  	   		{CalemEventInfo: {id: CalemEvent.EDIT_NO_CHANGE, func: '_disableIt'}}
							  	   	]
							  	   }
							  }
						  }
						},		
					
					{ CalemButtonInfo: { id: 'CalemTbCancel'}},
					
					{CalemSeparator: {id: 'sep', className: 'CalemToolBarSeparator'}},
					
					{ CalemButtonInfo: { id: 'CalemTbCustomize'}}				
				]
			} },
			'lb_caption': {
				CalemLabelInfo: {id: 'workorder', className: 'CalemEditCaption'}
			},
			'err': {
				CalemFormErrorInfo: {id: 'form_error'}
			},
			'lb_failure': {
				CalemLabelInfo: {id: 'sec_wo_failure', className: 'CalemEditSection'}
			},
			'lb_origin': {
				CalemLabelInfo: {id: 'sec_wo_origin', className: 'CalemEditSection'}
			},
			'lb_assignment': {
				CalemLabelInfo: {id: 'sec_wo_assignment', className: 'CalemEditSection'}
			},
			'lb_schedule': {
				CalemLabelInfo: {id: 'sec_wo_schedule', className: 'CalemEditSection'}
			},
			//Codes
			'lb_codes': {
				CalemLabelInfo: {id: 'sec_wo_codes', className: 'CalemEditSection'}
			},
			//cost
			'lb_cost': {
				CalemLabelInfo: {id: 'sec_wo_cost', className: 'CalemEditSection'}
			},
			'lb_completion': {
				CalemLabelInfo: {id: 'sec_wo_completion', className: 'CalemEditSection'}
			},
			'lb_accept': {
				CalemLabelInfo: {id: 'sec_wo_accept', className: 'CalemEditSection'}
			},
			'lb_downtime': {
				CalemLabelInfo: {id: 'sec_wo_downtime', className: 'CalemEditSection'}
			}
	}
 } //ItemMap	
}
};

