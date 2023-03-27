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
 * CalemWoPlannedToolFormRead
 */
function CalemWoPlannedToolFormRead(parent, formId, data) {
	if (arguments.length==0) return;
	CalemFormReadDet.call(this, parent, formId, data);
}

CalemWoPlannedToolFormRead.prototype = new CalemFormReadDet;
CalemWoPlannedToolFormRead.prototype.constructor = CalemWoPlannedToolFormRead;

CalemWoPlannedToolFormRead.prototype.toString = function() { return "CalemWoPlannedToolFormRead";}

/**
 * Business APIs
 */
CalemWoPlannedToolFormRead.prototype._getFormNewId =
function() {
	return 'CalemWoPlannedToolFormNew';
} 

CalemWoPlannedToolFormRead.prototype._getFormEditId =
function() {
	return 'CalemWoPlannedToolFormEdit';
}

CalemWoPlannedToolFormRead.prototype.canCreate =
function() {
	return this._canModify();
} 

CalemWoPlannedToolFormRead.prototype.canEdit =
function() {
	return this._canModify();
} 

CalemWoPlannedToolFormRead.prototype.canDelete =
function() {
	return this._canModify();
} 

CalemWoPlannedToolFormRead.prototype._canModify =
function() {
	var rec=this._dataModel.getParentRec();
	return CalemWoBo.getInstance().canModify(rec);
}
