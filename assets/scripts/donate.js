const btn1= document.getElementsByClassName("btn1")[0];
const btn2= document.getElementsByClassName("btn2")[0];
const once= document.getElementsByClassName("once")[0];

btn1.addEventListener("click", function donate(){
once.style.display= "block";
});

btn2.addEventListener("click", function donate(){
    once.style.display= "block";
    });