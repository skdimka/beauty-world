"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const photo = fileName => `${constants_1.API_PATH}/staff/photo/${fileName}`;
exports.default = [
    {
        firstName: 'Ирина',
        patronymic: 'Сергеевна',
        surName: 'Краснова',
        position: 'Мастер ногтевого сервиса',
        photo: photo('d7be2a0cc36277ba0d5fcb3b325389a5.jpg'),
        startWorkDate: new Date()
    },
    {
        firstName: 'Жанна',
        patronymic: 'Сергеевна',
        surName: 'Калилова',
        position: 'Визажист-стилист',
        photo: photo('d7ce2a2cc36277ba0d5fcb5b325389a5.jpg'),
        startWorkDate: new Date()
    },
    {
        firstName: 'Алина',
        patronymic: 'Сергеевна',
        surName: 'Киселева',
        position: 'Парикмахер',
        photo: photo('d7ce2a2sfdfcc36277ba0d5vvfcb5b34325389a5.jpg'),
        startWorkDate: new Date()
    },
    {
        firstName: 'Елена',
        patronymic: 'Сергеевна',
        surName: 'Иванова',
        position: 'Мастер ногтевого сервиса',
        photo: photo('d72sfdfcc36277ba0ewfefvfcb5b34325389a5.jpg'),
        startWorkDate: new Date()
    }
];
//# sourceMappingURL=staff.mock.js.map