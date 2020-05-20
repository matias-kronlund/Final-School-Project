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
    $scope.products = [{
            name: "Java",
            lang: ["java"],
            dif: "a",
            price: 100.99,
            img: "01"
        },
        {
            name: "Python",
            lang: ["python"],
            dif: "i",
            price: 100.99,
            img: "02"
        },
        {
            name: "Html",
            lang: ["html"],
            dif: "b",
            price: 100.99,
            img: "03"
        },
        {
            name: "Nodejs",
            lang: ["javascript"],
            dif: "a",
            price: 100.99,
            img: "04"
        },
        {
            name: "PyGames",
            lang: ["python"],
            dif: "i",
            price: 100.99,
            img: "05"
        },
        {
            name: "Angularjs",
            lang: ["javascript"],
            dif: "b",
            price: 100.99,
            img: "06"
        },
        {
            name: "Electron",
            lang: ["javascript"],
            dif: "a",
            price: 100.99,
            img: "07"
        },
        {
            name: "Angular",
            lang: ["html", "css", "javascript"],
            dif: "i",
            price: 100.99,
            img: "08"
        },
        {
            name: "Css",
            lang: ["css"],
            dif: "b",
            price: 100.99,
            img: "09"
        },
        {
            name: "React",
            lang: ["html", "css", "javascript"],
            dif: "a",
            price: 100.99,
            img: "10"
        },
    ]
    shop =  $scope.products;
    $scope.data = [];
    
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