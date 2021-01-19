# Project 4: Complete both the projects

### **First project**
- Make a TODO List website using everything you have learnt so far. 

### **Second Project**
- Add to your portfolio:-
  * Save contact form details in a variable, Tabular structure with flex boxes.
  * For each entry, create a new row with the details entered.
  * Do not allow repeated or empty fields.
  * Whenever they enter a new thing, it will have a small fade in effect.
  * Animations and functionalities.




PROJECT 1


<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="css\to do list.css">
  </head>
  <body>

    <div class="header">
      <h2 style="margin:5px">To Do List</h2>
      <input type="text" id="myInput" placeholder="Title...">
      <span onclick="newElement()" class="addBtn">Add</span>
    </div>

    <ul id="myUL">
      <li class="checked">Go through DataFlair's JavaScript tutorials</li>
      <li>Practise the codes</li>
      <li>Read a book on JavaScript</li>
      <li class="checked">Organise my notes</li>
      <li>Create JavaScript projects</li>
      <li>Take quiz</li>
      <li>Comprehend interview questions</li>
    </ul>
    <button type="button" id="clear-list" onclick="removeAll()">Clear Items</button>

    <script type="text/javascript" src="js\to do list.js"></script>

  </body>
</html>


body {
  background: #fff;
  color: #333;
  font-family: Lato, sans-serif;
}
.container {
  display: block;
  width: 400px;
  margin: 100px auto 0;
}
ul {
  margin: 0;
  padding: 0;
}
li * {
  float: left;
}
li, h3 {
  clear:both;
  list-style:none;
}
input, button {
  outline: none;
}
button {
  background: none;
  border: 0px;
  color: #888;
  font-size: 15px;
  width: 60px;
  margin: 10px 0 0;
  font-family: Lato, sans-serif;
  cursor: pointer;
}
button:hover {
  color: #333;
}

h3,
label[for='new-task'] {
  color: #333;
  font-weight: 700;
  font-size: 15px;
  border-bottom: 2px solid #333;
  padding: 30px 0 10px;
  margin: 0;
  text-transform: uppercase;
}
input[type="text"] {
  margin: 0;
  font-size: 18px;
  line-height: 18px;
  height: 18px;
  padding: 10px;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 6px;
  font-family: Lato, sans-serif;
  color: #888;
}
input[type="text"]:focus {
  color: #333;
}


label[for='new-task'] {
  display: block;
  margin: 0 0 20px;
}
input#new-task {
  float: left;
  width: 318px;
}
p > button:hover {
  color: #0FC57C;
}


li {
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}
li > input[type="checkbox"] {
  margin: 0 10px;
  position: relative;
  top: 15px;
}
li > label {
  font-size: 18px;
  line-height: 40px;
  width: 237px;
  padding: 0 0 0 11px;
}
li >  input[type="text"] {
  width: 226px;
}
li > .delete:hover {
  color: #CF2323;
}


#completed-tasks label {
  text-decoration: line-through;
  color: #888;
}


ul li input[type=text] {
  display:none;
}

ul li.editMode input[type=text] {
  display:block;
}

ul li.editMode label {
  display:none;
}











var taskInput=document.getElementById("new-task");
var addButton=document.getElementsByTagName("button")[0];
var incompleteTaskHolder=document.getElementById("incomplete-tasks");
var completedTasksHolder=document.getElementById("completed-tasks");



var createNewTaskElement=function(taskString){

	var listItem=document.createElement("li");

	
	var checkBox=document.createElement("input");
	
	var label=document.createElement("label");
	
	var editInput=document.createElement("input");
	
	var editButton=document.createElement("button");

	
	var deleteButton=document.createElement("button");
	label.innerText=taskString;

	
	checkBox.type="checkbox";
	editInput.type="text";

	editButton.innerText="Edit";
	editButton.className="edit";
	deleteButton.innerText="Delete";
	deleteButton.className="delete";



	
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	return listItem;
}



var addTask=function(){
	console.log("Add Task...");
	
	var listItem=createNewTaskElement(taskInput.value);

	
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	taskInput.value="";

}



var editTask=function(){
console.log("Edit Task...");
console.log("Change 'edit' to 'save'");


var listItem=this.parentNode;

var editInput=listItem.querySelector('input[type=text]');
var label=listItem.querySelector("label");
var containsClass=listItem.classList.contains("editMode");
		
		if(containsClass){

		
			label.innerText=editInput.value;
		}else{
			editInput.value=label.innerText;
		}

		
		listItem.classList.toggle("editMode");
}





var deleteTask=function(){
		console.log("Delete Task...");

		var listItem=this.parentNode;
		var ul=listItem.parentNode;
		
		ul.removeChild(listItem);

}



var taskCompleted=function(){
		console.log("Complete Task...");
	
	
	var listItem=this.parentNode;
	completedTasksHolder.appendChild(listItem);
				bindTaskEvents(listItem, taskIncomplete);

}


var taskIncomplete=function(){
		console.log("Incomplete Task...");

		var listItem=this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
			bindTaskEvents(listItem,taskCompleted);
}



var ajaxRequest=function(){
	console.log("AJAX Request");
}





addButton.onclick=addTask;
addButton.addEventListener("click",addTask);
addButton.addEventListener("click",ajaxRequest);


var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
	console.log("bind list item events");

	var checkBox=taskListItem.querySelector("input[type=checkbox]");
	var editButton=taskListItem.querySelector("button.edit");
	var deleteButton=taskListItem.querySelector("button.delete");


			
			editButton.onclick=editTask;
			
			deleteButton.onclick=deleteTask;
			
			checkBox.onchange=checkBoxEventHandler;
}


	for (var i=0; i<incompleteTaskHolder.children.length;i++){

		
		bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
	}





	for (var i=0; i<completedTasksHolder.children.length;i++){
	
		bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
	}




