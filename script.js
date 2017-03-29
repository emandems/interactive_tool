//alert ('Hello')

var tweetList=[
	"@CNN just doesn't get it, and that's why their ratings are so low- and getting worse. Boring anit-Trump panelists, mostly losers in life!",
	"Will be joining @jimmyfallon on @FallonTonight at 11:35pmE tonight. Enjoy!",
	"hello",
	"I am Trump",
]

var tweet= 0;


function pickTweet(myArray) {
	var myTweet = myArray [Math.floor(Math.random()*myArray.length)];
	return myTweet;
};


function Tweet() {

	//var theTweet= document.getElementsByTagName('tweet')[tweet];

	words = pickTweet(tweetList);

	$('div#content').html(words);

	$('.tweet').hide();
	$('.tweet').show (300);
};

$('.button1').click(Tweet);

$('.tweet').hide();


$(document).ready(function(){
	$(".companies").on({
		click:function(){
			$("#p1").hide(200);
			$(".emotions").fadeIn(400);
		},
	});
});

$(document).ready(function(){
	$(".emotions").on({
		click: function(){
			$("#pe").hide(200);
		},
	});
});



	$(".button2").on({

		mouseenter: function(){
			$(this).css("background-color" , "e60000")
		},

		click: function(){
			$(this).css("background-color" , "e60000");
			
		},
		blur: function(){
			$(this).css("background-color", "#b62f2f");
		},

		mouseleave: function(){
			$(this).css("background-color" , "b62f2f");
		},
	});

	$(".button3").on({
		click: function(){
			$(this).css("background-color" , "cccccc");
	
		},
		blur: function(){
			$(this).css("background-color", "black");
		},
	});
	



var yay =[
	"I hate CNN",
	"I despise CNN",
	"CNN is the worst",
	"I'm so much better than CNN",
]

function happy (){

	happyTweet= pickTweet(yay);

	$('div#content').html(happyTweet);
	$('.tweet').hide();
	$('.tweet').show (300);
};

$('.happy').click(happy);

$('.tweet').hide();



