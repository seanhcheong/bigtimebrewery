/*
	Group 6
	INFO 343 with Morris
    Kyle Bergman, Tammy Nguyen, Rhea Arora, Sean Cheong
*/

$(document).ready(function() {
 
  //obtain carousel
  $(".carousel").owlCarousel({
  	  navigation : false, // Show next and prev buttons
      slideSpeed : 500,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay:true
  });

  //fade out social buttons as you scroll
  var mn = $(".nav-bar");
  $(window).scroll(function() {
  	if($(this).scrollTop() > 275) {
  		mn.addClass("main-nav-scrolled");
  		$("header").fadeOut();
  	} else {
  		mn.removeClass("main-nav-scrolled");
  		$("header").fadeIn();
  	}
  })
 
});

