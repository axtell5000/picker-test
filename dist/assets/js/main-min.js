"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var DatePicker=function(){function e(){_classCallCheck(this,e),this.insertMonths(),this.insertYears(),this.addEvent()}return _createClass(e,[{key:"calcCurrentMoment",value:function(){return moment()}},{key:"insertMonths",value:function(){var e=["January","February","March","April","May","June","July","August","September","October","November","December"],t=document.querySelector("#month"),n=null;e.map(function(e){n=document.createElement("option"),n.value=e,n.textContent=e,t.appendChild(n)});var a=this.calcCurrentMoment();t.value=a.format("MMMM")}},{key:"insertYears",value:function(){for(var e=document.querySelector("#year"),t=null,n=this.calcCurrentMoment(),a=parseInt(n.format("YYYY"),10),r=a;r<=a+5;r++)t=document.createElement("option"),t.value=r,t.textContent=r,e.appendChild(t)}},{key:"selectedDate",value:function(e){var t="",n=!0,a=!1,r=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){t=t+" "+o.value.value}}catch(e){a=!0,r=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw r}}this.calculateDates(t)}},{key:"addEvent",value:function(){var e=this,t=document.getElementsByTagName("select");this.selectedDate(t);var n=!0,a=!1,r=void 0;try{for(var o,l=t[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){o.value.addEventListener("change",function(){e.selectedDate(t)})}}catch(e){a=!0,r=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw r}}}},{key:"calculateDates",value:function(e){var t=moment(e,"MMMM YYYY"),n={startOfMonth:t.startOf("month").format("d"),daysInMonth:t.daysInMonth(),month:t.format("MMMM"),year:t.format("YYYY")};this.renderDateGrid(n)}},{key:"calcBookingDate",value:function(e,t){console.log(t);var n=document.querySelector("#booking-date");n.value="";var a="".concat(t," ").concat(e.month," ").concat(e.year);n.value=a}},{key:"renderDateGrid",value:function(e){var t=this,n=document.querySelector("#dateGrid");if(void 0!==n&&null!=n)for(;n.firstChild;)n.removeChild(n.firstChild);else console.log("Element does not exist!");var a=parseInt(e.startOfMonth,10),r=parseInt(e.daysInMonth,10),o=0,l=1,i=0;i=r>30&&a>=5?6:r>=30&&a>=6?6:5;for(var c=0;c<i;c++){var u=document.createElement("tr");n.appendChild(u);for(var s=0;s<7;s++){if("break"===function(n){var i=document.createElement("td");if(o<a?(i.classList.add("not_in_month"),o++):l<=r?(i.classList.add("in_month"),i.textContent=l,i.addEventListener("click",function(n){var a=i.textContent;console.log(a,"hello"),t.calcBookingDate(e,a)}),l++):i.classList.add("not_in_month"),u.appendChild(i),n>6)return"break"}(s))break}}}}]),e}();window.addEventListener("load",function(){new DatePicker});