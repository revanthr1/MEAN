
//forward
var fwdcount= 0;

document.getElementById('reflect').addEventListener('click', function(){
    
    float = setInterval(function(){
        document.querySelector("#box2").value += document.querySelector("#box1").value.charAt(0);
        document.querySelector("#box1").value = document.querySelector("#box1").value.substr(1);
        if(document.querySelector("#box1").value == 0){
            clearInterval(float);
        }
    }
    ,1000) 
});


//backward

document.getElementById('revert').addEventListener('click', function(){

clearInterval(float);
    float = setInterval(function(){
        document.querySelector("#box1").value = document.querySelector("#box2").value.charAt(document.querySelector("#box2").value.length-1)+document.querySelector("#box1").value;
        document.querySelector("#box2").value = document.querySelector("#box2").value.substr(0,document.querySelector("#box2").value.length-1);
        if(document.querySelector("#box2")==0){
            clearInterval(float);
        }
    },1000)
});


//pause

document.getElementById('pause').addEventListener('click', function(){
    
    clearInterval(float);
});