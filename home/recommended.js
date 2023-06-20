var foodList = [];
// check if localstorage that stores musiclist exist?
// if it does not exists then give default value
foodList = JSON.parse(localStorage.getItem("foodList"));
if (foodList == null) {
    foodList = [
        {title:"Bakmie Lebar", image:"/./asset/Bakmie Effata/Bakmi lebar ayam biasa polos.jpg", harga: "31.000"},
        {title:"Bakmie keriting", image:"/./asset/Bakmie Effata/Bakmi keriting ayam + bakso.jpg", harga: "31.000"},
        {title:"Shrimp Roll", image:"/./asset/SS Kitchen/Shrimp Roll.jpg", harga: "25.000"},
        {title:"Beef Teriyaki", image:"/./asset/SS Kitchen/Beef Teriyaki.jpg", harga: "25.000"},
        {title:"Chicken Curry", image:"/./asset/SS Kitchen/Chicken Curry.jpg", harga: "25.000"},
        {title:"Chicken Ramen", image:"/./asset/SS Kitchen/Chicken Ramen.jpg", harga: "28.000"},
        {title:"Chicken Teriyaki", image:"/./asset/SS Kitchen/Chicken Teriyaki.jpg", harga: "30.000"},
        {title:"Ebi Tempura", image:"/./asset/SS Kitchen/Ebi Tempura.jpg", harga: "25.000"},
    ];
}

var foodListElement = document.getElementById('recommended');
var copyfoodList = foodList.slice();
for(var i = 0; i < 4; i++) {
    var rand = Math.floor(Math.random() * copyfoodList.length);
    var food = copyfoodList.splice(rand, 1)[0]; // biar ga nulis [] berkali2
    console.log(food);
    foodListElement.innerHTML += `<a href="/./cart/cart.html">
    <div class="recommended-card">
        <div class="name">
            <p>${food.title}</p>
        </div>
        <div class="image">
            <img src="${food.image}" alt="food">
        </div>
        <div class="price">
            <p>${food.harga}</p>
        </div>
    </div>
</a>`;
}