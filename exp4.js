const form = document.querySelector("#form");
const username = document.querySelector("#username");
const password1 = document.querySelector("#password1");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

// Show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const smallElement = formControl.querySelector("small");
    smallElement.innerText = message;
};

// Show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
};

// Check email is valid
function checkEmail(input){
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regex.test(input.value.trim())){
        showSuccess(input);
    } else {
        showError(input, "Invalid Email-id");
    };
};

// Check required fields
function checkRequired(inputArr){
    inputArr.forEach(input => {
        if(input.value.trim() === ""){
            showError(input, `${getFieldName(input)} it is mandatory`);
        } else {
            showSuccess(input);
        };
    });
};

// Check input length
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must contain at least ${min} characters`);
    } else if(input.value.length > max){
        showError(input, `${getFieldName(input)} should not contain more than ${max} characters`);
    } else {
        showSuccess(input);
    };
};

// Get fieldname
function getFieldName(input){
    const formControl = input.parentElement;
    const labelContent = formControl.querySelector("label").textContent;
    return labelContent;
};

// Check passwords match
function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, `Seat Number does not match `);
    };
};

// Event listeners
form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkRequired([username,password1, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password,10,10);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
});