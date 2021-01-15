# Project 2: Add style to your previous project.

Refer [CSSZenGarden.com](http://www.csszengarden.com/) and understand how it works. Inspiring yourself from that website, add styling to your _Barebones_ HTML page from Project 1.

<!DOCTYPE html>
<html lang="en">

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
            {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
} 
        }
        
        .header
        {
            padding: 60px;
            text-align:center;
            background:black;
            color : white;
            font-size: 20px;

        }
        .content
        {
            padding : 20px;

        }
    </style>
</head>



<body>
<div class="header">

<h1> SPACE PROJECTS</h1>
<p> A place to explore</p>
    
    
</div>

<form>
    <center>
    <b><center> TELL US ABOUT YOUR INTERESTS</center></b></br>
    <label for='firstname'> First Name</label> </br>
    <input type="text" id="firstname" name="firstname" ></br>
    <label for="lastname"> LAstname</label> </br>
    <input type="text" id="lastname" name="lastname"></br>
    <label for="email"> Email id</label></br>
    <input type="text" id="email" name="email"> </br>
    <input type="radio" id="male" name="gender" value="male"> 
    <label for="male"> Male</label> </br>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label> </br>
    <input type ="radio" id="other" name="gender" value="other">
    <label for="other">Other</label> </br>
    <label for="Field of intrest">Field of intrest</label> </br>
    <input type="text" id="Field of intrest" name="Field of intrest"> </br>
</center>
</form>
</body>

<img src="C:\Users\theam\Pictures\Screenshots\Screenshot (187).png" alt="related to space "  width="400px" height="400px">


<div class ="header">
<h3> <center> About me</center></h3>
<p> K. Supraja<br>
 2nd year Student at NIT RAIPUR</br>
contact no : 7806081930</br>
suprajakurella73@gmail.com</p>
</div>

</html>

