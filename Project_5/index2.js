

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