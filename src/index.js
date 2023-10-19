/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

const applicantForm = document.getElementById('form1')
applicantForm.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(event) {
    event.preventDefault()

    const { name, phoneNumber } = event.target;

    const User = {
        name: name.value,
        phoneNumber: phoneNumber.value
    };

    console.log(User);
    document.getElementById("form1").reset();
}




