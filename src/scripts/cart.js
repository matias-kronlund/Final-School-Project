let cookie = document.cookie;
let cart = [];
if (cookie == "" || !cookie.includes("cart")) {
    console.log("empty")
} else {
    console.log(cookie)
    let currentcookie = document.cookie;
    let cart_cookie = currentcookie.split("cart=")[1].split(";")[0];
    cart = cart_cookie.split(",");
}

function addToCart(prod) {
    cart.push(prod);
    var d = new Date();
    d.setTime(d.getTime() + (1 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = "cart=" + cart + ";" + expires + ";";
    console.log(document.cookie)
    getCartAmount();
}
function getCartAmount() {
    let currentcookie = document.cookie;
    if(currentcookie != ""){
        let cart_cookie = currentcookie.split("cart=")[1].split(";")[0];
        document.getElementById("cart-amount").innerHTML = cart_cookie.split(",").length;
        document.getElementById("cart-amount").classList.remove("cart-empty");
    }else{
        document.getElementById("cart-amount").classList.toggle("cart-empty");
    }
}
getCartAmount()