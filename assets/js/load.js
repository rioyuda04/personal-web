// load file html in html 

// create variable constant with initialize class name navbar
const load = document.querySelector(".navbar") 
// search loaction and get file navbar.html
//  and then create paramaeter input for initialize format text (string)
// and then create paramater data for initialize to html  
fetch("navbar.html")
.then(input=>input.text())
.then(data=>{
    load.innerHTML=data
})



