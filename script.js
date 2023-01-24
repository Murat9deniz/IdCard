function idCard() {
    var firstName =document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var adress = document.getElementById('adress').value ;
    var age = parseInt(document.getElementById('age').value);
    var phoneNumber = parseInt(document.getElementById('phoneNumber').value);

    var numberArray = [];
    numberArray.push(age,phoneNumber);


    document.getElementById("postFullName").innerHTML = firstName +" "+ lastName;
    document.getElementById("postAddress").innerHTML = adress;

    for (var i = 0; i < numberArray.length; i++){
        if (numberArray[i] <= 100) {
            document.getElementById("postAge").innerHTML = "Age: " + age;
        }
        else {
            document.getElementById("postPhoneNumber").innerHTML = "Phone Number: "  + phoneNumber;
        }
    }


}