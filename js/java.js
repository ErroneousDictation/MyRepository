
/* Makes sure the text contains at least three characters with no spaces */
function validate(x){return/\w{3}/.test(x)&&!/\s/.test(x);}

/* Makes sure the email contains @, ., and characters around it with no spaces */
function validateEmail(x){return /\w@\w*\.\w/.test(x)&&!/\s/.test(x);}

/* Function that calls the validation functions then displays a congratulatory text if checks are passed */
function dataSubmission(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let gender = document.getElementById("gender").value;
    let email =  document.getElementById("email").value;
    let semester =  document.getElementById("semester").value;
    const arrayIn = [fname.toUpperCase(), lname.toUpperCase(), gender.toUpperCase(), email.toUpperCase(), semester.toUpperCase()];
    
    if /* Making sure all the data is formatted correctly */
     (validate(fname)
    &&validate(lname)
    &&validate(gender)
    &&validateEmail(email)){
        
        localStorage.setItem("arrayOut", JSON.stringify(arrayIn)); /* Putting the data in local storage as a passable array */
        document.getElementById("show").innerHTML = /* The message we want to output upon successful data entry */`
        
            ${`Thanks for submitting your information, ${fname} ${lname}!`}<br>
            ${`We'll get in touch with you at ${email}!`}`;
        
        }else{document.getElementById("show").innerHTML = ("WRONG WRONG WRONG!"); /* Oops! Data was input incorrectly! */
    }
}

function showDatabase(){
    const data = JSON.parse(localStorage.getItem("arrayOut"));
    document.getElementById("name").innerHTML = `${data[1]}, ${data[0]}`;
    document.getElementById("gender").innerHTML = data[2];
    document.getElementById("email").innerHTML = data[3];
    document.getElementById("semester").innerHTML = data[4];
}