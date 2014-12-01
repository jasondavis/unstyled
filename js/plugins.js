/* =====================
 * Unstyled Functions
 * ================== */
(function($){ 

  /* ===========================================
   * Responsive navs
   * See the markup for exmple structure
   * Then you can call the responsiveNav plugin
   * $('.nav').responsiveNav();
   */
  $.fn.responsiveNav = function() {
    // Toggle the menu on mobile devices
    var $this = $(this);
    $this.children('.menu-toggle').click(function(event) {
      event.preventDefault();
      $(this).next('ul').toggleClass('opened');
      $(this).toggleClass('active');
      $('header').toggleClass('opened');
      $('.nav ul ul').slideUp();
    });

    var navLinks = $this.children('ul').find('a');

    // Insert arrows for submenus
    navLinks.each(function() {
      var submenu = $(this).next('ul');
      if (submenu.length) {
        $(this).append('<span class="arrow"><div>&#9662;</div></span>')
      }
    });

    // Toggle the submenus on desktop versions
    $this.find('.arrow').click(function(e) {
      e.preventDefault();
      $(this).parent().next('ul').stop().slideToggle(150);
      $(this).toggleClass('active');
    });
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
    $this.find('a').click(function(e){
      if (this.hash) {
        e.preventDefault();
        scrollTo(this.hash, 1000,0);
      }
    });
    return this;
  }

  /* ===========================================
   * Equal heights
   * If you want to make a set of elements 
   * to have equal heights, call the equalHeights
   * plugin for their parents
   * $('.parent').equalHeights();
   */
  $.fn.equalHeights = function(px) {
    $(this).each(function(){
      var currentTallest = 0;
      $(this).children().each(function(i){
        if ($(this).height() > currentTallest) { currentTallest = $(this).height(); }
      });
      if (!px && Number.prototype.pxToEm) currentTallest = currentTallest.pxToEm(); //use ems unless px is specified
      $(this).children().css({'min-height': currentTallest}); 
    });
    return this;
  };

  /* ===========================================
   * Custom scrollTo implementation
   * Most of the time all you want to do
   * is scroll just up and down so no need
   * to load scrollTo.js
   * Remove if you decide to go with scrollTo.js
   * Usage: scrollTo('#element', 1000); 
   */
  function scrollTo(selector, time, verticalOffset) {
      time = typeof(time) != 'undefined' ? time : 1000;
      verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
      element = $(selector);
      offset = element.offset();
      offsetTop = offset.top + verticalOffset;
      $('html, body').animate({
          scrollTop: offsetTop
      }, time);
  }
})(jQuery);

/* ==================
 * End of Unstyled
 * =============== */