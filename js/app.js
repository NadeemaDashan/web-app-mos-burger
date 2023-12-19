
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

//customer info load
function customerLoad(){
    let customerArray = JSON.parse(localStorage.array);
    let customerIdTxt=document.getElementById("fld-search-customer").value

    let customerName=document.getElementById("fld-full-name")
    let customerIdAs =document.getElementById("fld-contact-no")
    let customerEmail=document.getElementById("fld-email")
    let customerPassword=document.getElementById("fld-password")
    let countryCode=document.getElementById("fld-country-code")
    let isExist = false;
    for (let i = 0; i <customerArray.length ; i++) {
        if (customerIdTxt===customerArray[i].customerId) {
            customerName.value = customerArray[i].username
            customerIdAs.value = customerArray[i].customerId
            customerEmail.value = customerArray[i].customerEmail
            customerPassword.value = customerArray[i].customerPassword
            countryCode.value = "+94"
            isExist=true
        }
    }
    if (isExist===false){
        customerName.value = "INVALID CUSTOMER ID"
        customerIdAs.value = "INVALID CUSTOMER ID"
        customerEmail.value = "INVALID CUSTOMER ID"
        countryCode.value = "+94"
    }

}

// customer info edit
function customerEdit(){
    let customerArray = JSON.parse(localStorage.array);
    let customerName=document.getElementById("fld-full-name").value
    let customerIdAs =document.getElementById("fld-contact-no").value
    let customerEmail=document.getElementById("fld-email").value
    let customerPassword=document.getElementById("fld-password").value

    for (let i = 0; i < customerArray.length; i++) {
        if (customerArray[i].customerId===customerIdAs){
            customerArray.splice(i);
            let customer ={username:customerName,customerId:customerIdAs,customerEmail:customerEmail,
                customerPassword:customerPassword}
            customerArray.push(customer);
        }
    }
    localStorage.array=JSON.stringify(customerArray);

}
// customer info Delete
function customerDelete(){
    let customerArray = JSON.parse(localStorage.array);
    let customerName=document.getElementById("fld-full-name").value
    let customerIdAs =document.getElementById("fld-contact-no").value
    let customerEmail=document.getElementById("fld-email").value
    let customerPassword=document.getElementById("fld-password").value

    for (let i = 0; i < customerArray.length; i++) {
        if (customerArray[i].customerId === customerIdAs) {
            customerArray.splice(i);
        }
    }
    localStorage.array=JSON.stringify(customerArray);

}

//Generate ID and dynamically push to html start
function generateIncrementalId() {
    let lastId = localStorage.getItem("lastId");
    let newId = (lastId === null) ? 1 : parseInt(lastId) + 1;
    localStorage.setItem("lastId", newId);
    return newId;
}


let generatedId = generateIncrementalId();
document.getElementById("txt-order-no").innerHTML="Order No. "+generatedId;

//Generate ID and dynamically push to html end

//product select start
let productArray=
    [{id:"B1001",description:"classical Burger (L)",price:750,discount:15},
    {id:"B1002",description:"Turkey Burger",price:1600,discount:0},
    {id:"B1008",description:"Bacon Burger",price:650,discount:15},
    {id:"B1034",description:"Creamy shrimp pasta",price:2000,discount:0},
    {id:"B1032",description:"Chicken penne pasta",price:1700,discount:0},
    {id:"B1031",description:"Chicken n cheese pasta",price:1600,discount:15},]

let orderArray=[];


function loadTable() {
    let tbl = document.getElementById("tbl-cart");


    for (let i = 0; i < 6; i++) {
        const tblRow = tbl.insertRow();
        let tdDescription = tblRow.insertCell(0);
        let tdQty = tblRow.insertCell(1);
        let tdAmount = tblRow.insertCell(2);

        tdDescription.textContent = productArray[i].description;

        // Using input type 'number' for quantity input
        let inputQty = document.createElement("input");
        inputQty.type = "number";
        inputQty.value = 0;
        inputQty.min = 0;
        inputQty.addEventListener("input", updateTotal);
        tdQty.appendChild(inputQty);

        function updateTotal() {
            tdAmount.textContent = productArray[i].price * parseInt(inputQty.value);
        }

    }
}
loadTable();

