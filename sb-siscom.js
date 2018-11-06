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
        $('#factElectNav').addClass('none');
        
    } else {
        $('#siscomNav').removeClass('none');
        $('#factElectNav').removeClass('none');
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
                items:1,
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

    var siscomForm = $("form#siscomForm");
    var factElectForm = $("form#factElectForm");

    siscomForm.submit(function(event){
        event.preventDefault();
        var service_id = "default_service";
        var template_id = "template_haVJVAnj";

        siscomForm.find("button").text("Enviando...");
        emailjs.sendForm(service_id,template_id,siscomForm[0])
        .then(function(){ 
            siscomForm.find("button").text("Enviado");
        }, function(err) {
            // alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
            siscomForm.find("button").text("Error");
        });
        return false;
    });

    factElectForm.submit(function(event){
      event.preventDefault();
    
      var service_id = "default_service";
      var template_id = "template_haVJVAnj_clone_clone";
    
      factElectForm.find("button").text("Enviando...");
      emailjs.sendForm(service_id,template_id,factElectForm[0])
          .then(function(){ 
            factElectForm.find("button").text("Enviado");
        }, function(err) {
        //    alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
           factElectForm.find("button").text("Error");
        });
      return false;
    });

});
