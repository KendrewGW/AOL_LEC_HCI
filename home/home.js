var count = 0;
var inc = 0;
var margin = 0;
var slider = document.getElementsByClassName("slider-width")[0];
var itemDisplay = 0;
if(screen.width > 990){
    itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-d");
    margin = itemDisplay * 20.5
};

var item = document.getElementsByClassName("canteen-cards");
var itemleft = item.length % itemDisplay;
var itemSlide = Math.floor(item.length / itemDisplay) - 1;
for(let i=0; i<item.length; i++){
    item[i].style.width = (screen.width / itemDisplay) - margin + "px";
}

function next(){
    if(inc !== itemSlide + itemleft){
        if(inc === itemSlide){
            inc = inc + itemleft;
            count = count - (screen.width / itemDisplay) * itemleft;
        }
        else{
            inc ++;
            count = count - screen.width;
        }
    }
    slider.style.left = count + "px";
}

function prev(){
    if(inc !== 0){
        if(inc === itemleft){
            inc = inc - itemleft;
            count = count + (screen.width / itemDisplay) * itemleft;
        }
        else{
            inc --;
            count = count + screen.width;
        }
    }
    slider.style.left = count + "px";
}