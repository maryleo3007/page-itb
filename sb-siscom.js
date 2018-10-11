const slideElements = ['.back__slide', '.card__slide', '.content__slide'];
let inProgress = false;

const goToSlide = (slideElements, index) => {
  if (!inProgress){
    inProgress = true;
    
    $('.active').addClass('exit');
    $('.active').removeClass('active');
    slideElements.forEach( elem => {
      $(`${elem}:nth-child(${index})`).addClass('active');
    })
    
    const evenSlide = index % 2 === 0;
    if (evenSlide)
      $('.content__ping').addClass('content__ping--right');
    else
      $('.content__ping').removeClass('content__ping--right');
    $('.content__ping--noanimation').removeClass('content__ping--noanimation');
    
    setTimeout(() => $('.exit').removeClass('exit'), 1000);
    setTimeout(() => inProgress = false, 2000);
  }
}

$('.content__slide:nth-child(1) .button').on('click', () => goToSlide(slideElements, 2) );
$('.content__slide:nth-child(2) .button').on('click', () => goToSlide(slideElements, 1) );

setTimeout( () => goToSlide(slideElements, 2), 2000 );
setTimeout( () => goToSlide(slideElements, 1), 6000 );


AOS.init();


AOS.init({
  
  disable: false, 
  startEvent: 'DOMContentLoaded', 
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,

  
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

$(window).scroll(function() {
    var $height = $(window).scrollTop();
    
    if($height > 100) {
        $('#siscomNav').addClass('none');
        
    } else {
        $('#siscomNav').removeClass('none');
        $('.service-cls').addClass('active');
    }
});

$('#btn-funcionalidades').on('click', function (e) {
    e.preventDefault();
    $('#btn-como-funciona').removeClass('activo');
    $(this).addClass('activo');
    $('#content-como-funciona').addClass('none');
    
    $('#content-funcionalidades').removeClass('none');
});

$('#btn-como-funciona').on('click', function (e) {
    e.preventDefault();
    $('#btn-funcionalidades').removeClass('activo');
    $(this).addClass('activo');
    $('#content-como-funciona').removeClass('none');
    $('#content-funcionalidades').addClass('none');


    $('.owl-carousel').owlCarousel({
        loop:true,
        // margin:10,
        responsiveClass:true,
        autoplay: true,
        dots: true,
        nav:true,
        animateIn: true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:1,
                nav:false,
                loop:true
            }
        }
    });

});




$(document).ready(function () {
    
    $('#btn-funcionalidades').addClass('active');
    // $('#fullpage').fullpage({
    //     sectionColor: ['#cccccc','#fffffff','#cccccc','#fffffff','#cccccc','#fffffff'],
    //     easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
    //     // loopTop: true,
    //     // loopBottom: true,
    //     // navigation: true,
    //     // navigationPosition: true,
    //     // navigationTooltips: ['Section 1', 'Section 2','Section 3','Section 4','Section 5','Section 6'],
    //     // afterLoad: function (anchor, index, direction) {
            
    //     // },
    //     // afterLoad: function (index, netIndex, direction) {
            
    //     // }

    // });  

    $(".main").onepage_scroll({
        sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
        easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                         // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
        animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
        pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
        updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
        // beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
        // afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
        loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
        keyboard: true,                  // You can activate the keyboard controls
        responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                         // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                         // the browser's width is less than 600, the fallback will kick in.
        direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
     });
});
