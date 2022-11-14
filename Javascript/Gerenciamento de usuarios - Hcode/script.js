var name = document.querySelector("#exampleInputName");
var gender = document.querySelector("#exampleInputGenderM");
var gender = document.querySelector("#exampleInputGenderF");
var birth = document.querySelector("#exampleInputBirth");
var country = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exampleInputEmail");
var password = document.querySelector("#exampleInputPassword");
var photo = document.querySelector("#exampleInputFile");
var admin = document.querySelector("#");



var fields = document.querySelectorAll("#form-user-create [name]");

fields.forEach(function(field, index) {

    if (field.name == "gender") {
        if (field.checked) 
        {
            console.log("SIM", field);

        }
        
    } else {
        console.log("NÃO");
    }

   // console.log(field.id, field.name, field.value, field.checked, index);
});