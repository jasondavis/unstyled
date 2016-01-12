// Replace class="no-js" with class="js" in <html>
document.documentElement.className = document.documentElement.className.replace("no-js","js");

/* =====================
 * Unstyled Functions
 * ================== */
/* ===========================================
 * Responsive navs
 * See the markup for exmple structure
 * Then you can call the responsiveNav plugin
 * $('.nav').responsiveNav();
 */
$.fn.responsiveNav = function() {
  var $this = $(this);
  var navLinks = $this.children('ul').find('a');
  
  // Insert arrows for submenus
  navLinks.each(function() {
    var submenu = $(this).next('ul');
    if (submenu.length) {
      $(this).append('<span class="arrow"><div>&#9662;</div></span>')
    }
  });

  // Toggle the menu on mobile devices
  $this.children('.menu-toggle').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).next('ul').toggle(0, function(){$(this).toggleClass('opened')});
    $(this).toggleClass('active');
    $('header').toggleClass('opened');
  });

  // Toggle the submenus on desktop versions
  $this.find('.arrow').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).parent().next('ul').stop().slideToggle(150);
    $(this).toggleClass('active');
  });

  $('body').click(function(){
    closeChildren();
  });

  function closeChildren() {
    $this.find('.opened').removeClass('.opened');
    $this.find('.arrow').removeClass('active');
    $this.find('ul ul').slideUp();
  }
  return this;
}

/* ===========================================
 * Handle hashtag URLs
 * If you have a <section id="section1"> and
 * an <a href="#section1">
 * $('.nav').sectionLinks();
 */
$.fn.sectionLinks = function() {
  var $this = $(this);
  var urlHash = this.hash;
  $this.find('a').click(function(e){
    if (urlHash) {
      e.preventDefault();
      $('body').scrollTo(urlHash, {offsetTop: -20});
    }
  });
  return this;
}

/* ===========================================
 * Custom scrollTo implementation
 * Most of the time all you want to do
 * is scroll just up and down so no need
 * to load scrollTo.js
 * Remove if you decide to go with scrollTo.js
 * Usage: scrollTo('#element', 1000); 
 */
$.fn.scrollTo = function( target, options, callback ){
  if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
  var settings = $.extend({
    scrollTarget  : target,
    offsetTop     : -500,
    duration      : 300,
    easing        : 'swing'
  }, options);
  return this.each(function(){
    var scrollPane = $(this);
    var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
    var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + parseInt(settings.offsetTop);
    scrollPane.animate({scrollTop : scrollY+1 }, parseInt(settings.duration), settings.easing, function(){
      if (typeof callback == 'function') { callback.call(this); }
    });
  });
}
