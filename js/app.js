
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

//sign up employees and store them locally for future use
function signupEmployees(){
    let employeeName=document.getElementById("fld-full-name").value
    let employeeContactNo=document.getElementById("fld-contact-no").value
    let employmentId=document.getElementById("fld-employee-id").value
    let employeePassword=document.getElementById("fld-password").value

    employeeOb= {username: employmentId, password: employeePassword}
    employeeArray.push(employeeOb);
    window.location = "../html/employeeLogin.html"
    localStorage.myArrData=JSON.stringify(employeeArray)
}
const admin = {username:"Nimal",password:"992412"}
employeeArray.push(admin)


//log in page for employees
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
    // if employee information is incorrect
    if (success===false){
        alert("Employee credentials invalid");
    }
}
//customer sign up
let customerArray=[];
function customerSignUp() {
    let customerName=document.getElementById("fld-full-name").value
    let customerId =document.getElementById("fld-contact-no").value
    let customerEmail=document.getElementById("fld-email").value
    let customerPassword=document.getElementById("fld-password").value

    if (customerName.length>0 && customerPassword.length>5){
        let customer ={username:customerName,customerId:customerId,customerEmail:customerEmail,customerPassword:customerPassword}
        customerArray.push(customer)
        localStorage.array=JSON.stringify(customerArray);
        window.location="../html/dashboard.html"
    }else {
        alert("Password length should be more than 5 characters")
    }
    window.location="../html/customerEdit.html"

}
//customer sign up page clear
function customerClear(){
    let customerName=document.getElementById("fld-full-name")
    let customerId =document.getElementById("fld-contact-no")
    let customerEmail=document.getElementById("fld-email")
    let customerPassword=document.getElementById("fld-password")
    let countryCode=document.getElementById("fld-country-code")

    customerName.value="";
    customerId.value="";
    customerEmail.value="";
    customerPassword.value="";
    countryCode.value="";
}

//customer info edit page
function customerEdit(){
    let customerArray = JSON.parse(localStorage.array);
    
}