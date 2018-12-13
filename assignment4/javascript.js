var statement = "select * from feed where url='http://www.nytimes.com/services/xml/rss/nyt/Science.xml'";

	$.queryYQL(statement, "json", undefined, function (data) {

	    var craigs = data.query.results.item

	    console.log(craigs)

	    var images = [
		    '1.jpg', 
		    '2.jpg',
		    '3.jpg',
		    '4.jpg', 
		    '5.jpg',
		    '6.jpg',
		    '7.jpg',
		    '8.jpg',
		    '9.jpg',
		    '10.jpg',
		    '11.jpg',
		    '13.jpg',
		    '14.jpg',
		    '15.jpg',
		    '16.jpg',
		    '17.jpg',
		    '18.jpg',
		    '19.jpg',
		    '20.jpg',
		    '21.jpg',
		    '22.jpg',
		    '23.jpg',
		    '24.jpg',
		    '25.jpg',
		   ];

	    for (var i = 0; i < craigs.length; i++) {

	    	var className = "";
	    	if(i == 0){
	    		className = "half";
	    	}else if(i == 7){
	    		className = "small"
	    	}else if(i == 8){
	    		className = "small"
	    	}else if(i == 9){
	    		className = "small"
	    	}else if(i == 10){
	    		className = "small"
	    	}else if(i == 11){
	    		className = "small"
	    	}else if(i == 12){
	    		className = "small"
	    	}else if(i == 19){
	    		$("#row").append(`
	    			<div class="weather"></div>
	    			`)
	    	}else if(i == 25){
	    		$("#row").append(`
	    			<div class="ads"><h1 class="adtext">Buy Now!</h1></div>
	    			`)
	    	}else if(i == 31){
	    		className = "small"
	    	}else if(i == 32){
	    		className = "small"
	    	}else if(i == 33){
	    		className = "small"
	    	}else if(i == 34){
	    		className = "small"
	    	}else if(i == 35){
	    		className = "small"
	    	}else if(i == 36){
	    		className = "small"
	    	}else{
	    		className = "full"
	    	}

			$("#row").append(`
			<a>
			<div id="my" class="flex-item ${className}" style="background-image: url() ;">
			<h1 class="title" > ${craigs[i].title} </h1>
			<h1 class="creator"> ${craigs[i].creator} </h1>
				<div class="preview">
				<div class="bttn"><img class="closebtn" src="x.svg"></div>
					<p class="desc"> ${craigs[i].description[0]} </p>
				</div>
			</div>
			</a>

			`)
		}

		// var fontType = [ "Arial", "Verdana", "Helvetica"];
		// var num;
		// num=Math.floor(Math.random()*3);
		// document.getElementsByClassName(".title").style.fontFamily =fontType[num];


	$(".flex-item").each(function(){
   		$(this).css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});
    	});

	    var imagesad = [
		    'a1.png', 
		    'a2.png',
		    'a3.png',
		    'a4.png',
		    'a5.png',
		   ];

    var fonts = [ 
    "Arial", 
	"Verdana", 
    "Helvetica",
    "Arial Black",
    "Lucida Sans Unicode",
    "Tahoma",
    "Courier New",
    "Lucida Console",
    "Futura",
    "Didot",
    "Georgia",
    "Monaco",
    "Andale Mono"
    ];

	$(".flex-item").each(function(){
   		$(this).css({'font-family': fonts[Math.floor(Math.random() * fonts.length)]});
    	});
	

		$(".ads").each(function(){
   		$(this).css({'background-image': 'url(ads/' + imagesad[Math.floor(Math.random() * imagesad.length)] + ')'});
    	});


	$(".flex-item").click(function(){
		$(this).find(".preview").toggleClass("preview2");
		$(this).find(".bttn").toggleClass("bttn2");
	});

			    var wea = [
		    'deg1.png', 
		    'deg2.png',
		    'deg3.png',
		    'deg4.png',
		   ];

	$(".weather").each(function(){
   		$(this).css({'background-image': 'url(ads/' + wea[Math.floor(Math.random() * wea.length)] + ')'});
    	});

});

$(document).ready(function(){
  $(".menubttn").click(function(){
    $(".mobilemenu").toggle(100);
  });
  });