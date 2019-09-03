"use strict";
let addTaskBtn = document.getElementById("addTask");

window.addEventListener('load', () => {
    console.log('All assets are loaded');
    addTaskBtn.addEventListener('click', createNewItem);
});



function createNewItem() {
    let newTaskName = document.getElementById("name");
    let newTaskDescription = document.getElementById("description");
    let newTaskDate = document.getElementById("date");

    let taskList = document.getElementById("taskList");
    let newTaskItem = document.createElement("li");
    let newTaskSpan = document.createElement("span");
    let removeTaskBtn = document.createElement("button");
    removeTaskBtn.addEventListener("click", remove);

    // create the text node to be added to the list item
    let newTaskText = document.createTextNode(`${newTaskName.value} | ${newTaskDescription.value} | ${newTaskDate.value}`);
    // add text to the list item
    newTaskSpan.appendChild(newTaskText);
    newTaskItem.appendChild(newTaskSpan);
    newTaskItem.appendChild(removeTaskBtn);
    // append the new list item with text to the unordered list
    taskList.appendChild(newTaskItem);
}

function submit() {
    document.getElementById("toDoList").addEventListener("click", createNewItem);
    form.onclick = submit;
}

function remove(event) {
    let li = event.target.parentElement;
    //let ul = li.parentElement;
    //const index = Array.from(e.parentElement.parentElement.children).indexOf(e);
    li.remove();
    //console.log(ul);
    //const index = Array.from(ul.children).indexOf(li);
    //console.log(`index: ${index}`);
    //document.getElementById("toDoList").addEventListener("click", deleteTaskItem);
    // form.onclick = remove;
}

function preventDefault() {
    Event.preventDefault();

}

