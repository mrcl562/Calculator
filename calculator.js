let display = document.querySelector("#display");
let buttons = Array.from(document.getElementsByClassName("button"));


buttons.map(button => {
    button.addEventListener("click" , (ev) =>{
        switch(ev.target.innerText){
            case "C":
                clear();
                break;
            case "del":
                backSpace();
                break;
            case "=":
                equal();
                break;
            default:
                display.innerText += ev.target.innerText;
        }    
    })
})

document.addEventListener('keyup', (event) => {
    if(event.key == "Enter"){
        equal();
    }
    if(event.key == "Delete"){
        clear();
    }
    if(event.key === "1"|| event.key === "2"|| event.key === "3"|| event.key === "4"|| event.key === "5"|| event.key === "6"|| event.key === "7"|| event.key === "8"|| event.key === "9"|| event.key === "+"|| event.key === "-"|| event.key === "/"|| event.key === "*"|| event.key === "("|| event.key === ")"){
        display.innerText += event.key;
    }
  }, false);
  document.addEventListener("keydown", (event) => {
    if(event.key == "Backspace"){
        backSpace();
    }
  })

function equal(){
    try{
        display.innerText = eval(display.innerText);
    }
    catch{
        display.innerText = "WTF!!"}
}
function clear(){
    display.innerText = "";
}
function backSpace(){
    display.innerText = display.innerText.slice(0,-1);
}