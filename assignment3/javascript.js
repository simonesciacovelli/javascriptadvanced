
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


// cookie construct

function Cookie(document,name,hours,path,domain,secure) {
  // any VAR in "this" that does not start with a "$" will
  // be written into the cookie (read from also)
  this.$doc  = document
  this.$name = name
  if (hours)  this.$expiration=new Date((new Date()).getTime()+hours*3600000); else this.$expiration = null
  if (path)   this.$path   = path;                                             else this.$path       = null
  if (domain) this.$domain = domain;                                           else this.$domain     = null
  if (secure) this.$secure = true;                                             else this.$secure     = false
}

function CookieWrite() {
  var cookieval=""
  for(var prop in this) {
    if ((prop.charAt(0) == '$') || ((typeof this[prop]) == 'function') || prop == '') continue
  if (cookieval != "") cookieval += '&'
  cookieval+=prop+":"+escape(this[prop])
  }
  var cookie=this.$name+"="+cookieval
  if (this.$expiration) cookie+='; expires=' + this.$expiration.toGMTString()
  if (this.$path)       cookie+='; path='    + this.$path
  if (this.$domain)     cookie+='; domain='  + this.$domain
  if (this.$secure)     cookie+='; secure'
  this.$doc.cookie=cookie
}

function CookieRead() {
  var allcookies=this.$doc.cookie
  if (allcookies=="") {
    return false
  }
  var start= allcookies.indexOf(this.$name+'=')
  if (start== -1) {
    return false
  }
  start += this.$name.length+1
  var end=allcookies.indexOf(';',start)
  if (end == -1) end=allcookies.length
  var cookieval = allcookies.substring(start,end)
  var a = cookieval.split('&')
  for (var i=0;i<a.length;i++) a[i]=a[i].split(':')
  for (var i=0;i<a.length;i++) this[a[i][0]]=unescape(a[i][1])
  return true
}

// function CookieDelete() {
//   var cookie = this.$name+'='
//   if (this.$path)   cookie+='; path='+this.$path
//   if (this.$domain) cookie+='; domain='+this.$domain
//   cookie+='; expires=Fri, 02-Jan-1970 00:00:00 GMT'  // MAKE IT EXPIRE!
//   this.$doc.cookie=cookie
// }

new Cookie()
Cookie.prototype.write = CookieWrite
// Cookie.prototype.del   = CookieDelete
Cookie.prototype.read  = CookieRead

// end cookie construct

var myCookie = new Cookie(document,"myName",240)
if (!myCookie.read() || !myCookie.name) {
  myCookie.name=prompt("Hello, what is your name:","")
}
myCookie.write()
var _name = myCookie.name?myCookie.name:'Unknown User'
document.write('Your cookie told me your name was: '+_name)
function changeName() {
  myCookie.name=prompt("Enter New Name:","");
  if(myCookie.name==null) myCookie.name='Unknown User';
  myCookie.write();
}

myCookie.write()
var _name = myCookie.name?myCookie.name:'Unknown User'
document.write('Your cookie told me your name was: '+_name)
function back() {
  myCookie.name=prompt("Enter New Name:","");
  if(myCookie.name==null) myCookie.name='Unknown User';
  myCookie.name=prompt("Welcome Back" +_name);
}

