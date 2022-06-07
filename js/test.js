function showtext(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var semester = document.getElementById("semester").value;

    document.getElementById("show").innerHTML = (fname + " " + lname) + "<br>" + gender + "<br>" + email + "<br>" + semester 
}