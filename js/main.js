jQuery(Document) .ready(function(){
  "user strick"
  $('.slider').ripples({
      dropRadius: 5,
      perturbance: 0.01,
      
    });

    $(".text").typed({
      Strings: ["<strong> i love </strong> <strong class='primary'>coding.</strong>", "<strong>and to</strong> <strong class='primary'>share !!</strong>."],
      typespeed: 0,
      loop: true,

    });

});

$('.work').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
    enabled: true
  }
    });

    $(document).ready(function(){
      
      
      $('#team-members').owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items: 2
              },
              1000: {
                  items: 3
              }
          }
      });
  });
  

  
  $(document).ready(function () {
    $('#team-members').owlCarousel({
        items: 3, // Number of items visible
        loop: true, // Enable infinite looping
        autoplay: true, // Enable automatic scrolling
        autoplayTimeout: 3000, // Delay between scrolls
        nav: true, // Display navigation arrows
        dots: true, // Display pagination dots
        responsive: {
            0: { items: 1 }, // 1 item for small screens
            600: { items: 2 }, // 2 items for medium screens
            1000: { items: 3 } // 3 items for large screens
        }
    });
});

$(document).ready(function () {
  $('#team-members').owlCarousel({
      items: 3, // Number of team members visible at once
      loop: true, // Infinite scrolling
      autoplay: true, // Automatic scrolling
      autoplayTimeout: 3000, // Delay between scrolls
      nav: true, // Navigation arrows
      dots: true, // Pagination dots
      smartSpeed: 500,
      autoplayHoverPause: true,
      responsive: {
          0: { items: 1 }, // 1 item on small screens
          480: { items: 2 }, // 2 items on medium screens
          768: { items: 3 } // 3 items on large screens
      }
  });
});


