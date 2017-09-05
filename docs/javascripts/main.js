$(function() {

  // Toggle mobile menu collapse on click

  $('[data-toggle="mobile-menu"]')
    .click(function(e) {
      $('.hamburger').toggle();
      $('.close').toggleClass('show');
      $('.mobile-menu').slideToggle(300);
    })

  // Toggle sub-menu collapse on click

  $('[data-toggle="collapse"]')
    .click(function(e) {
      $(this.parentNode).toggleClass('active')
      var target = this.hash;
      $(target).slideToggle(300);
      e.preventDefault();
    });
});
