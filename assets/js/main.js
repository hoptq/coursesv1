/*jQuery*/
$(document).ready(function() {
  setTimeout(function() {
      $('.tutorial').fadeOut(4000);
  }, 1000);
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
        544: {
            items:2,
        },
        769:{
            items:3,
        },
        992:{
            items:3,
        },
        1170: {
            items: 4,
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

  $('.course_list_2').owlCarousel({
    lazyLoad:true,
    loop:true,
    nav: false,
    margin: 20,
    responsive:{
      0:{
          items:1,
          margin: 10
      },
      768: {
          items:1,
      },
      920: {
        items: 2,
      },
      992:{
          items:1,
      },
      1200:{
          items:2,
      },
      1600: {
        items: 3
      }
    }
  });

  $('.author_aside').owlCarousel({
      loop:true,
      margin: 20,
      items: 1,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true
    });


  $('.banner_list').owlCarousel({
    loop:true,
    margin:10,
    autoPlay:true,
    autoPlayTimeout:3000,
    autoPlayHoverPause:true,
    nav: true,
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
        1200:{
            items:4,
        },
        1400:{
            items:5,
        }
    }
  });

  var ads = $('.ads-mid-page');
  ads.owlCarousel({
    loop:true,
    autoPlay:true,
    autoPlayTimeout:3000,
    autoPlayHoverPause:true,
    nav: false,
    responsive:{
        0:{
            items:1,
            margin: 10
        },
        544:{
            items:2,
            margin: 10
        },
        768:{
            items:3,
            margin: 20
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

              // carousel.owlCarousel();
             
              // Custom Navigation Events
              nextBtn.click(function(e){
                carousel.trigger('next.owl', [300]);
              });
              prevBtn.click(function(){
                console.log(carousel);
                carousel.trigger('prev.owl', [300]);

              });

            });
        };
    };
});

/**
* @preserve HTML5 Shiv prev3.7.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
* for switch toggle
*/
!function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=s.elements;return"string"==typeof a?a.split(" "):a}function e(a){var b=r[a[p]];return b||(b={},q++,a[p]=q,r[q]=b),b}function f(a,c,d){if(c||(c=b),k)return c.createElement(a);d||(d=e(c));var f;return f=d.cache[a]?d.cache[a].cloneNode():o.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!f.canHaveChildren||n.test(a)||f.tagUrn?f:d.frag.appendChild(f)}function g(a,c){if(a||(a=b),k)return a.createDocumentFragment();c=c||e(a);for(var f=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)f.createElement(h[g]);return f}function h(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?f(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function i(a){a||(a=b);var d=e(a);return!s.shivCSS||j||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||h(a,d),a}var j,k,l="3.7.0",m=a.html5||{},n=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,o=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",q=0,r={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",j="hidden"in a,k=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){j=!0,k=!0}}();var s={elements:m.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:l,shivCSS:m.shivCSS!==!1,supportsUnknownElements:k,shivMethods:m.shivMethods!==!1,type:"default",shivDocument:i,createElement:f,createDocumentFragment:g};a.html5=s,i(b)}(this,document);
