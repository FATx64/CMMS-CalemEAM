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
 * CalemPmAssetMeterFormNew
 */
function CalemPmAssetMeterFormNew(parent, formId, data) {
	if (arguments.length==0) return;
	CalemFormNew.call(this, parent, formId, data);
}

CalemPmAssetMeterFormNew.prototype = new CalemFormNew;
CalemPmAssetMeterFormNew.prototype.constructor = CalemPmAssetMeterFormNew;

CalemPmAssetMeterFormNew.prototype.toString = function() { return "CalemPmAssetMeterFormNew";}

CalemPmAssetMeterFormNew.prototype.onLookup =
function(fmId, lkupCallback, id, fld) {
	CalemPmAssetMeterBo.getInstance().onLookup(this, CalemFormNew.prototype.onLookup, fmId, lkupCallback, id, fld);
}

CalemPmAssetMeterFormNew.prototype._getLookupExtraInfo =
function(fld) {
	return CalemPmAssetMeterBo.getInstance()._getLookupExtraInfo(this, fld);
}
 
