/**
 * Created by valentyn on 6/17/17.
 */

$('.navbar-nav a').on('click', function (e) {
   var self = $(this);

   if(self.attr('href')[0] === '#') {
        e.preventDefault();

       $('html, body').animate({
           scrollTop: $( self.attr('href') ).offset().top
       }, 500);
   }
});