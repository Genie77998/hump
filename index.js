/*
* @Author: wj77998
* @Date:   2017-02-27 16:18:18
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-02-27 17:12:31
*/

'use strict';

const hump_to_to_upper_case = function(string){
	string = string.replace(/[\-_\s]+(.)?/g, function(match, res) {
      return res ? res.toUpperCase() : '';
    })
    return string.substr(0, 1).toLowerCase() + string.substr(1);
}
const hump_to_lower_case = function(string,options){
    options = options || {};
	let _retrofit = typeof options.retrofit === "string" ? options.retrofit : '_';
		let _pattern = typeof options.pattern !== "undefined" && options.pattern.constructor === RegExp ? options.pattern : /(?=[A-Z])/;
		return string.split(_pattern).join(_retrofit).toLowerCase();
}

const hump = function(string,options){
	if(typeof string === "string"){
		if(/[A-Z]/.test(string)){
			return hump_to_lower_case(string,options)
		}else{
			return hump_to_to_upper_case(string);
		}
	}else{
		return string;
	}
}

module.exports = hump;

