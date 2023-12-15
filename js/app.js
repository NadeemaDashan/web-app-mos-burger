
// to load dashboard from index page
function customerClick(){
  window.location = "../html/dashboard.html";
}

//to load employee login page from index page
function employeeClick(){
    window.location = "../html/employeeLogin.html";
}
let employeeArray=[]
let employeeOb=undefined;
function signupEmployees(){
    let employeeName=document.getElementById("fld-full-name").value
    let employeeContactNo=document.getElementById("fld-contact-no").value
    let employmentId=document.getElementById("fld-employee-id").value
    let employeePassword=document.getElementById("fld-password").value

    employeeOb= {username: employmentId, password: employeePassword}
    employeeArray.push(employeeOb);
    window.location = "../html/employeeLogin.html"
    //localStorage.myArrData=JSON.stringify(arrData);
    localStorage.myArrData=JSON.stringify(employeeArray)
}
const admin = {username:"Nimal",password:"992412"}
employeeArray.push(admin)



function loginEmployeeClick() {
    let employeeArray = JSON.parse(localStorage.myArrData);
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

