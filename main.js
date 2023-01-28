const body = document.body;
const todoForm = document.querySelector(".todo-form");
// const div = body.textNode;
// console.log(div)
const itemLeft = document.querySelector("#items-left-value")
const todolistLenght = document.querySelectorAll(".todo-list li");
itemLeft.textContent = todolistLenght.length;


todoForm.addEventListener("submit", function(e){
        e.preventDefault();
        const todoTextInput = document.querySelector(".todo-input-text");
        const inputTextValue = todoTextInput.value; 
        const ul = document.querySelector(".todo-list");    
        const li = document.createElement("li");
        const cheackBoxs = document.getElementsByClassName("check-box");
        li.draggable = "true";
        li.classList.add("draggbles");
        const liInnerHTML = ` <div class="box-1">
        <div class="check-box-border">
            <div class="check-box">
              <img src="images/icon-check.svg" alt="">
            </div>
        </div>
    </div>
    <div class="box-2">
        <p>${inputTextValue}</p>
    </div>
    <img class="remove" src="images/icon-cross.svg" alt="">`
    li.innerHTML = liInnerHTML;
    if(todoTextInput.value == ""){
        alert("Please Enter Your Task");
    }else{
         ul.append(li);
    }
    todoTextInput.value = "";

        const itemLeft = e.target.parentNode.nextElementSibling.children[1].children[0].children[0];
        const todoListLis = document.querySelectorAll(".todo-list li");
        itemLeft.innerText = todoListLis.length;
        if(todoTextInput.classList.contains("moon-theme")){
                li.classList.add("moon-theme");
                Array.from(cheackBoxs).forEach((checkBox)=>{
                        checkBox.classList.add("moon-theme");
                })
        }

})

