console.log("Script loaded");

// change theme work
let currentTheme = getTheme();

// Initial --->
console.log(currentTheme);

// changeTheme();
document.addEventListener('DOMContentLoaded', () => {
    changeTheme();
})

function changeTheme(){
    
    // set to web page
    changePageTheme(currentTheme,"");

    //set the listener to change theme button
    const changeThemeButton = document.querySelector("#theme_change_button");
    
    changeThemeButton.addEventListener("click",(event) => {
        const oldTheme = currentTheme;
        console.log("change theme button clicked");
        if(currentTheme === "dark") {
            // theme ko light pr set karen
            currentTheme = "light";
        }
        else{
            currentTheme = "dark";
        }

        console.log(currentTheme);
        changePageTheme(currentTheme,oldTheme);
    });
}


// set theme to local storage
function setTheme(theme) {
    localStorage.setItem("theme", theme);
}

// get theme from local storage
function getTheme()
{
    let theme = localStorage.getItem("theme");
    return theme ? theme : "Light";
}

// change current page theme
function changePageTheme(theme, oldTheme) 
{
    //local storage main update storage
    setTheme(currentTheme);

    //remove current theme 

    if(oldTheme){
        document.querySelector("html").classList.remove(oldTheme);
    }

    //set the current theme
    document.querySelector("html").classList.add(theme);

    //change the text of button
    document
    .querySelector("#theme_change_button")
    .querySelector("span").textContent = theme == "light" ? "Dark" : "Light";

}
// change page theme