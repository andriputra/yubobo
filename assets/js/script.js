// $(document).ready(function(){
//   var navHeight = $('#myHeader').offset().top;
//   $(window).scroll(function(){
//     if ($(window).scrollTop() > navHeight) {
//       $("#myHeader").addClass("fixed");
//       $("#myHeader").slideDown('200');
//     }
//     else {
//       $("#myHeader").removeClass("fixed");
//     }


//    $( "#slider-range" ).slider({
//       range: true,
//       min: 0,
//       max: 500,
//       values: [ 75, 300 ],
//       slide: function( event, ui ) {
//         $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
//       }
//     });
//     $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
//       " - $" + $( "#slider-range" ).slider( "values", 1 ) );
// 	});
// });