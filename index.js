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
// let userList = document.querySelector(".todo-list");
let singleTask = document.querySelector(".task-container");



taskToDo.forEach((taskData,index) => {
    let taskdiv = document.createElement("div")
    taskdiv.classList.add("individual-task")
    let task = document.createElement("p")
    task.textContent = taskData.Text;

    let checkBox = document.createElement("img")
    checkBox.setAttribute("src","images/uncheck.png")
    checkBox.style.width="25px"
    checkBox.style.cursor="pointer"
    function toggleCheck() {
        if (taskData.completed === true) {
            taskData.completed = false;
            task.classList.remove("strikeoff");
            checkBox.setAttribute("src", "images/uncheck.png");
        } else {
            taskData.completed = true;
            task.classList.add("strikeoff");
            checkBox.setAttribute("src", "images/check.png");
        }
        localStorage.setItem("taskToDo", JSON.stringify(taskToDo));
    }
    
    checkBox.addEventListener("click", toggleCheck);
    task.addEventListener("click", toggleCheck);
    
    ''

    if (taskData.completed===true) {
        task.classList.add("strikeoff")
        checkBox.setAttribute("src","images/check.png")
    }
    let delBtn = document.createElement("button")
    delBtn.classList.add("delete-btn")
    delBtn.textContent = "Delete";

    taskdiv.appendChild(checkBox)
    taskdiv.appendChild(task)
    taskdiv.appendChild(delBtn)
    singleTask.appendChild(taskdiv)
    
    //delete button 'deletes data from local storage'
    delBtn.addEventListener("click", function () {
        taskToDo.splice(index,1);
        localStorage.setItem("taskToDo",JSON.stringify(taskToDo))
        taskdiv.remove()
    })
});





// add button
button.addEventListener("click", function () {
    if (userInput.value.trim()==="") {
        alert(`please enter the task`);
        return;
    }
    let taskdiv = document.createElement("div")
    taskdiv.classList.add("individual-task")

    let checkBox = document.createElement("img")
    checkBox.setAttribute("src","images/uncheck.png")
    checkBox.style.width="25px"
    checkBox.style.cursor="pointer"

    function toggleCheck() {
        if (taskData.completed===true) {
            taskData.completed=false;
            task.classList.remove("strikeoff")
            checkBox.src="images/uncheck.png"
        } 
        else {
            taskData.completed=true;
            task.classList.add("strikeoff");
            checkBox.src="images/check.png"
        }
        localStorage.setItem("taskToDo",JSON.stringify(taskToDo))
    }


    let task = document.createElement("p")
    task.textContent = userInput.value;
    
// as local storage cant store arrays convert it to string
    let taskData = {
        Text: userInput.value,
        completed:false,
    };
// pushes taskdata to tasktodo which is an array
    taskToDo.push(taskData);
    //converts array to string
    localStorage.setItem("taskToDo", JSON.stringify(taskToDo));

    let delBtn = document.createElement("button")
    delBtn.classList.add("delete-btn")
    delBtn.textContent = "Delete";

    taskdiv.appendChild(checkBox)
    taskdiv.appendChild(task)
    taskdiv.appendChild(delBtn)
    singleTask.appendChild(taskdiv)
    
    //delete button
    delBtn.addEventListener("click", function () {
        let index = taskToDo.indexOf(taskData);
        if (index !== -1) {
            taskToDo.splice(index, 1);
            localStorage.setItem("taskToDo", JSON.stringify(taskToDo));
        }
        taskdiv.remove();
    });
    // checkbox button
    checkBox.addEventListener("click", toggleCheck)
    task.addEventListener("click", toggleCheck)

    userInput.value = "";
});