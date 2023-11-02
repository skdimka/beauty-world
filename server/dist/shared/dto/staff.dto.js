"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStaffDto = exports.CreateStaffDto = exports.StaffDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const base_dto_1 = require("./base-dto");
class StaffDto extends base_dto_1.BaseDto {
    constructor(staff) {
        super();
        if (staff) {
            Object.assign(this, staff);
            this.fullName = `${staff.surName || ''} ${staff.firstName || ''} ${staff.patronymic || ''}`.trim();
        }
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Имя' }),
    __metadata("design:type", String)
], StaffDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Отчество', required: false }),
    __metadata("design:type", String)
], StaffDto.prototype, "patronymic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Фамилия' }),
    __metadata("design:type", String)
], StaffDto.prototype, "surName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Полное имя' }),
    __metadata("design:type", String)
], StaffDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Должность' }),
    __metadata("design:type", String)
], StaffDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Дата начала работы в компании', required: false }),
    __metadata("design:type", Date)
], StaffDto.prototype, "startWorkDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Путь до фотки сотрудника', required: false }),
    __metadata("design:type", String)
], StaffDto.prototype, "photo", void 0);
exports.StaffDto = StaffDto;
class CreateStaffDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Имя' }),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Отчество' }),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "patronymic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Фамилия' }),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "surName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Должность' }),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Дата начала работы в компании', required: false }),
    __metadata("design:type", Date)
], CreateStaffDto.prototype, "startWorkDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Фотки сотрудника (только изображение)',
        type: 'string',
        format: 'binary',
        required: false
    }),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "photo", void 0);
exports.CreateStaffDto = CreateStaffDto;
class UpdateStaffDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Имя', required: false }),
    __metadata("design:type", String)
], UpdateStaffDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Отчество', required: false }),
    __metadata("design:type", String)
], UpdateStaffDto.prototype, "patronymic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Фамилия', required: false }),
    __metadata("design:type", String)
], UpdateStaffDto.prototype, "surName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Должность', required: false }),
    __metadata("design:type", String)
], UpdateStaffDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Дата начала работы в компании', required: false }),
    __metadata("design:type", Date)
], UpdateStaffDto.prototype, "startWorkDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Фотки сотрудника (только изображение)',
        type: 'string',
        format: 'binary',
        required: false
    }),
    __metadata("design:type", String)
], UpdateStaffDto.prototype, "photo", void 0);
exports.UpdateStaffDto = UpdateStaffDto;
//# sourceMappingURL=staff.dto.js.map