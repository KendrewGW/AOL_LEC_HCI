var cartItemsElement = document.getElementById("cart-items");
var itemInputElement = document.getElementById("item-input");

var cartItems = [];

function addItem() {
    var newItem = itemInputElement.value;
    if (newItem !== "") {
      cartItems.push(newItem);
      itemInputElement.value = "";
      renderCart();
    }
}
  function renderCart()
  {
    while(cartItemsElement.firstChild){
        cartItemsElement.firstChild.remove();
    }
    cartItems.forEach(function(item) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(item));
        cartItemsElement.appendChild(li);
      });
  }

