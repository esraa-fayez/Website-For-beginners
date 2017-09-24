var myElement = document.getElementById("myImg");
var img = ["image/cou1.png","image/cou2.jpg","image/cour3.jpg","image/cour4.jpg","image/cou5.png"];
	randomNum = Math.floor(Math.random() * img.length);
function changeimg(myElement,img)
{
	"use strict";
	setInterval(function(){
/*var	randomNum = Math.floor(Math.random() * img.length);	*/
	myElement.src = img[randomNum];
				
	},3000);
}
changeimg(myElement,img);