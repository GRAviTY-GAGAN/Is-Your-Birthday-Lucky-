const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const output = document.querySelector("#output-box");

checkNumberButton.addEventListener("click", checkBirthdateIsLucky);

function checkBirthdateIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum&&dob){
        compareValues(sum, luckyNumber.value);
    } else {
        output.innerText = "Please enter both the fields😡"
    }
}

function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for(let i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

function compareValues(sum, luckyNumber){
    if(sum % luckyNumber === 0){
        console.log("Your birthday is lucky🥳");
        output.innerText = "Your birthday is lucky🥳";
    } else {
        console.log("Your birthday is unlucky😞");
        output.innerText = "Your birthday is unlucky😞";
    }
}

