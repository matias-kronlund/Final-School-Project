let cookie = document.cookie;
let empty;
let cart = [];
let cartitems = [];
if(cookie == "" || !cookie.includes("cart")){
    empty = true;
}else{
    empty = false;
    let cartnos = cookie.split("cart=")[1].split(";")[0].split(",");
    for(let no of cartnos){
        if(!cartitems.includes(no)){
            cartitems.push(no);
        }
    }
    console.log(cartitems);
    for(let prod of products){
        if(cartitems.includes(prod.img)){
            prod.amount = 0;
            cart.push(prod);
        }
    }
    for(let no of cartnos){
        for(let cartProd of cart){
            if(no == cartProd.img){
                cartProd.amount++;
            }
        }
    }
    console.log(cart);
    
}
function getDif(prod){
    if(prod.dif == "a"){
        return "Advanced";
    }else if(prod.dif == "i"){
        return "Intermediate";
    }else if(prod.dif == "b"){
        return "Beginner"
    }
}
function updateCookie(c){
    let arr = [];
    for(let item of c){
        for(let i = 0; i < item.amount; i++){
            arr.push(item.img);
        }
    }
    if(arr.length == 0){
        emptyCart()
    }else{
        var d = new Date();
        d.setTime(d.getTime() + (1 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = "cart=" + arr + ";" + expires + ";";
    }
}
function emptyCart() {
    document.cookie = "cart=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}

let app = angular.module("cartApp", []);
app.filter('myFormat', function() {
    return function(cprod){
        console.log(cprod);
        return getDif(cprod) + " " + cprod.name + " Course"
    }
})
app.controller('cartCtrl', function ($scope) {
    $scope.upAmount = (prod) => {
        console.log(prod);
        for(let item of $scope.cart){
            if(item.img == prod.img){
                item.amount ++;
            }
        }
        updateCookie($scope.cart);
        $scope.countTotal();
    }
    $scope.downAmount = (prod) => {
        console.log(prod);
        for(let item of $scope.cart){
            if(item.img == prod.img){
                item.amount --;
                if(item.amount == 0){
                    let i = 0;
                    for(let item2 of $scope.cart){
                        if(item2.img == prod.img){
                            $scope.cart.splice(i, 1);
                            break;
                        }
                        i++;
                    }
                }
            }
        }
        updateCookie($scope.cart);
        $scope.countTotal();
    }
    $scope.cart = cart;
    $scope.totalPrice = 0;
    for(let item of $scope.cart){
        $scope.totalPrice += item.amount * item.price;
    }
    $scope.countTotal = () => {
        $scope.totalPrice = 0;
        for(let item of $scope.cart){
            $scope.totalPrice += item.amount * item.price;
        }
    }
});