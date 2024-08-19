let i = 1;
let s =2;
document.getElementById("next").addEventListener("click", function(){
    document.getElementById(`rule${i}`).classList.add("active");
    if (i<4){
        i++;
    }
    document.getElementById(`step${s}`).classList.add("sactive");
    if (s<5){
        s++;
    }
});
document.getElementById("back").addEventListener("click", function(){
    document.getElementById(`rule${i-1}`).classList.remove("active");
    if (i>1){
        i--;
    }
    document.getElementById(`step${s-1}`).classList.remove("sactive")
    if (s>2){
        s--;
    }
});