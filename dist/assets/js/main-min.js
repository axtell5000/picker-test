"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var monthArray=["January","February","March","April","May","June","July","August","September","October","November","December"],DatePicker=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"insertMonths",value:function(){var e=document.querySelector("#month"),t=null;monthArray.map(function(n){t=document.createElement("option"),t.textContent=n,e.appendChild(t)})}}]),e}(),test=new DatePicker;test.insertMonths();