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
<nav class="navbar navbar-expand-lg navbar-light bg-light"> <div class="container-fluid"> <a class="navbar-brand" href="#">TOOLS</a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarSupportedContent"> <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item"> <a class="nav-link active" aria-current="page" href="#">Home</a> </li> <li class="nav-item"> <a class="nav-link" href="#">Link</a> </li> <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Dropdown </a> <ul class="dropdown-menu" aria-labelledby="navbarDropdown"> <li><a class="dropdown-item" href="#">Action</a></li> <li><a class="dropdown-item" href="#">Another action</a></li> <li><hr class="dropdown-divider"></li> <li><a class="dropdown-item" href="#">Something else here</a></li> </ul> </li> <li class="nav-item"> <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> </li> </ul> <form class="d-flex"> <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> <button class="btn btn-outline-success" type="submit">Search</button> </form> </div> </div>
</nav>




<head> 
   <title> PAGE TITLE</title>
   <meta charset ="UTF-8">
   <meta name ="viewport" content =" width =device-width, initial-scale=1">
   <style>
       body 
       {
           font-family: Arial;
           
           margin:0;
       }
       input{
           
   width: 100%;
   padding: 12px 20px;
   margin: 8px 0;
   box-sizing: border-box;
} 
       
       
       .header
       {
           padding: 60px;
           text-align:center;
           background:deepskyblue;
           color : white;
           font-size: 20px;

       }
       .content
       {
           padding : 20px;

       }

      
label[for='new-task'] {
  color: #333;
  font-weight: 700;
  font-size: 15px;
  border-bottom: 2px solid #333;
  padding: 30px 0 10px;
  margin: 0;
  text-transform: uppercase;
}
.container {
  display: block;
  width: 400px;
  margin: 100px auto 0;
}
   </style>
</head>

<!DOCTYPE html>
<html lang="en">
    <div class="header">

        <h1> SPACE PROJECTS</h1>
        <p> A place to explore</p>

<body>
<a href='https://www.nasa.gov/centers/johnson/external_relations/university/engineering-student-projects/'>
<button> Link For Projects</button></a>
<head>
    <title>Todo App</title>
      
</head>

  <div class="container">
    <p>
      <label for="new-task">Add Item</label><input id="new-task" type="text"><button>Add</button>
    </p>
    
    <h3>Todo</h3>
    <ul id="incomplete-tasks">
      <li><input type="checkbox"><label>Pay Bills</label><input type="text"><button class="edit">Edit</button><button class="delete">Delete</button></li>
      <li class="editMode"><input type="checkbox"><label>Go Shopping</label><input type="text" value="Go Shopping"><button class="edit">Edit</button><button class="delete">Delete</button></li>
      
    </ul>
    
    <h3>Completed</h3>
    <ul id="completed-tasks">
      <li><input type="checkbox" checked><label>See the Doctor</label><input type="text"><button class="edit">Edit</button><button class="delete">Delete</button></li>
    </ul>
  </div>

  <script type="text/javascript" src="app.js"></script>


   
<div id="container">
    <div id="nameDiv" class="input"> NAME:<input id="name" type="text" placeholder="K.Supraja"/></div>

    <div class="input"> AGE <input id="age" type ="text" placeholder="18"/></div>

    <div class="input" >EMAIL ID <input id="emailid" type="text" placeholder="suprajakurella73@gmail.com"/></div>

    <button id="entry"> INPUT ENTRY</button>

</div>
<table id="display">



    <tr>
   
       <th> NAME</th>
       
       <th> age</th> 
       <th>EMAIL ID</th>
       
       
   
   </table>
  
<script src="index.js" type="text/javascript">

</script>



  


<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel"> <div class="carousel-inner"> <div class="carousel-item active"> <img src="/Internal storage/DCIM/Screenshots" class="d-block w-100" alt="space."> </div> <div class="carousel-item"> <img src="/Internal storage/DCIM/Screenshots" class="d-block w-100" alt="...space"> </div> <div class="carousel-item"> <img src="/Internal storage/DCIM/Screenshots" class="d-block w-100" alt="space"> </div> </div> <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="visually-hidden">Previous</span> </a> <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="visually-hidden">Next</span> </a> </div>

<img src="C:\Users\theam\Pictures\Screenshots\Screenshot (187).png" alt="related to space "  width="400px" height="400px">


<div class ="header">
<h3>> About me</h3>
<p> K. Supraja<br>
2nd year Student at NIT RAIPUR</br>
contact no : 7806081930</br>
suprajakurella73@gmail.com</p>
</div>
</body>
</html>

   

index.js file

if (typeof document !== 'undefined')
{
    

var row=1;
var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

window.addEventListener('load',displayDetails,false)

function displayDetails()
{
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var emailid=document.getElementById("emailid").value;
    
   if(!name || !age || !emailid)
    {
        alert("please fill all the boxes"); 

    }
    var display = document.getElementById("display");
    var newRow= display.insertRow(row);
    var cell1= newRow.insertCell(0);
    var cell2= newRow.insertCell(1);
    var cell3=newRow.insertCell(2);

    cell1.innerHTML=name;
    cell2.innerHTML= age;
    cell2.innerHTML= age;
    row++;

}
}












app.js file

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




