var travelForm = document.getElementById("travel-form");

function submission() {
    var firstName = travelForm.firstname.value;
    var lastName = travelForm.lastname.value;
    var email = travelForm.email.value;
    var age = travelForm.age.value;

    var gender = travelForm.gender.value;
    var destination = travelForm.destination.value;

    var diet = travelForm.diet;

    var restrictions = [];

    for (var i = 0; diet.length; i++) {
        if (diet[i].checked) {
            restrictions.push(diet[i].value)
        }
    }
    alert(
        `First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Age: ${age}
        Gender: ${gender}
        Destination: ${destination}
        Dietary Restrictions: ${restrictions.join(", ")} `
    );
}


document.getElementById("submit").addEventListener("click", submission)
