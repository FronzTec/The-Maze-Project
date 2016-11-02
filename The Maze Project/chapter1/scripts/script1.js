
function nonono(){
	document.getElementById("nothing").innerHTML = "- .... . / ..- .-. .-.. / ... .... --- ..- .-.. -.. / -. .- -- . / .-.. . ...- . .-.. ..---";
}
function login(){
    var x = document.getElementById("input").value;
 
 switch(x) {
    case 'osytr':
        
        window.open("../chapter1/further/level3.html","self");
        break;

    default:
    	window.open("../chapter1/level3.html")
    }
}