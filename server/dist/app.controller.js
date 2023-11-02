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
exports.AppController = exports.ReqUser = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./services/auth/auth.service");
const common_2 = require("@nestjs/common");
const jwt_refresh_guard_1 = require("./auth/guards/jwt-refresh.guard");
const jwt_guard_1 = require("./auth/guards/jwt.guard");
exports.ReqUser = (0, common_2.createParamDecorator)((data, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
});
class AuthDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AuthDto.prototype, "userName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AuthDto.prototype, "password", void 0);
let AppController = class AppController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(authData, response) {
        const user = await this.authService.validateUser(authData.userName, authData.password);
        if (!user) {
            throw new common_1.HttpException('Неправильно введён логин или пароль', common_1.HttpStatus.UNAUTHORIZED);
        }
        const accessToken = await this._setAuthHeaders(response, user.id);
        response.json({ access_token: accessToken });
    }
    async logout(response) {
        response.clearCookie('Authentication');
        response.clearCookie('Refresh');
        response.sendStatus(common_1.HttpStatus.OK);
    }
    async refreshToken(user, response) {
        const accessToken = await this._setAuthHeaders(response, user.id);
        response.json({ access_token: accessToken });
    }
    async _setAuthHeaders(res, userId) {
        const accessTokenData = this.authService.getCookieWithJwtAccessToken(userId);
        const refreshTokenData = this.authService.getCookieWithJwtRefreshToken(userId);
        res.setHeader('Set-Cookie', [
            accessTokenData.cookie,
            refreshTokenData.cookie,
        ]);
        return accessTokenData.token;
    }
};
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Неправильно введён логин или пароль' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AuthDto, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)('refresh'),
    (0, common_1.UseGuards)(jwt_refresh_guard_1.JwtRefreshGuard),
    (0, swagger_1.ApiCookieAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Обновляет токен доступа'
    }),
    __param(0, (0, exports.ReqUser)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "refreshToken", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map