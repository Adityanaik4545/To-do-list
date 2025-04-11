let taskToDo;
let savedData = localStorage.getItem("taskToDo");

try {
    if (savedData) {
        taskToDo = JSON.parse(savedData);
    } else {
        taskToDo = [];
    }
} catch (error) {
    console.warn("localStorage has broken data. Resetting...");
    taskToDo = [];
    localStorage.setItem("taskToDo", JSON.stringify(taskToDo));
}

let userInput = document.getElementById("task-input");
let button = document.getElementById("add");
let userList = document.querySelector(".todo-list");
let singleTask = document.querySelector(".task-container");
taskToDo.forEach((taskData,index) => {
    let taskdiv = document.createElement("div")

    let checkBox = document.createElement("input")
    checkBox.setAttribute("type", "checkbox")

    let task = document.createElement("p")
    task.textContent = taskData.Text;

    if (taskData.completed) {
        checkBox.checked=true;
        task.classList.add("strikeoff")
    }
    let delBtn = document.createElement("button")
    delBtn.textContent = "Delete";

    taskdiv.appendChild(checkBox)
    taskdiv.appendChild(task)
    taskdiv.appendChild(delBtn)
    singleTask.appendChild(taskdiv)
    
    //delete button
    delBtn.addEventListener("click", function () {
        taskToDo.splice(index,1);
        localStorage.setItem("taskToDo",JSON.stringify(taskToDo))
        taskdiv.remove()
    })
    // checkbox button
    checkBox.addEventListener("change", function () {
        task.classList.toggle("strikeoff")
        taskData.completed=checkBox.checked;
        localStorage.setItem("taskToDo",JSON.stringify(taskToDo));
    })
});
// add button
button.addEventListener("click", function () {
    if (userInput.value.trim()==="") {
        alert(`please enter the task`);
        return;
    }
    let taskdiv = document.createElement("div")

    let checkBox = document.createElement("input")
    checkBox.setAttribute("type", "checkbox")

    let task = document.createElement("p")
    task.textContent = userInput.value;

    let taskData = {
        Text: userInput.value,
        completed:false,
    };

    taskToDo.push(taskData);
    localStorage.setItem("taskToDo", JSON.stringify(taskToDo));

    let delBtn = document.createElement("button")
    delBtn.textContent = "Delete";

    taskdiv.appendChild(checkBox)
    taskdiv.appendChild(task)
    taskdiv.appendChild(delBtn)
    singleTask.appendChild(taskdiv)
    
    //delete button
    delBtn.addEventListener("click", function () {
        taskdiv.remove()
    })
    // checkbox button
    checkBox.addEventListener("change", function () {
        task.classList.toggle("strikeoff")
    })

    userInput.value = "";
});