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
 * CalemLayoutTreeTabFixed
 * This is the tab item.
 */
function CalemLayoutTreeTabFixed(parent, index, text, id, info) {
	if (arguments.length==0) return;
	text=[text, ' ', CalemMsg.getMsg('fixed')].join('');
	CalemDesignTreeItem.call(this, parent, index, text, 'CalemFormTab', id, info, false, true);
	this._calemDropAllowed=CalemConf['view_engine']['viewMdTabDesign'].dropAllowed;
} 

CalemLayoutTreeTabFixed.prototype = new CalemDesignTreeItem;
CalemLayoutTreeTabFixed.prototype.constructor = CalemLayoutTreeTabFixed;

CalemLayoutTreeTabFixed.prototype.toString = 
function() {
	return "CalemLayoutTreeTabFixed";
}

CalemLayoutTreeTabFixed.prototype._onDrop =
function(srcControl, targetControl) {
	return this._tree._addObject(this, srcControl);
}

//Label design
CalemLayoutTreeTabFixed.prototype.doLabelEdit = 
function() {
	return false;
}

CalemLayoutTreeTabFixed.prototype.getLabelId =
function() {
	return this._info.getId();
}

CalemLayoutTreeTabFixed.prototype.onLabelChanged =
function() {
	var text=[this._info.getLabel(), ' ', CalemMsg.getMsg('fixed')].join('');
	this.setText(text);
}

