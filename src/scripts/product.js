let urlstring = window.location.href;
let url = new URL(urlstring);
let product_no = url.searchParams.get("p");
console.log(getProduct(product_no, products))
function getProduct(no, prods){
    let cor;
    for(let prod of prods){
        if(prod.img == no){
            cor = prod;
        }
    }
    return cor;
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
let product = getProduct(product_no, products);
document.getElementById("prod-img").src = "../src/images/products/curses-"+product_no+".jpg";
document.getElementById("title").innerHTML = `${getDif(product)} ${product.name} Course` 