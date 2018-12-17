
$( ".page" ).mousemove(function( event ) {
  var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
  var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
  $( "span:first" ).text( "( event.pageX, event.pageY ) : " + pageCoords );
  $( "span:last" ).text( "Cursor Coordinates : " + clientCoords );
});

$( ".page" ).mousemove(function( event ) {
var p = $( ".mydiv" );
var position = p.position();
$( ".pos1" ).text( "Left: " + position.left + ", Top: " + position.top );
});

$( ".page" ).mousemove(function( event ) {
var p = $( ".mydiv2" );
var position = p.position();
$( ".pos2" ).text( "Left: " + position.left + ", Top: " + position.top );
});

$( ".page" ).mousemove(function( event ) {
var p = $( ".mydiv3" );
var position = p.position();
$( ".pos3" ).text( "Left: " + position.left + ", Top: " + position.top );
});

$( ".page" ).mousemove(function( event ) {
var p = $( ".mydiv4" );
var position = p.position();
$( ".pos4" ).text( "Left: " + position.left + ", Top: " + position.top );
});

$( ".page" ).mousemove(function( event ) {
var p = $( ".mydiv5" );
var position = p.position();
$( ".pos5" ).text( "Left: " + position.left + ", Top: " + position.top );
});

$( function() {
$( "#mydiv" ).draggable();});
$("#mydiv").draggable({ containment: ".frame" });

$( function() {
$( "#mydiv2" ).draggable();});
$("#mydiv2").draggable({ containment: ".frame" });

$( function() {
$( "#mydiv3" ).draggable();});
$("#mydiv3").draggable({ containment: ".frame" });

$( function() {
$( "#mydiv4" ).draggable();});
$("#mydiv4").draggable({ containment: ".frame" });

$( function() {
$( "#mydiv5" ).draggable();});
$("#mydiv5").draggable({ containment: ".frame" });

$( function() {
$( "#mydiv6" ).draggable();});
$("#mydiv6").draggable({ containment: ".frame" });



$('.circle1').on('click', function(e) {
  $(".page").toggleClass("page2");
  $(".frame").toggleClass("frame2");
  $(".circle1").toggleClass("circleblack");
  $(".circle2").toggleClass("circleblack");
  $(".circle3").toggleClass("circleblack");
  $(".arrow").toggleClass("arrowhide");
  $(".arrow2").toggleClass("arrowshow");
  e.preventDefault();
});

$('.circle2').on('click', function(e) {
  $(".mydiv").toggleClass("mydivalt");
  e.preventDefault();
});

$('.frame').draggable({
    axis: "y"
});

$( function() {
$( ".frame" ).draggable();});
$(".frame").draggable({ containment: ".page" });
