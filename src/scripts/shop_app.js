let app = angular.module("shopApp", []);
let shop = [];
app.filter('myFormat', function() {
    return function(tags){
        if(tags.length == 0){
            return shop;
        }
        let difs = [],
            langs = [],
            display = [];
        for(let tag of tags){
            if(tag.split("_")[0] == "lang"){
                langs.push(tag.split("_")[1])
            }else{
                difs.push(tag.split("_")[1])
            }
        }
        if(langs.length > 0){
            for(let item of shop){
                for(let i_lang of item.lang){
                    if(langs.includes(i_lang)){
                        display.push(item);
                        break;
                    }
                }
            }
            if(difs.length > 0){
                let display2 = []
                for(let item of display){
                    for(let i_dif of item.dif){
                        if(difs.includes(i_dif)){
                            display2.push(item);
                            break;
                        }
                    }
                }
                return display2
            }else{
                return display
            }
        }else{
            for(let item of shop){
                for(let i_dif of item.dif){
                    if(difs.includes(i_dif)){
                        display.push(item);
                        break;
                    }
                }
            }
            return display
        }
    }
});
app.controller('shopCtrl', function ($scope) {
    $scope.products = products;
    shop =  $scope.products;
    $scope.data = [];
    $scope.testing = (no)=>{
        document.location.href = "product.html?p="+no;
    }
    $scope.apply = function () {
        let states = []
        let uls = document.getElementsByClassName("options");
        for (let ul of uls) {
            for (let li of ul.children) {
                let check_id = li.getElementsByTagName("input")[0];
                if(check_id.checked == true){
                    states.push(check_id.id);
                }
            }
        }
        
        $scope.data = states;
    }
});