document.body.onload = createNewItem;

let form = document.getElementById("toDoList");
let name = document.getElementsByClassName("name");
let description = document.getElementsByClassName("description");
let date = document.getElementsByClassName("date");

function createNewItem() {

    var listForm = document.forms["toDoList"];
    var ul = document.getElementsByClassName("form");
    var makeTask = document.createElement("li");
    var addToList = document.createTextNode("_" + newTask);
    makeTask.appendChild(addToList);
    var ul  = document.getElementById("list2");
    document.body.insertBefore(makeTask, ul);

    var removefromList = .removeChild()

}
function submit() {

    document.getElementById("toDoList").addEventListener("click", createNewItem);
    form.onclick = submit;


}
function remove(){

    document.getElementById("toDoList").addEventListener("click", deleteTaskItem);
    form.onclick = remove;


}
function preventDefault() {
    Event.preventDefault();

}

