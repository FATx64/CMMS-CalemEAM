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
 * CalemWoReqFormNew
 */
function CalemWoReqFormNew(parent, formId, data) {
	if (arguments.length==0) return;
	CalemFormNewCacheLoad.call(this, parent, formId, data);
}

CalemWoReqFormNew.prototype = new CalemFormNewCacheLoad;
CalemWoReqFormNew.prototype.constructor = CalemWoReqFormNew;

CalemWoReqFormNew.prototype.toString = function() { return "CalemWoReqFormNew";}

CalemWoReqFormNew.prototype._onSoapSaveSuccess =
function(action) {
	//Force a repaint.
	this.onRecChanged();
}

CalemWoReqFormNew.prototype._getInputDataRow =
function() {
	var row= CalemFormNew.prototype._getInputDataRow.call(this);
	row['origin_id']='woo_request';
	return row;
}
