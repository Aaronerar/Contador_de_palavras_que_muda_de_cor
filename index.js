
var button = getElementById("changer");
var color_theme = false;

function change_background(){
    if(color_theme == false){
    color_theme = true;
    document.body.style.background = "red";
    button.style.background = "purple";
    button.style.color = "red";
  }else{
    color_theme = false;
    document.body.style.background = "purple";
    button.style.background = "red";
    button.style.color = "purple";
        }
    }


function calcular(){
var text = document.getElementById("textarea").value;
var result = text.split(" ").length;

document.getElementById("resultado").innerHTML = "você tem: " + result + " palavras";

}

