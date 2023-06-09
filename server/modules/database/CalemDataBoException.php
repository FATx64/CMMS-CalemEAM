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


//Checking basic initialization
if (!defined('_CALEM_DIR_')) die("Access denied at ".__FILE__);

require_once _CALEM_DIR_ . 'server/include/core/CalemErrorInfo.php';

/**
 * This is the exception of transaction sequence error.
 */
 class CalemDataBoException extends Exception {
 	private $errorInfo;
 	private $ex;
 	private $table;
 	private $nativeError;
 	private $param;
 	
 	// Redefine the exception so message isn't optional
   public function __construct($table, $ex, $nativeError=null, $param=null) {
       // make sure everything is assigned properly
       parent::__construct($ex->getMessage());
       $this->errorInfo=new CalemErrorInfo($ex, $table, $nativeError, $param);     
       $this->table=$table;
       $this->ex=$ex;
       $this->nativeError=$nativeError;
       $this->param=$param; 
   }
   
   public function getErrorInfo() {
   	return $this->errorInfo;
   }
   
   public function getEx() {
   	return $this->ex;
   }
 }
?>
