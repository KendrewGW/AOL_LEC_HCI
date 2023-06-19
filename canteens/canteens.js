function AddCart()
{
    var Product;

    var Cart = JSON.parse(localStorage.getItem("Cart"))||[];

    Cart.push(Product);
    localStorage.setItem("Cart", JSON.stringify(Cart));

    alert("Item Has Been Added");
}

function ShowMenu(Hakuya)
{
    var Menu = document.getElementById(Hakuya)
    alert("Menu Of Hakuya");
    if(menu.style.display =="none")
    {
        menu.style.display = "block";
    }
    else{
        menu.style.display = "none";
    }
}


function ShowMenu(XiaoK)
{
    var Menu = document.getElementById(XiaoKee)
    alert("Menu Of Hakuya");
    if(menu.style.display =="none")
    {
        menu.style.display = "block";
    }
    else{
        menu.style.display = "none";
    }
}