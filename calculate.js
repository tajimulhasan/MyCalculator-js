let  string = "";
let buttons = document.querySelectorAll(".button");

function errorMessage(){
    var error = document.getElementById("error");
    let inputValue = document.querySelector(".input").value;

    if(inputValue == ""){
        error.textContent = "*No number on display";
        error.style.color = "red";
    }
    else{
        error.textContent = "";
    }   
}

Array.from(buttons).forEach((singleBtn) =>{
    singleBtn.addEventListener("click", (e) =>{

        if(e.target.innerHTML === "="){
            if(string === ""){
                errorMessage();
            }
            else{
                string = eval(string);
                document.querySelector(".input").value = string;
            }
       
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector(".input").value = string;
        }
        errorMessage();
    });
});

document.getElementById('clear').addEventListener("click", function(){
    string = "";
    document.querySelector(".input").value = string;
});

document.getElementById("backspace").addEventListener("click", function(){
    string = string.slice(0, -1);
    document.querySelector(".input").value = string;
});

