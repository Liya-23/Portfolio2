
$(document).ready(function() {
    $('nav a').click(function(event) {
      event.preventDefault(); // Prevent default link behavior

      var target = $(this).attr('href'); // Get the target section ID

    $('html, body').animate({
        scrollTop: $(target).offset().top // Scroll to the target section
      }, 100); // Animation duration in milliseconds
    });
});

