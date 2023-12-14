
// to load dashboard from index page
function customerClick(){
  window.location = "../html/dashboard.html";
}

//to load employee login page from index page
function employeeClick(){
    window.location = "../html/employeeLogin.html";
}

//to check login credentials of the employees
const admin = {username:"Nimal",password:"992412"}
let employeeArray=[]

function loginEmployeeClick() {
    let employeeId = document.getElementById("fld-employee-id").value
    let employeePassword = document.getElementById("fld-password").value
    let success = false;
    for (let i = 0; i < employeeArray.length; i++) {
        console.log(employeeArray[i].username);
    }

    for (let i = 0; i < employeeArray.length; i++) {
        if (employeeId === employeeArray[i].username && employeePassword === employeeArray[i].password) {
            window.location = "../html/dashboard.html";
            success=true;
        }
    }
    if (success===false){
        alert("Employee credentials invalid");
    }
}

function signupEmployees(){

    let employeeName=document.getElementById("fld-full-name").value
    let employeeContactNo=document.getElementById("fld-contact-no").value
    let employmentId=document.getElementById("fld-employee-id").value
    let employeePassword=document.getElementById("fld-password").value

    let employeeOb= {username: employmentId, password: employeePassword}
    employeeArray.push(employeeOb);
    for (let i = 0; i < employeeArray.length; i++) {
        console.log(employeeArray[i].username);
    }

    window.location = "../html/employeeLogin.html"
}
