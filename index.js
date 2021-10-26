const input = document.querySelector(".head input");
const addBtn = document.querySelector(".head button");

input.onkeyup = () =>{
    let data  = input.value;
    if(data.trim() != 0) addBtn.classList.add("active");
    else addBtn.classList.remove("active");
    }