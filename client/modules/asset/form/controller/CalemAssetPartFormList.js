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
 * CalemAssetPartFormList
 */
function CalemAssetPartFormList(parent, formId, data) {
	if (arguments.length==0) return;
	CalemFormListDet.call(this, parent, formId, data);
}

CalemAssetPartFormList.prototype = new CalemFormListDet;
CalemAssetPartFormList.prototype.constructor = CalemAssetPartFormList;

CalemAssetPartFormList.prototype.toString = function() { return "CalemAssetPartFormList";}

/**
 * Business APIs
 */
CalemAssetPartFormList.prototype._getFormNewId =
function(evt) {
    return 'CalemAssetPartFormNew';
} 

/**
 * Open a master detailed view with recordlist and current record position.
 */
CalemAssetPartFormList.prototype._getFormReadId =
function(evt) {
	return 'CalemAssetPartFormRead';
} 

