// alert("Error")
// console.log("Hello");
// console.log(document.getElementsByTagName("h2"));

// another way to work with html
// var h2=document.getElementsByTagName("h2")
// console.log(h2);

// var title=document.getElementById("title").style.color="green"
// console.log(title);

// var child=document.getElementsByClassName("child")
// console.log(child);


//get attribute
var img=document.getElementById("img")
console.log(img.getAttribute("src"));

// set attribute
img.setAttribute("alt","picture")

// see inner text
var hero=document.getElementById("hero")
console.log(hero.innerText); 

// used innerhtml for div
var parent=document.getElementById("parent").innerHTML
console.log(parent);