$(document).ready(function(){
	// function that toggles the class mobi when you click on the element with the class toggle
	// which is assigned to the class list and the <li> tag/element
	$(".toggle").click(function(){
		$(".list, li").toggleClass("mobi");
		$("li").toggleClass("mobi");
	});
	// Animates the header and content of each page using the id story 
	// which is a container for each page.
	$("#story").delay(500).animate({opacity: "1"}, 1000);
	$("#tab").delay(500).animate({opacity: "1"}, 1000);
	$("#merch").delay(500).animate({opacity: "1"}, 1000);
 });

// Defines variables being refrence by class name and id
var img = document.getElementsByClassName("navPic");
var para = document.getElementById("para");

//Loop which cycles through array of images with a end condition of the array length
//And on click of any image in the array changes the text of paragraph element with the id para
//It gets the text from each picture's alt attribute using the super function "this" which is a short way
//Of saying you want the function to retrieve data from the current object's alt attribute using the onclick method
for (var i = 0; i < img.length; i++){
	img[i].onclick = function(){
		$("#para").animate({opacity:"1"}, 1000);
		para.innerHTML = this.alt;
	};
}

//This is a function which changes the filter and sound with toggle capabilities
//Using the if else statement
function toggleMute(){
	 var vid = document.getElementById("vid");
	 var enter = document.getElementById("enter");
	 if(vid.muted == true){
	 	vid.muted = false;
	 	vid.style.webkitFilter = "blur(0px)";
	 	enter.style.display = "none";
	 }
	 else{
	 	vid.muted = true;
	 	vid.style.webkitFilter = "blur(10px)";
	 	enter.style.display = "initial";
	 }
}