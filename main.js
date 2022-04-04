
function func(){
    let text = document.createElement("spam");
    let btn = document.createElement("button");
    let line = document.createElement("p");
    let list = document.getElementById("list");
    let listT = document.getElementById("listT");

    text.innerText = " " + document.getElementById("name").value + " ";
    btn.innerText = "delete";
    line.innerText = "";

    listT.appendChild(text);
    listT.appendChild(btn);
    listT.appendChild(line);

    btn.addEventListener("click", e => {
        if(text.innerText !== ""){
           text.innerText += "|ENDED|";
        }
        list.appendChild(line);
        listT.removeChild(text);
        listT.removeChild(btn);
        list.appendChild(text);
    })
    
}

function clearAll(listT, list){
    while(listT.firstChild){
        listT.removeChild(listT.firstChild);
    }
    while(list.firstChild){
        list.removeChild(list.firstChild);
    }
}