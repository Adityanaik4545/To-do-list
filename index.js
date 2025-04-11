let userInput=document.getElementById("task-input");
let button=document.getElementById("add");
let userList=document.querySelector(".todo-list");
let singleTask=document.querySelector(".task-container");

button.addEventListener("click",function(){
    let task=document.createElement("p")
    task.textContent=userInput.value;
    let delBtn=document.createElement("button")
    delBtn.textContent="Delete";
    task.appendChild(delBtn)

    delBtn.addEventListener("click",function(){
        task.remove()
    })

    userList.appendChild(task)

    userInput.value="";
})