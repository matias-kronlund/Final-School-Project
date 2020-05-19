let app = angular.module("shopApp", []);
app.filter('myFormat', function() {
    return function(items, scope){
        console.log(items)
        let retitems = [];
        for(let item of items){
            let item_langs = item.lang;
            if(item_langs.includes("java")){
                retitems.push(item);
            }
        }
        return retitems;
    }
});
app.controller('shopCtrl', function ($scope) {
    $scope.products = [{
            name: "Java Advanced",
            lang: ["java"],
            dif: "advanced",
            price: 100.99,
            img: "01"
        },
        {
            name: "Html Css",
            lang: ["html", "css"],
            dif: "advanced",
            price: 100.99,
            img: "03"
        },
    ]
    $scope.langs = [];
    $scope.difs = [];
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
        let langs = [],
            difs = [];
        for(let state of states){
            if(state.split("_")[0] == "lang"){
                langs.push(state.split("_")[1]);
            }else{
                difs.push(state.split("_")[1]);
            }
        }
        $scope.langs = langs;
        $scope.difs = difs;
    }
});