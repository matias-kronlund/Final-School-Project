let uls = document.getElementsByClassName("options");
for(let ul of uls){
    for(let li of ul.children){
        let check_id = li.getElementsByTagName("input")[0];
        let the_pargraph = li.getElementsByTagName("p")[0];
        the_pargraph.onclick = function(){
            if(check_id.checked == true){
                check_id.checked = false;
            }else{
                check_id.checked = true;
            }
        }
    }
}