function login(event){
    event.preventDefault();

    let user = document.getElementById("phone").value;
    let pass = document.getElementById("password").value;
    let result = document.getElementById("result");

    if (user == "7415795413" && pass == "ayu8901"){
        result.innerHTML = "log-in successfully 👍🏻";
    } 
    else if (user == "" || pass ==""){
        result.innerHTML = "please fill up the input 😒";
    } 
    else {
        result.innerHTML = "log-in failed ❌";
    }

    // 3 seconds baad message gayab
    setTimeout(function(){
        result.innerHTML = "";
    }, 800);
}