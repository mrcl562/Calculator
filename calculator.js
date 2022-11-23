const display = document.querySelector("#display");
const buttons = Array.from(document.querySelectorAll(".button"));
const error_msg = "ERROR"
const characters = {
    "1": "1", "2": "2", "3": "3", "4": "4",
    "5": "5", "6": "6", "7": "7", "8": "8",
    "9": "9", "0": "0", "(": "(", ")": ")",
    "/": "/", "*": "*", "-": "-", "+": "+"
};

//button displaying
buttons.map(button => {
    button.addEventListener("click" , (ev) =>{
        display.innerText == error_msg || ev.target.innerText == "C"
            ? clear() : ev.target.innerText == "del"
                ? backSpace() : ev.target.innerText == "="
                    ? equal() : display.innerText += ev.target.innerText;        
    })
})

//keyboard displaying
document.addEventListener('keyup', (event) => {
    display.innerText == error_msg || event.key == "Delete"
        ? clear() : event.key == "Enter"
            ? equal() : event.key == characters[event.key]
                ? display.innerText += event.key : false;
})
//keyboard backspace call
document.addEventListener("keydown", (event) => {
    display.innerText == error_msg
        ? clear() : event.key == "Backspace" 
            ? backSpace() : false;
})

function equal(){
    try{
        display.innerText = eval(display.innerText);
    }
    catch{
        display.innerText = error_msg;
    }
}

function clear(){
    display.innerText = "";
}

function backSpace(){
    display.innerText = display.innerText.slice(0,-1);
}