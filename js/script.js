
   $(window).load(function() {
            // Animate loader off screen
            $(".loader").fadeOut('1000');
fullsize();

        });

   $(document).ready(function() { 

    
    fullsize();
    centerelement();  
    centermenu();
    para();
    aboutslider();
    activatorcolor();
    fadein();
    


    });

   $(window).resize(function() { 
    fullsize();
    centerelement();
    centermenu();
    para();
    


    });



   $(window).scroll(function(){
    para();
    fadein();
    activatorcolor();
    
    



    });



function fullsize() {
$('.fulldiv, .splash, .menu, .slick-slide').height(window.innerHeight);
}

function aboutslider() {
    $('.aboutslider').slick({
    arrows : true,
    dots : true,
    autoplay : false,
    infinite: false,
    pauseOnDotsHover : true,
    pauseOnHover: false,
touchThreshold: 10,
  autoplaySpeed: 5000,

  });    
    }


function activatorcolor() {
$('.fulldiv').each(function(){
if ($(window).scrollTop() >= $(this).offset().top - 25) 
    {
if ($(this).hasClass('black'))
        {$('.menu-activator .fa-bars').css({'color' : '#fafafa'})}
    else {$('.menu-activator .fa-bars').css({'color' : '#000'})}
}
});
}

function fadein () {
$('.centerelement, .aboutslider, .map').each( function(){

var bottomscreen = $(window).scrollTop() + window.innerHeight - 100;
var object = $(this).offset().top;
if (bottomscreen >= object) 

    {$(this).css({
'opacity' : 1,
                 });
}
else
    {$(this).css({
'opacity' : 0,
                 });
}
});
}


function centerelement() {
$('.centerelement').each(function (){
    var top = ($('.fulldiv').height() / 2) - ($(this).height() / 2) ; 
$(this).css({'top' : top});
});


$('.splash img').each(function (){
    var top = (window.innerHeight / 2) - ($(this).height() / 2) ; 
$(this).css({'top' : top});
});
}

function centermenu() {
$('.centermenu').each(function (){
    var top = (window.innerHeight  / 2) - ($(this).height() / 2) ;
$(this).css({'top' : top});
});
}


function para() {
if ($(window).width() > 768) {

  var st = $(window).scrollTop();
  var wh = window.innerHeight ;



$('.centerelement').css({
  'left' : (st * .5) + 'px', 'max-height' : wh ,
  // 'background-position' : "center " + (st*.2) + 'px',
});


} else {

$('.splash').css({
  'top' : (st * 1) + 'px',
  
  
});

$('.tenda').css({
  'height' : (st * 1) + 'px', 'max-height' : wh ,
  // 'background-position' : "center " + (st*.2) + 'px',
});
}
}



    $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});






$('header').click(function() {
$('.menu').height(window.innerHeight);
$('.menu-activator').toggle();
$('.menu').slideToggle();
$('.centermenu').each(function (){
    var top = (window.innerHeight  / 2) - ($(this).height() / 2) ;
$(this).css({'top' : top});
});
});

$('.menu a').click(function(){
$('.menu').slideUp();
$('.menu-activator').toggle();
});



                               






















google.maps.event.addDomListener(window, 'load', init);

function init() {

var myLatlng = new google.maps.LatLng(46.0222435,8.9161459);



var myOptions = {
  disableDefaultUI: true,
      scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    zoom: 15,
    center: new google.maps.LatLng(46.0285435,8.9161459),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: 


[
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 0
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    }
]


};

var map = new google.maps.Map(document.getElementById('map'), myOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });




}






    

