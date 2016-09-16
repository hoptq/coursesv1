/*jQuery*/
$(document).ready(function() {

  $('.banner_list').owlCarousel({
    lazyLoad:true,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
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
  $('.course_list').owlCarousel({
    lazyLoad:true,
    loop:true,
    nav: false,
    responsive:{
        0:{
            items:1,
            margin:10,
        },
        544:{
            items:2,
            margin:10
        },
        768:{
            items:3,
            margin: 10
        },
        992:{
            items:4,
            margin: 10
        },
        1366:{
            items:5,
            margin: 10
        },
        1600: {
          items: 6,
          margin: 10
        },
        1920: {
          items: 7,
          margin: 10
        }
    }
  });
  var owlWrap = $('.owl-wrapper');
  if (owlWrap.length > 0) {
    if (jQuery().owlCarousel) {
      owlWrap.each(function(){
          var carousel= $(this).find('.owl-carousel'),
              navigation = $(this).find('.customNavigation'),
              nextBtn = navigation.find('.next'),
              prevBtn = navigation.find('.prev');
       
        nextBtn.click(function(){
          console.log('click next');
          carousel.trigger('next.owl');
        });
        prevBtn.click(function(){
          console.log('click prev');
          carousel.trigger('prev.owl');
        });

      });
    };
  };
});
