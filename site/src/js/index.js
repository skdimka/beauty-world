
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

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





//form

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

const anchors = document.querySelectorAll(`a[href*= "#"]`)

for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute("href")
        document.querySelector(" " + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    })
}


const appForm = document.getElementById('form2')
appForm.addEventListener('submit', addFormSubmit)

function addFormSubmit(event) {
    event.preventDefault()
    console.log('click')

    const { name, phoneNumber, selectStaff, selectServices, data } = event.target;

    const User = {
        name: name.value,
        phoneNumber: phoneNumber.value,
        selectStaff: selectStaff.value,
        selectServices: selectServices.value,
        data: data.value,


    };

    console.log(User);
    document.getElementById("form2").reset();
}