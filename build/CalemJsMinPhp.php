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
 * Using exe to minimize js files
 */


//Checking basic initialization
if (!defined('_CALEM_DIR_')) die("Access denied at ".__FILE__);

require_once _CALEM_DIR_ . 'server/include/jsmin/jsmin.php';
/**
 * This file generate a zip file for all the static meta data.
 */
class CalemJsMinPhp {
	public function jsmin($src, $dest) {
		try {
		$min=JSMin::minify(file_get_contents($src));
		} catch (Exception $e) {
			$min='';
		}
		$rtn= (isset($min) && strlen($min)>0);
		if ($rtn) {
		file_put_contents($dest, $min);
		}
		if (!$rtn) {
			echo "WARNING: script minification failed. CalemEAM is configured to work without it for now.<br>\n";	
		}
		return $rtn;
	}	
}
?>
