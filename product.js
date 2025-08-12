var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav =document.getElementById("closenav")


menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})


var productContainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productlist = productContainer.querySelector("div")
