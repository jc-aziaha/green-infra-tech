$(document).ready(function(){

  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('load scroll',function(){

    $('.fa-bars').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if($(window).scrollTop() > 30){
      $('header').addClass('header-active');
    }else{
      $('header').removeClass('header-active');
    }

    $('section').each(function(){
      var id = $(this).attr('id');
      var height = $(this).height();
      var offset = $(this).offset().top - 200;
      var top = $(window).scrollTop();
      if(top >= offset && top < offset + height){
        $('.navbar ul li a').removeClass('active');
        $('.navbar').find('[data-scroll="' + id + '"]').addClass('active');
      }
    });

  });


});

window.onload = function () {

    gsap.from("header", {
        scrollTrigger: "header",
        // x: -700,
        y: 300,
        duration: 1,
        autoAlpha: 0,
        ease: "back",
    });

    gsap.from("h1", {
        y: -100,
        duration: 2,
        ease: "back",
        scale: 2.1,
        autoAlpha: 0,
    });
}

gsap.registerPlugin(ScrollTrigger);

gsap.to("#about-us-section h2", {
    scrollTrigger: {
        trigger: "#about-us-section h2",
    },
    rotation: 360,
    duration: 4,
});

gsap.to("#about-us-section i", {
    rotation: 360,
    duration: 4,
});

gsap.to("#description-section h2", {
    scrollTrigger: {
        trigger: "#description-section h2",
        // start: "top center",
    },
    rotation: 360,
    duration: 4,
});

gsap.to("#future-section h2", {
    scrollTrigger: {
        trigger: "#future-section h2",
        // start: "top center",
    },
    rotation: 360,
    duration: 4,
});

gsap.to("#contact-section h2", {
    scrollTrigger: {
        trigger: "#contact-section h2",
        // start: "top center",
    },
    rotation: 360,
    duration: 4,
});

gsap.from("#desc_1", {
    scrollTrigger: "#desc_1",
    x: -700,
    duration: 2,
    autoAlpha: 0,
});
gsap.from("#desc_2", {
    scrollTrigger: "#desc_2",
    x: -700,
    duration: 2,
    autoAlpha: 0,
});
gsap.from("#desc_3", {
    scrollTrigger: "#desc_3",
    x: -700,
    duration: 2,
    autoAlpha: 0,
});