body.addEventListener("click", function(e){
        // toggle through sun and moon logo
        if(e.target.classList.contains("sun")){
                e.target.classList.add("moon");
                e.target.classList.remove("sun");
                e.target.src = "images/icon-moon.svg";
                
        }else if(e.target.classList.contains("moon")){
                e.target.classList.add("sun");
                e.target.classList.remove("moon");
                e.target.src = "images/icon-sun.svg";
        }
             // for cheacked (completed) todo list
        if(e.target.classList.contains("check-box")){
                e.target.style.background = "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))";
                const checkedImg = e.target.childNodes[1];
                checkedImg.style.display = "block";
                
                //line-through the text completed
                const todoText = e.target.parentNode.parentNode.nextElementSibling.childNodes[1];
                const li = e.target.parentNode.parentNode.parentNode;
                if(li.classList.contains("moon-theme")){
                        li.style.textDecoration = "line-through";
                        li.style.color = "hsl(36,3%,70%)";
                }
                todoText.style.textDecoration = "line-through";
                todoText.style.color = "hsl(230,16%,29%)";

                const todoListLis = e.target.parentNode.parentNode.parentNode; 
                todoListLis.classList.add("completed");
         }
         if(e.target.classList.contains("remove")){
                const todoLi = e.target.parentNode;
                todoLi.remove();
                const todoListLis = document.querySelectorAll(".todo-list li");
                const itemLeft = document.querySelector("#items-left-value");
                itemLeft.innerText = todoListLis.length;
         }
         if(e.target.classList.contains("clear-completed")){
                const todoListLis = e.target.parentNode.previousElementSibling.children;
                const todoListLisNotCompleted = document.getElementsByClassName(".completed");
                const itemLeft = document.querySelector("#items-left-value");
                Array.from(todoListLis).forEach(lis =>{
                        if(lis.classList.contains("completed")){
                                lis.remove();      
                        }
                })
                const completedTab = document.querySelector(".completed-tab");
                if(completedTab.classList.contains("items-left-length")){
                       itemLeft.innerText = "0";
                }else{
                        itemLeft.innerText = todoListLis.length;
                }
                
         }
         if(e.target.classList.contains("all-tab")){
                const todoListLis = document.querySelectorAll(".todo-list li");
                const itemLeft = document.querySelector("#items-left-value");
                const todoListLisCompleted = document.querySelectorAll(".todo-list li");
                todoListLisCompleted.forEach(notCompletedLis =>{
                        notCompletedLis.style.display = "block";
                        notCompletedLis.style.display = "flex";
                })
                itemLeft.innerText = todoListLis.length;
                const nextSiblingActiveTab = e.target.nextElementSibling;
                const lastElementCompletedTab = e.target.nextElementSibling.nextElementSibling;
                nextSiblingActiveTab.style.color = "hsl(234, 11%, 52%)";
                lastElementCompletedTab.style.color = "hsl(234, 11%, 52%)";
                e.target.style.color = "hsl(220, 98%, 61%)";

                const todoTextInput = document.querySelector(".todo-input-text").removeAttribute("disabled");
                const completedTab = document.querySelector(".completed-tab");
                completedTab.classList.remove("items-left-length");

                
         }

        
         if(e.target.classList.contains("active-tab")){
                const todoListLisNotCompleted = document.querySelectorAll(".todo-list li:not(.completed)");
                const todoListLis = document.querySelectorAll(".todo-list .completed");
                const itemLeft = document.querySelector("#items-left-value");
                todoListLisNotCompleted.forEach(notCompletedLis =>{
                        notCompletedLis.style.display = "block";
                        notCompletedLis.style.display = "flex";                        
                })
                todoListLis.forEach(CompletedLis =>{
                        CompletedLis.style.display = "none";
                })
                itemLeft.innerText = todoListLisNotCompleted.length;
                const previousSiblingAllTab = e.target.previousElementSibling;
                const nextSiblingCompletedTab = e.target.nextElementSibling;
                previousSiblingAllTab.style.color = "hsl(234, 11%, 52%)";
                nextSiblingCompletedTab.style.color = "hsl(234, 11%, 52%)";
                e.target.style.color = "hsl(220, 98%, 61%)";

                const todoTextInput = document.querySelector(".todo-input-text").disabled = "true";
                 const completedTab = document.querySelector(".completed-tab");
                completedTab.classList.remove("items-left-length");

         }
         if(e.target.classList.contains("completed-tab")){
                const todoListLisNotCompleted = document.querySelectorAll(".todo-list li:not(.completed)");
                const todoListLis = document.querySelectorAll(".todo-list .completed");
                const itemLeft = document.querySelector("#items-left-value");
                todoListLis.forEach(completedLis =>{
                        completedLis.style.display = "block";
                        completedLis.style.display = "flex";
                        
                })
                todoListLisNotCompleted.forEach(notCompletedLis =>{
                        notCompletedLis.style.display = "none";
                })
                itemLeft.innerText = todoListLis.length;
                const previousSiblingActiveTab = e.target.previousElementSibling;
                const lastSiblingAllTab = e.target.previousElementSibling.previousElementSibling;
                previousSiblingActiveTab.style.color = "hsl(234, 11%, 52%)";
                lastSiblingAllTab.style.color = "hsl(234, 11%, 52%)";
                e.target.style.color = "hsl(220, 98%, 61%)";

                const todoTextInput = document.querySelector(".todo-input-text").disabled = "true";
                e.target.classList.add("items-left-length")
         }
        
         if(e.target.classList.contains("moon")){
                const body = document.body;
                const imgContainer = document.querySelector(".img-container");
                const inputBox = document.querySelector(".todo-input-box");
                const inputBoxShowPice = document.querySelector(".showpice");
                const inputTypeText = document.querySelector("input[type='text']");
                const todoListContainer = document.querySelector(".todo-list-container");
                const todolistLenght = document.getElementsByTagName("li");
                const cheackBoxs = document.getElementsByClassName("check-box");
                const allActiveComplitedTabs = document.querySelector(".tabs");
                const itemsleft = document.querySelector(".items-left");
                const allTab = document.querySelector(".all-tab");
                const activeTab = document.querySelector(".active-tab");
                const completedTab = document.querySelector(".completed-tab");
                const clearCompetedTab = document.querySelector(".clear-completed");

                body.classList.add("moon-theme");
                imgContainer.classList.add("moon-theme");
                inputBox.classList.add("moon-theme");
                inputBoxShowPice.classList.add("moon-theme");
                inputTypeText.classList.add("moon-theme");
                todoListContainer.classList.add("moon-theme");
                Array.from(todolistLenght).forEach((lis)=>{
                        lis.classList.add("moon-theme");
                })
                Array.from(cheackBoxs).forEach((checkBox)=>{
                        checkBox.classList.add("moon-theme");
                })
                allActiveComplitedTabs.classList.add("moon-theme");
                itemsleft.classList.add("moon-theme");
                allTab.classList.add("moon-theme");
                activeTab.classList.add("moon-theme");
                completedTab.classList.add("moon-theme");
                clearCompetedTab.classList.add("moon-theme");
                
         }
         if(e.target.classList.contains("sun")){
                const body = document.body;
                const imgContainer = document.querySelector(".img-container");
                const inputBox = document.querySelector(".todo-input-box");
                const inputBoxShowPice = document.querySelector(".showpice");
                const inputTypeText = document.querySelector("input[type='text']");
                const todoListContainer = document.querySelector(".todo-list-container");
                const todolistLenght = document.getElementsByTagName("li");
                const cheackBoxs = document.getElementsByClassName("check-box");
                const allActiveComplitedTabs = document.querySelector(".tabs");
                const itemsleft = document.querySelector(".items-left");
                const allTab = document.querySelector(".all-tab");
                const activeTab = document.querySelector(".active-tab");
                const completedTab = document.querySelector(".completed-tab");
                const clearCompetedTab = document.querySelector(".clear-completed");

                body.classList.remove("moon-theme");
                imgContainer.classList.remove("moon-theme");
                inputBox.classList.remove("moon-theme");
                inputBoxShowPice.classList.remove("moon-theme");
                inputTypeText.classList.remove("moon-theme");
                todoListContainer.classList.remove("moon-theme");
                Array.from(todolistLenght).forEach((lis)=>{
                        lis.classList.remove("moon-theme");
                })
                Array.from(cheackBoxs).forEach((checkBox)=>{
                        checkBox.classList.remove("moon-theme");
                })
                allActiveComplitedTabs.classList.remove("moon-theme");
                itemsleft.classList.remove("moon-theme");
                allTab.classList.remove("moon-theme");
                activeTab.classList.remove("moon-theme");
                completedTab.classList.remove("moon-theme");
                clearCompetedTab.classList.remove("moon-theme");
         }
   
})

const container_1 = document.querySelector(".container-1");
const container_2 = document.querySelector(".container-2");
body.addEventListener("dragstart", (e)=>{
                if(e.target.classList.contains("draggbles")){
                        e.target.classList.add("dragging")
                        console.log("touchstart")
                }
})
body.addEventListener("dragend", (e)=>{
                if(e.target.classList.contains("draggbles")){
                        e.target.classList.remove("dragging")
                        console.log("touchend")
                }
})
container_1.addEventListener("dragover", (e)=>{
                e.preventDefault();
                const itemLeft = document.querySelector("#items-left-value");
                const draggingLis = document.querySelector(".dragging");
                container_1.append(draggingLis);
                itemLeft.innerText = container_1.children.length;
})
container_2.addEventListener("dragover", (e)=>{
                e.preventDefault();
                const itemLeft = document.querySelector("#items-left-value");
                const draggingLis = document.querySelector(".dragging");
                container_2.append(draggingLis)
                itemLeft.innerText = container_1.children.length;
})





