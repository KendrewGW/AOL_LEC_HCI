let count = 1;

document.getElementById("place-order").onclick = function(){
    count+=1
    document.getElementById("num").innerHTML = count;
}

// const counter = document.getElementById("num");
// const place-order = document.getElementById("place-order");

// place-order.onclick = function(){
//     const counter = counter.value;
// }

// if(counter){
//     localStorage.setItem(counter);
//     location.reload();
// }