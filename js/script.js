


   $(document).ready(function() { 

    
   
    para();
    
    


    });

   $(window).resize(function() { 
   
    para();
    


    });



   $(window).scroll(function(){
    para();
   
    
    



    });






function para() {
if ($(window).width() > 768) {

  var st = $(window).scrollTop();
  var wh = window.innerHeight ;



$('.centerelement').css({
  'margin-left' : (st * .5) + 'px', 'max-height' : wh ,
  // 'background-position' : "center " + (st*.2) + 'px',
});


} else {




}
}



   $('#counter-block').ready(function(){
        $('.uno').animationCounter({
          start: 0,
          end: 100,
          step: 1,
          delay:100
        });
        $('.due').animationCounter({
          start: 500,
          step: 100,
          end: 10000,
          delay:2000,
          txt: ' km'
        });
        $('.tre').animationCounter({
          start: 0,
          end: 570,
          step: 4,
          delay: 1000,
          txt: ' soldi'
        });
        $('.quattro').animationCounter({
          start: 490,
          end: 1560,
          step: 20,
          delay: 900,
          txt: ' pippi'
        });
    });




    

