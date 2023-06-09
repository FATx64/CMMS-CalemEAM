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
 * CalemEditTimeRender
 * Render time field.
 *  
 */
function CalemEditTimeRender(parent, id, fldInfo, controller) {
	if (arguments.length==0) return;
	CalemEditRender.call(this, parent, id, fldInfo, controller);
}

CalemEditTimeRender.prototype=new CalemEditRender;
CalemEditTimeRender.prototype.constructor=CalemEditTimeRender;

CalemEditTimeRender.prototype.toString = function() { return "CalemEditTimeRender"; }

CalemEditTimeRender.prototype.render =
function(parentEl, yOff) {
	var len=this._tableDd.getTimeInputLength(this._field);
	this._control=new CalemEditTime({parent: this._parent, type: DwtInputField.STRING, 
	              size: len,
	              errorIconStyle: CalemConf['view_engine']['field']['inputErrorIcon']});
	this._control.setValidStringLengths(null, len)	              ;
	if (this._tableDd.isRequired(this._field)) {
		this._control.setRequired(true);
	}
	this._control.reparentHtmlElement(parentEl);
	var val= this._getFieldEditValueByRec();
	this._control.setValue(val, true);           
}

