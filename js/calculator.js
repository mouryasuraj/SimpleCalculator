

function del() {
    let val = document.getElementById("screen").value;
    document.getElementById("screen").value = val.substr(0, val.length - 1);
    
}


// Theme Changes
let one = document.getElementById("one");
one.onclick = function(){
    document.body.classList.toggle("theme1");
    document.body.classList.remove("theme2");
    document.body.classList.remove("theme3");
    document.getElementById("suraj").style.marginLeft ='0px';

}
let two = document.getElementById("two");
two.onclick = function(){
    document.body.classList.toggle("theme2");
    document.body.classList.remove("theme3");
    document.body.classList.remove("theme1");
    document.getElementById("suraj").style.marginLeft ='18px';

}
let three = document.getElementById("three");
three.onclick = function(){
    document.body.classList.toggle("theme3");
    document.body.classList.remove("theme2");
    document.body.classList.remove("theme1");
    document.getElementById("suraj").style.marginLeft ='36px';
}


