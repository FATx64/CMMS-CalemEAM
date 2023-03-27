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
 * CalemReadFileUploadRender
 * Render string edit field.
 *  
 */
function CalemReadFileUploadRender(parent, id, fldInfo, controller) {
	if (arguments.length==0) return;
	CalemFieldReadRender.call(this, parent, id, fldInfo, controller);
	this._render=this;
}

CalemReadFileUploadRender.prototype=new CalemFieldReadRender;
CalemReadFileUploadRender.prototype.constructor=CalemReadFileUploadRender;

CalemReadFileUploadRender.prototype.toString = function() { return "CalemReadFileUploadRender"; }

CalemReadFileUploadRender.prototype.render =
function(parentEl, yOff) {
	this._control=new CalemReadFileUpload({parent: this._parent, type: DwtInputField.STRING, 
	              size: CalemConf['edit_schedule']['defaultReadSize']});
	this._control.reparentHtmlElement(parentEl);
	this._refreshField();            
}

//Default implementation for all the read renders.
CalemReadFileUploadRender.prototype._refreshField =
function() {
	var val= this._getFieldValueByRec();;
	var id=this._getRecId();
	this._control.setFileUpload(id, val);
}
