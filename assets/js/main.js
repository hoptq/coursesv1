/*jQuery*/
$(document).ready(function() {

  var owl = $('.course_list');

  owl.owlCarousel({
    lazyLoad:true,
    loop:true,
    nav: false,
    margin: 10,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        992:{
            items:3,
        },
        1366:{
            items:5,
        },
        1600: {
          items: 6,
        },
        1920: {
          items: 7,
        }
    }
  });

  $('.banner_list').owlCarousel({
    loop:true,
    margin:10,
    autoPlay:true,
    autoPlayTimeout:3000,
    autoPlayHoverPause:true,
    nav: false,
    responsive:{
        0:{
            items:1,
        },
        544:{
            items:2,
        },
        768:{
            items:3,
        },
        992:{
            items:4,
        },
        1400:{
            items:5,
        }
    }
  });

  var owlWrap = $('.owl-wrapper');
    // checking if the dom element exists
    if (owlWrap.length > 0) {
        // check if plugin is loaded
        if (jQuery().owlCarousel) {
            owlWrap.each(function(){
                var carousel= $(this).find('.owl-carousel'),
                    navigation = $(this).find('.customNavigation'),
                    nextBtn = navigation.find('.next'),
                    prevBtn = navigation.find('.prev');

              carousel.owlCarousel();
             
              // Custom Navigation Events
              nextBtn.click(function(e){
                carousel.trigger('next.owl.carousel');
              });
              prevBtn.click(function(){
                carousel.trigger('prev.owl.carousel');
              });

            });
        };
    };
});
