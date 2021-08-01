var square = document.querySelectorAll(".square");
var btnshowAll = document.querySelector("#showAll");
var btnhideAll = document.querySelector("#hideAll");
var filter = document.querySelector("#filter");

btnshowAll.addEventListener("click", function(){
    square.forEach(function(element){
        element.style.display = "block";     
    });
});

btnhideAll.addEventListener("click", function(){
    square.forEach(function(element){
        element.style.display = "none";     
    });
});

filter.addEventListener("keyup", function(){
var colorName = filter.value;
square.forEach(function(e){
    if(e.classList.contains(colorName)){
        e.style.display = "block";
    } 
    else{
        e.style.display = "none";
    }
});
});
square.forEach(function(element){
    element.addEventListener("mouseover", function(){
        element.style.width = "250px";
        element.style.height = "200px";
    });
        
    element.addEventListener("mouseout", function(){
        element.style.width = "230px";
        element.style.height = "180px";
    });
});

   