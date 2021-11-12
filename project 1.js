<!DOCTYPE html>
<html>
<body>     
    <form>
    <label> First Name: </label><br>
    <input type="text" id="Firstname" name="Firstname" placeholder="alex"><br> 

    <label> Last Name:</label><br>
    <input type="text" id="Lastname" name="Lastname" placeholder="doe"><br>

    <label> Date Of Birth:</label><br>
    <input type="number" id="Dob" name="Dob" placeholder="01/01/2001"><br>

    <lable> Gender:</lable><br>
    <input type="radio" id="Gender" name="Gender" >
    <label for="Male">Male</label><br>
    <input type="radio" id="Gender" name="Gender" >
    <label for="Female">Female</label><br>

    <label> Country:</label>
    <select id="mySelect">
        <option value="India">INDIA</option>
        <option value="orange">US</option>
   </select><br><br>

    <button type="button" onclick='document.getElementById("demo").innerHTML = Firstname.value +" "+ Lastname.value +" "+ Dob.value;
    document.getSelection("demo1").innerHTML = Gender.value'>Submit</button>
    
    </form>
    <p id="demo"></p>
    <p id="demo1"></p>
    
</body>
</html>
