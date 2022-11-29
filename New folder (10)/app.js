var displayinput = document.getElementById("display");
function takebuttonvalue(btnValue){
    displayinput.value += btnValue;
}
function calculate(){
    var a =displayinput.value
    var b =eval(a);
    displayinput.value =b;

}
function clearall() {
    displayinput.value = "";
     }
function delet (){
    var c = displayinput.value.slice(0,-1);
    displayinput.value = c
}
