let box = document.querySelector(".box");
let container = document.querySelector(".container");
let btnSwitch = document.querySelector("#btnSwitch");
let moveTop = 0;
let moveSide = 0;
document.addEventListener("keypress", event =>{
    console.log(event);
    if(event.key === "s"){
        moveTop += 50;
        box.style.marginTop = `${moveTop}px`;
    }
    else if(event.key === "w"){
        moveTop -= 50;
        box.style.marginTop = `${moveTop}px`;
    }
    else if(event.key === "d"){
        moveSide += 50;
        box.style.marginLeft = `${moveSide}px`;
    }
    else if(event.key === "a"){
        moveSide -= 50;
        box.style.marginLeft = `${moveSide}px`;
    }
    
});
btnSwitch.addEventListener("click", event=>{
console.log(event);

    if(container.style.backgroundColor === "black"){
        container.style.backgroundColor = "white";
        box.style.backgroundColor = "black";
    }
    else{
        container.style.backgroundColor = "black";
        box.style.backgroundColor = "white";
    }
    
});