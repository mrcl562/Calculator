let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));


buttons.map(button => {
    button.addEventListener("click" , (ev) =>{
        switch(ev.target.innerText){
            case "C":
                display.innerText = "";
                break;
            case "del":
                if(display.innerText){
                    display.innerText = display.innerText.slice(0,-1);
                }break;
            case "=":
                try{
                    display.innerText = eval(display.innerText);}
                catch{
                    display.innerText = "WTF!!"}
                break;
            default:
                display.innerText += ev.target.innerText;
        }    
    })
})

document.addEventListener('keyup', (event) => {
    // console.log (`Key pressed ${event.key} \r\n Key code value: ${event.code}`);
    if(event.key == "Enter"){
        try{
            display.innerText = eval(display.innerText);
        }
        catch{
            display.innerText = "WTF!!"}
    }
    if(event.key == "Delete"){
        display.innerText = "";}
    if(event.key === "1"|| event.key === "2"|| event.key === "3"|| event.key === "4"|| event.key === "5"|| event.key === "6"|| event.key === "7"|| event.key === "8"|| event.key === "9"|| event.key === "+"|| event.key === "-"|| event.key === "/"|| event.key === "*"|| event.key === "("|| event.key === ")"){
        display.innerText += event.key;
    }
  }, false);
  document.addEventListener("keydown", (event) => {
    if(event.key == "Backspace"){
        display.innerText = display.innerText.slice(0,-1);
    }
  })