"use strict";


$( document ).ready(function() {
    
    //creates the google map and info window on the page 
    var mapOptions = {
        center: {lat: 47.65785, lng: -122.31342}, 
        zoom: 10
    };
    
    var mapElem = document.getElementById('map');
    var map = new google.maps.Map(mapElem, mapOptions);
    mapTypeId: google.maps.MapTypeId.ROADMAP
    var infowindow = new google.maps.InfoWindow({
        content: "BigTime Brewery"
    });

        

    //resize the map based on the viewport height
    $(window).resize(function() {
        $("#map").height( (Number($(this).height())) - ($('#map').position().top) - 20); 

    });
            //set marker to bigtime brewery
             var marker = new google.maps.Marker({
                position: {
                    lat: 47.65785,
                    lng: -122.31342, 
                },
                map: map,
                draggable:true,
               
  
            });
            infowindow.open(map,marker);

            //open an infowindow when clicking on the marker
            google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
            });
           
        // Zoom to 9 when clicking on marker
        google.maps.event.addListener(marker,'click',function() {
          map.setZoom(17);
          map.setCenter(marker.getPosition());
        });

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
    
}); //DOM
