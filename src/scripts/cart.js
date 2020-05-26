let cookie = document.cookie;
let cart = [];
if(cookie == ""){
    console.log("empty")
}else{
    console.log(cookie)
}
function emptyCart(){
    document.cookie = "cart=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}
function addToCart(prod){
    cart.push("asd");
    document.cookie = "cart="+ cart;
    console.log(document.cookie)
}
function getCartAmount(){
    let currentcookie = document.cookie;
    
}
emptyCart()
