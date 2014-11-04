// Enable JavaScript compatibility
document.documentElement.className=document.documentElement.className.replace("no-js","js");

// Check if browser is IE
function isIE () {
  var myNav = navigator.userAgent.toLowerCase();
  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}

if (isIE() < 9 && isIE() > 1) {
	// Load full legacy compatibility
	// This is going to add support for HTML5 elements (html5shiv),
	// media queries (respond.js) and placeholder attributes for inputs (placeholder.js)
	document.write('<script src="js/vendor/compat.js"><\/script>');
}

/* IE10 hack for Windows 8 & Windows Phone 8
 * Fix not recognizing media queries.
 * Not available in compat.js because it loads only in IE<9 */
if(navigator.userAgent.match(/IEMobile\/10\.0/)){var msViewportStyle=document.createElement("style");msViewportStyle.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}"));document.querySelector("head").appendChild(msViewportStyle)}
