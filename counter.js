function Increment(){
    var num = document.getElementById("box").value;
    num++;
    document.getElementById("box").value = num;
}

function Decrement(){
    var num = document.getElementById("box").value;
    num--;
    document.getElementById("box").value = num;
}

function Reset() {
    var num = document.getElementById("box").value;
    num = 0;
    document.getElementById("box").value = num;
}