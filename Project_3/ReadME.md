# Project 3: Bootstrap to recreate your old portfolio website

Now that you have added style to your portfolio site, it **lacks the modern feel** of a website made in 2020.

**Use Bootstrap** in addition to, or in replacement to, your CSS to make your website modern!
<!--
Visual Code Mobile
Developed By Manish Nirmal
App Available on Play Store :-
https://play.google.com/store/apps/details?id=lk.visual.code.mobile
YouTube :-
https://youtube.com/ManishNirmal
-->
<nav class="navbar navbar-expand-lg navbar-light bg-light"> <div class="container-fluid"> <a class="navbar-brand" href="#">Navbar</a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarSupportedContent"> <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item"> <a class="nav-link active" aria-current="page" href="#">Home</a> </li> <li class="nav-item"> <a class="nav-link" href="#">Link</a> </li> <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Dropdown </a> <ul class="dropdown-menu" aria-labelledby="navbarDropdown"> <li><a class="dropdown-item" href="#">Action</a></li> <li><a class="dropdown-item" href="#">Another action</a></li> <li><hr class="dropdown-divider"></li> <li><a class="dropdown-item" href="#">Something else here</a></li> </ul> </li> <li class="nav-item"> <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> </li> </ul> <form class="d-flex"> <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> <button class="btn btn-outline-success" type="submit">Search</button> </form> </div> </div>
 </nav>


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
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel"> <div class="carousel-inner"> <div class="carousel-item active"> <img src="/Internal storage/DCIM/Screenshots" class="d-block w-100" alt="space."> </div> <div class="carousel-item"> <img src="/Internal storage/DCIM/Screenshots" class="d-block w-100" alt="...space"> </div> <div class="carousel-item"> <img src="/Internal storage/DCIM/Screenshots" class="d-block w-100" alt="space"> </div> </div> <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="visually-hidden">Previous</span> </a> <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="visually-hidden">Next</span> </a> </div>

<img src="C:\Users\theam\Pictures\Screenshots\Screenshot (187).png" alt="related to space "  width="400px" height="400px">


<div class ="header">
<h3> <center> About me</center></h3>
<p> K. Supraja<br>
 2nd year Student at NIT RAIPUR</br>
contact no : 7806081930</br>
suprajakurella73@gmail.com</p>
</div>

</html>

    

