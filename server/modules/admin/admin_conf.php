<?php
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
 * This file defined the configuration for this installation by 
 * combining the custom with the distributed installation. 
 */
 
//Checking basic initialization
if (!defined('_CALEM_DIR_')) die("Access denied at ".__FILE__);

$_CALEM_dist['admin_conf']=array(
   'scheduler'=>array(
   	'task_script_time'=>300, //5 min
   	'semaphoreExpireSecs'=>600   //10 min expiration 
   ),
   'first_version'=>array(
   	'vid'=>'r1-0-2',
   	'note'=>'CalemEAM version 1.0.2',
   	'props'=>array()   
   ),
   'upgrade_status'=>array(
   	'started'=>'vs_started',
   	'done'=>'vs_upgraded',
   	'failed'=>'vs_failed'
   )
);

?>
