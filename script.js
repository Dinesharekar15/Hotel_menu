
let breakfast=document.querySelector(".breakfastbtn")
let lunch=document.querySelector(".lunchbtn")
let shakes=document.querySelector(".shakesbtn")
let dinner=document.querySelector(".dinnerbtn")
let all=document.querySelector(".allbtn")


let menubreakfast=document.querySelectorAll(".breakfast ")
let menulunch=document.querySelectorAll(".lunch")
let menushakes=document.querySelectorAll(".shakes")
let menudinner=document.querySelectorAll(".dinner")
let menu=document.querySelectorAll("menu-item")

function hidebreakfast(){
     menubreakfast.forEach((breakfast)=>{
        breakfast.classList.add("hide")
     })
}
function unhidebreakfast(){
    menubreakfast.forEach((breakfast)=>{
       breakfast.classList.remove("hide")
    })
}

function hidelunch(){
    menulunch.forEach((lunch)=>{
        lunch.classList.add("hide")
    })
}
function unhidelunch(){
    menulunch.forEach((lunch)=>{
        lunch.classList.remove("hide")
    })
}
function hidedinner(){
    menudinner.forEach((dinner)=>{
        dinner.classList.add("hide")
    })
}
function unhidedinner(){
    menudinner.forEach((dinner)=>{
        dinner.classList.remove("hide")
    })
}

function hideshakes(){
    menushakes.forEach((shakes)=>{
        shakes.classList.add("hide")
    })
}
function unhideshakes(){
    menushakes.forEach((shakes)=>{
        shakes.classList.remove("hide")
    })
}
function unhideall(){
    unhidedinner();
    unhidelunch();
    unhideshakes();
    unhidebreakfast();
}
breakfast.addEventListener("click",function(){
    hideshakes();
    hidelunch();
    hidedinner();
    unhidebreakfast();
})
lunch.addEventListener("click",function(){
    hideshakes();
    hidedinner();
    hidebreakfast();
    unhidelunch();
})
dinner.addEventListener("click",function(){
    hideshakes();
    hidelunch();
    hidebreakfast();
    unhidedinner();
})
shakes.addEventListener("click",function(){
    hidelunch();
    hidedinner();
    hidebreakfast();
    unhideshakes();
})
all.addEventListener("click",function(){
    unhideall();
})