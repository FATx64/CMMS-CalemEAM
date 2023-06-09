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
 * CalemReadFileAttachmentRender
 * Render string edit field.
 *  
 */
function CalemReadFileAttachmentRender(parent, id, fldInfo, controller) {
	if (arguments.length==0) return;
	CalemReadFileUploadRender.call(this, parent, id, fldInfo, controller);
	this._render=this;
}

CalemReadFileAttachmentRender.prototype=new CalemReadFileUploadRender;
CalemReadFileAttachmentRender.prototype.constructor=CalemReadFileAttachmentRender;

CalemReadFileAttachmentRender.prototype.toString = function() { return "CalemReadFileAttachmentRender"; }

//Default implementation for all the read renders.
CalemReadFileAttachmentRender.prototype._refreshField =
function() {
	var val= this._getFieldValueByRec();
	var rv= this._getFieldRawValue();
	if (rv) {
		this._control.setFileUpload(rv, val);
	}	
}
