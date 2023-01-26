const loginButton = document.querySelector(".login-button");
const emailList = ["MacarioDeRose@armyspy.com", "EdmondaFerrari@teleworm.us", "ciao@gmail.com", "aiuto@gmail.com"];
const emailSection = document.getElementById("email");

loginButton.addEventListener("click",
    function(){
        const valueEmail = emailSection.value;
        let correctEmail = false

        for (let i = 0; i < emailList.length; i++){
            
            if(valueEmail == emailList[i]){
                correctEmail = true
            }
        }

        if(correctEmail){
            alert("Hai inserito la email corretta");
        }
        else{
            alert("Mail sbagliata");
        }
    }
)