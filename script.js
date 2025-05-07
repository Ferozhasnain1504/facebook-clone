
var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");
function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
}

if(localStorage.getItem("theme")  == "light"){
    // if last theme i.e button was off before website was light
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme")  == "dark"){
    // if last theme i.e button was on before refresh was dark
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{ // when visit the website for the first time default theme is light mode
    localStorage.setItem("theme", "light");
}
