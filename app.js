$(document).ready(function(){ 
  $("a").on('click', function(event) { // event on click ( a (link) tag )
    if (this.hash !== "") {
      event.preventDefault(); // Prevent default anchor click behavior 
      var hash = this.hash;      // Store hash code
     
      $('html, body').animate({ // Using animate() to add animated page scroll
        scrollTop: $(hash).offset().top
      }, 900, function(){  // 900 millisec to scroll down
   
        window.location.hash = hash;  // Add hash (#) to URL when done scrolling 
      });
    } 
  });
});