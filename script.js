function generatePassword(option) {
    var result = "";
    for(var i = 0; i < 10; i++) {
        result += option.charAt(Math.floor(Math.random() * option.length));
    }
    return result;
}

var form = document.getElementById("form");
var buttonGen = document.getElementById("button-generate");
if(form){
    buttonGen.addEventListener("click", (event) => {
        event.preventDefault();
        var choice = form.querySelectorAll('input[name="choice"]:checked');
        
        form.reset()
        var symbol1 = "";
        var symbol2 = "";
        var symbol3 = "";
        var symbol4 = "";

        for(var i = 0; i < choice.length; i++){
            if(choice[i].value == "lowercase"){
                var symbol1 = "abcdefghijklmnopqrstuvwxyz"
            }
            if(choice[i].value == "uppercase"){
                var symbol2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            }
            if(choice[i].value == "number"){
                var symbol3 = "1234567890"
            }
            if(choice[i].value == "special-char"){
                var symbol4 = "!@#$%?&*()/";
            }
        }
        var symbolfinal = symbol1 + symbol2 + symbol3 + symbol4;
        var password = generatePassword(symbolfinal);
        console.log(password);
        document.getElementById("output-id").innerHTML = password;
    })
    
}

function copyPassword(){
    navigator.clipboard.writeText(document.getElementById("output-id").innerText);
}


