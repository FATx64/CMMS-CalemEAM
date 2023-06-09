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
 * CalemTableViewDesignRender
 */
function CalemTableViewDesignRender(parent, id, viewInfo, controller) {
	if (arguments.length==0) return;
	var conf=CalemConf['view_engine']['tableViewDesign'];
	CalemViewDesignRender.call(this, parent, id, viewInfo, controller, conf);
}

CalemTableViewDesignRender.prototype=new CalemViewDesignRender;
CalemTableViewDesignRender.prototype.constructor=CalemTableViewDesignRender;

CalemTableViewDesignRender.prototype.toString = function() { return "CalemTableViewDesignRender"; }
CalemTableViewDesignRender.prototype.getClassName = function() { return "CalemTableViewDesignRender"; }

/**
 * Render the design with a tree view
 */
CalemTableViewDesignRender.prototype._renderView =
function(parentEl, layout) {
	var render=new CalemTableLayoutTreeRender(this._parent, this._id, this._info, this._controller);
	render.initDnd(this._dragSrc, this._dropTarget); //Drag drop
	render._parentRender=this;
	render.render(parentEl, 0);
	this._add(this._id, render); //so onlayout change can be handled.
}

//Use this action to re-draw custom fields.
CalemTableViewDesignRender.prototype.reRenderView =
function() {
	this._renders[this._id].reRenderView();
}

/**
 * Get customized info for saving
 * - acl info from leftPanel
 * - layout from right panel
 */
CalemTableViewDesignRender.prototype.getCustomizedView =
function() {
	return null;
}