// setting the time for the loader to fade out
$(window).on("load", function(){

  $(".loader").fadeOut(500, function() {
    $(".loader").fadeOut(750)
  });

    //Isotope 
    $('.items').isotope({
      filter:'*',
      animationOptions:{
          duration:1500,
          easing:'linear',
          queue:false
      }
    })
})




$(document).ready(function() {

  //superslides 
  $(`#slides`).superslides({
    animation: "fade",
    play: 4000
  });
  // added  reference for typed library
  let typed = new Typed(".typed", {
    strings: ["Software Engineer.", "Web Developer.", "Creative."],
    typeSpeed: 60,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

  // added reference for owl carousel
  $(".owl-carousel").owlCarousel({
    nav: true,
    loop: true,
    items: 4,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      938: {
        item: 4
      }
    }
  });

  // set to display the chart piechart animation once it get to that section
  let skillsTopOffset = $(".skillsSection").offset().top;

  $(window).scroll(function() {
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      //added reference for easy-chart.js
      $(".chart").easyPieChart({
        easing: "easeInOut",
        barColor: "#fff",
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, currentValue) {
          $(this.el)
            .find(".percent")
            .text(Math.round(currentValue));
        }
      });
    }
  });
  
  //FancyBox plugin
  $("[data-fancybox]").fancybox()



  // filter with isotope
  $("#filters a").click(function(){

    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    let selector = $(this).attr("data-filter");

    $('.items').isotope({
      filter: selector,
      animationOptions:{
          duration:1500,
          easing:'linear',
          queue:false
      }
    })
      return false;
  })


// make navigation sticky once it gets past hero section
  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation)

  function stickyNavigation() {
    let body =$("body");
    if($(window).scrollTop() >= navTop){
      // fix the jumping once fixed nav is applied 
      body.css("padding-top", nav.outerHeight() + "px")
      body.addClass("fixedNav");
    }else{
      body.css("padding-top", 0)
      body.removeClass("fixedNav")
    }
  }


//Smooth scroll
$("#navigation li a").click(function(e){
    e.preventDefault();

    let targetElement = $(this).attr("href");
    let targetPosition = $(targetElement).offset().top;
    $("html, body").animate({scrollTop: targetPosition - 50}, "slow");
});

});
