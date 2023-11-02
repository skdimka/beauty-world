//у меня все таки почему то не работает импорт fancybox
//index.js:1 Uncaught SyntaxError: Cannot use import statement outside a module (at index.js:1:1)

// import Fancybox from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";

// Fancybox.bind("[data-fancybox]", {});
// Fancybox.bind('[data-fancybox="gallery"]', {});


//здесь ошибка такая: main.min.js:14 Uncaught ReferenceError: Swiper is not defined
// at main.min.js:14:14
// at main.min.js:23:12

//вроде самое простое, что можно сделать, но не работает(((

// import Swiper from 'swiper';
// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
// import 'swiper/css';


// const swiper = new Swiper(".swiper", {
//     slidesPerView: "4",
//     direction: "horizontal",
//     loop: true,

//     navigation: {
//         nextEl: ".button-next",
//         prevEl: ".button-prev",
//     },
// });



const form = document.getElementById("shortForm");

const button = document.getElementById("shortFormSubmit");
button.addEventListener("click", sendDataShortForm);


async function sendDataShortForm() {

    const formData = new FormData(form);



    const name = formData.get('name');
    const phone = formData.get('phone');
    const url = "http://localhost:3001/api/orders"

    const requestBody = JSON.stringify({ name: name, phone: phone });
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: requestBody
    });

    if (response.status === 201) {
        console.log("отправлено");
        document.getElementById("shortForm").reset();
        alert("Ваша заявка отправлена! В ближайшее время с вами свяжется менеджер.");
        return;
    }

    if (response.status === 400) {
        console.log("ошибка отправки");
        alert("Введите коректные данные!");
        return;
    }
}


const modalForm = document.getElementById("modalForm");

const modalButton = document.getElementById("modalFormSubmit");
modalButton.addEventListener("click", sendDataModalForm);


async function sendDataModalForm() {
    const formData = new FormData(modalForm);

    const name = formData.get('name');
    const phone = formData.get('phone');
    const masterId = formData.get('masterId');
    const serviceId = formData.get('serviceId');
    const visitDate = formData.get('visitDate');
    const url = "http://localhost:3001/api/orders"


    //тут должна быть валидация, НО ОНА ТОЖЕ НЕ ПОДКЛЮЧААЕТСЯ!!!
    // я кучу способов перепробовал, ошибки одни и теже

    const requestBody = JSON.stringify({ name: name, phone: phone, masterId: masterId, serviceId: serviceId, visitDate: visitDate });
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: requestBody
    });



    if (response.status === 201) {
        console.log("отправлено");
        document.getElementById("modalForm").reset();
        setTimeout($.fancybox.close(), 3000);// не работает, из-за того что fancybox нормально не подключен, то о чем говорил выше.
        alert("Ваша заявка отправлена! В ближайшее время с вами свяжется менеджер.");
        return;
    }

    if (response.status === 400) {
        console.log("ошибка отправки");
        alert("Введите коректные данные!");
        return;
    }
}