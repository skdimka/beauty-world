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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const dto_1 = require("../shared/dto");
const services_1 = require("../services");
const utils_1 = require("../shared/utils");
const multer_1 = require("multer");
const path_1 = require("path");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
let StaffController = class StaffController {
    constructor(staffService) {
        this.staffService = staffService;
    }
    getStaff(search) {
        return this.staffService
            .getAll()
            .map(staff => new dto_1.StaffDto(staff))
            .filter(staff => {
            const findByName = utils_1.Utils.compare(staff.fullName, search);
            return findByName;
        });
    }
    getStaffById(id) {
        const staff = this.staffService.get(+id);
        if (!staff) {
            throw new common_1.HttpException('Сотрудник не найден', common_1.HttpStatus.NOT_FOUND);
        }
        return new dto_1.StaffDto(staff);
    }
    async createStaff(createStaffDto, photo) {
        let photoUrl = '';
        try {
            photoUrl = await this.staffService.uploadPhoto(photo);
        }
        finally {
            const createdstaff = this.staffService.create(Object.assign(Object.assign({}, createStaffDto), { photo: photoUrl }));
            return new dto_1.StaffDto(createdstaff);
        }
    }
    async updatetaff(id, updateStaffDto, photo) {
        const staff = this.staffService.get(+id);
        if (!staff) {
            throw new common_1.HttpException('Сотрудник не найден', common_1.HttpStatus.NOT_FOUND);
        }
        let photoUrl = '';
        try {
            photoUrl = await this.staffService.uploadPhoto(photo);
        }
        finally {
            this.staffService.update(Object.assign(Object.assign({}, updateStaffDto), { id, photo: photoUrl }));
            return new dto_1.StaffDto(this.staffService.get(+id));
        }
    }
    async serveAvatar(fileId, res) {
        res.sendFile(fileId, { root: 'public' });
    }
    deleteStaff(id) {
        const staff = this.staffService.get(+id);
        if (staff) {
            this.staffService.delete(+id);
            return;
        }
        throw new common_1.HttpException('Сотрудник не найден', common_1.HttpStatus.NOT_FOUND);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ name: 'search', description: 'Фильтрует клиента по ФИО или номер телефона', required: false }),
    (0, swagger_1.ApiOperation)({ summary: 'Возвращает список сотрудников' }),
    (0, swagger_1.ApiOkResponse)({ type: [dto_1.StaffDto] }),
    __param(0, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], StaffController.prototype, "getStaff", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Возвращает сотрудника по id' }),
    (0, swagger_1.ApiOkResponse)({ type: dto_1.StaffDto }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Сотрудник не найден' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", dto_1.StaffDto)
], StaffController.prototype, "getStaffById", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('photo', {
        storage: (0, multer_1.memoryStorage)(),
        fileFilter: (req, file, cb) => {
            if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
                cb(null, true);
            }
            else {
                cb(new common_1.HttpException(`Unsupported file type ${(0, path_1.extname)(file.originalname)}`, common_1.HttpStatus.BAD_REQUEST), false);
            }
        }
    })),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiOperation)({ summary: 'Создаёт нового сотрудника' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Сотрудник успешно создан', type: dto_1.StaffDto }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateStaffDto, Object]),
    __metadata("design:returntype", Promise)
], StaffController.prototype, "createStaff", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('photo', {
        storage: (0, multer_1.memoryStorage)(),
        fileFilter: (req, file, cb) => {
            if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
                cb(null, true);
            }
            else {
                cb(new common_1.HttpException(`Unsupported file type ${(0, path_1.extname)(file.originalname)}`, common_1.HttpStatus.BAD_REQUEST), false);
            }
        }
    })),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiOperation)({ summary: 'Редактирует данные сотрудника' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Сотрудник не найден' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Данные сотрудника отредактированы', type: dto_1.StaffDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.UpdateStaffDto, Object]),
    __metadata("design:returntype", Promise)
], StaffController.prototype, "updatetaff", null);
__decorate([
    (0, common_1.Get)('photo/:fileId'),
    __param(0, (0, common_1.Param)('fileId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StaffController.prototype, "serveAvatar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Удаляет сотрудника' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Сотрудник успешно удалён' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Сотрудник не найден' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StaffController.prototype, "deleteStaff", null);
StaffController = __decorate([
    (0, swagger_1.ApiTags)('Staff'),
    (0, common_1.Controller)('staff'),
    __metadata("design:paramtypes", [services_1.StaffService])
], StaffController);
exports.StaffController = StaffController;
//# sourceMappingURL=staff.controller.js.map