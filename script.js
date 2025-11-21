let tog = true

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".note .note__menu .note__menu--button")
    const menuMain = document.querySelector(".note .note__menu .note__menu--main")


    button.addEventListener('click',()=>{
        tog = SetAnimationButtonMenu(tog)
    })



    LoadTxtMenu(menuMain)
});



function SetAnimationButtonMenu(tog){
    if(tog){
        document.querySelector(".note .note__menu .note__menu--button span:nth-child(1)").classList.add("acctive__span1")
        document.querySelector(".note .note__menu .note__menu--button span:nth-child(1)").classList.remove("unacctive__span1")
        document.querySelector(".note .note__menu .note__menu--button span:nth-child(3)").classList.add("acctive__span2")
        document.querySelector(".note .note__menu .note__menu--button span:nth-child(3)").classList.remove("unacctive__span2")
        document.querySelector(".note .note__menu .note__menu--button span:nth-child(2)").classList.add("acctive__span3")
        document.querySelector(".note .note__menu .note__menu--button span:nth-child(2)").classList.remove("unacctive__span3")
        return false
    }else{
        document.querySelector(".note .note__menu .note__menu--button span:nth-child(1)").classList.add("unacctive__span1")
        document.querySelector(".note .note__menu .note__menu--button span:nth-child(1)").classList.remove("acctive__span1")
        document.querySelector(".note .note__menu .note__menu--button span:nth-child(3)").classList.add("unacctive__span2")
        document.querySelector(".note .note__menu .note__menu--button span:nth-child(3)").classList.remove("acctive__span2")
        document.querySelector(".note .note__menu .note__menu--button span:nth-child(2)").classList.add("unacctive__span3")
        document.querySelector(".note .note__menu .note__menu--button span:nth-child(2)").classList.remove("acctive__span3")
        return true
    }
}


function LoadTxtMenu(main){
    fetch('./menu.txt')
    .then(response => response.text())
    .then(text => {
        text.split('|').forEach((item)=>{
            const newDiv = document.createElement("div");
            const newP = document.createElement("p");
            newP.textContent = item;
            newDiv.classList.add("main__item")
            newDiv.appendChild(newP);
            main.appendChild(newDiv);
            console.log(item)
            
        });
    })
    .catch(err => console.error("Lỗi đọc file:", err));
}