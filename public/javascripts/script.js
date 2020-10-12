// function close(){


// }
// close();
// alert("hey");
let menu=document.querySelector(".x");
menu.addEventListener("click",()=>{
    var menu = document.querySelector(".menu");
    console.log(menu);
    menu.style.height = "0%";
    // var x=document.querySelector(".x");
    // x.style.display="none";
})
let toggler = document.querySelector(".menu-toggler");
toggler.addEventListener("click",()=>{
    var menu = document.querySelector(".menu");
    menu.style.height = "100vh";


    
})

let x = document.querySelector("#close");
if(document.querySelector(".form-toggler")!=null){

    let formToggler = document.querySelector(".form-toggler");

let messageForm = document.querySelector(".message-form");
formToggler.addEventListener("click",()=>{
    formToggler.classList.add("rotate");
    setTimeout(()=>{
            messageForm.classList.add("form-active");
    formToggler.classList.remove("rotate");

    },350);
})}
x.addEventListener("click",()=>{
    messageForm.classList.remove("form-active");
})


let messageContainer = document.querySelector(".message-container");
// console.log(messageContainer);
if(messageContainer.childElementCount==0){
    messageContainer.style.padding="0px";
}
console.log("testing");
let edit=document.querySelectorAll(".edit-btn");
// console.log(edit,"hey");
let editForm= document.querySelectorAll(".edit-form");
edit.forEach(btn=>{
    btn.addEventListener("click", (e) => {
        console.log("clicked");
        console.log(e.target.parentNode.parentNode.parentNode.children[1]);
        // e.target.parentNode.parentNode.style.display="none";
        
        e.target.parentNode.parentNode.parentNode.children[1].classList.toggle("edit-form-show");
        e.target.parentNode.parentNode.parentNode.classList.toggle("straight");
        // console.log(messageForm.children,"pls understand")
        // console.log(e.target)
        // messageForm.children[1].children[1].value = e.target.parentNode.parentNode.children[1].innerText.slice(0,);
        // messageForm.children[1].children[3].value = e.target.parentNode.parentNode.children[2].innerText;
        // messageForm.children[1].setAttribute(action, "/board/:bid/message/"+e.target.parentNode.parentNode.getAttribute("data-id") +"?_method=PUT")
        // console.log(e.target.parentNode.parentNode.children,"ist haeds");

    })

});
let message=document.querySelectorAll(".message");
message.forEach(message=>{
    message.addEventListener("mouseenter",(e)=>{
        message.style.transform="rotate(5deg)";
        setTimeout(()=>{
            message.style.transform="rotate(0deg)";

        },300);
        // clearInterval();
    })
})
console.log("this works");
let messageName = document.querySelectorAll(".message-name");
let messageContent = document.querySelectorAll(".message-content");

let typing= document.querySelectorAll(".typing");
typing.forEach(type=>{
    type.addEventListener("input",(t)=>{
        console.log("now brown");
        
        if(t.target.getAttribute("name")=="name"){
            console.log("inside if");
            console.log(t.target.parentNode.parentNode.parentNode.children[0].children[3]);
            t.target.parentNode.parentNode.parentNode.children[0].children[2].innerText=t.target.value;
        }
        if (t.target.getAttribute("name") == "message") {
            console.log("inside if");
            console.log(t.target.parentNode.parentNode.parentNode.children[0].children[3]);
            t.target.parentNode.parentNode.parentNode.children[0].children[3].innerText = t.target.value;
        }

    })
})
