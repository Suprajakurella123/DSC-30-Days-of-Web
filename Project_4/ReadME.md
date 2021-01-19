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


css file


body {
  margin: 10px auto;
  min-width: 250px;
  max-width: 50%;
  background-color: silver;
}
* {
  box-sizing: border-box;
}

ul {
  margin: 0;
  padding: 0;
}
ul li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  list-style-type: none;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;

  
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}


ul li:nth-child(odd) {
background: #f9f9f9;
}
ul li:hover {
  background: #ddd;
}
ul li.checked {
  background: teal;
  color: white;
  text-decoration: line-through;
}
ul li.checked::before {
  content: '';
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 15px;
  width: 7px;
}


.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
}

.close:hover {
  background-color: crimson;
  color: white;
}
.header {
  background-color: crimson;
  padding: 30px 40px;
  color: white;
  text-align: center;
}
.header:after {
  content: "";
  display: table;
  clear: both;
}
input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 75%;
  padding: 10px;
  float: left;
  font-size: 16px;
}
.addBtn {
  padding: 10px;
  width: 25%;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
}
.addBtn:hover {
  background-color: #bbb;
}
#clear-list{
  width: 30%;
  font-weight: bold;
  font-style: italic;
  font-size: xx-large;
  font-family: "Times New Roman";
  margin: 40px 35%;
  background-color: darkblue;
  color: white;
}
#clear-list:hover{
  background-color: blue;
  color: white;
}



js file


var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
  var div = this.parentElement;
  div.style.display = "none";
  }
}


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
  ev.target.classList.toggle('checked');
  }
}, false);


function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
  alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
  }
}


function removeAll(){
  var lst = document.getElementsByTagName("ul");
    lst[0].innerHTML = "";
}
