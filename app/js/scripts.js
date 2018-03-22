$(window).on('load', function() {
  $('.flexslider').flexslider({
    animation: "fade"
    });
});

jQuery(document).ready(function() {
		
	jQuery("#nav-toggle").click(function() {
		
		jQuery(".menu").slideToggle(function(){
      jQuery(this).toggleClass("nav-hidden");
      jQuery(this).css("display", "");
    });
		
		
	});
	
});