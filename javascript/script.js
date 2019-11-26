$(document).ready(function() {
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
});
