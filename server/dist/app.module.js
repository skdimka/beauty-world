"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const app_controller_1 = require("./app.controller");
const controllers_1 = require("./controllers");
const services_1 = require("./services");
const auth_1 = require("./services/auth");
const jwt_refresh_strategy_1 = require("./auth/strategies/jwt-refresh.strategy");
const jwt_refresh_guard_1 = require("./auth/guards/jwt-refresh.guard");
const jwt_guard_1 = require("./auth/guards/jwt.guard");
const jwt_strategy_1 = require("./auth/strategies/jwt.strategy");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'public'),
            }),
            jwt_1.JwtModule.register({
                secret: auth_1.jwtConstants.secret,
                signOptions: { expiresIn: '60m' },
            }),
            config_1.ConfigModule.forRoot()
        ],
        controllers: [
            app_controller_1.AppController,
            controllers_1.CustomersController,
            controllers_1.OrdersController,
            controllers_1.ServicesController,
            controllers_1.StaffController
        ],
        providers: [
            services_1.CustomersService,
            services_1.OrdersService,
            services_1.StaffService,
            services_1.ServicesService,
            auth_1.AuthService,
            auth_1.LocalStrategy,
            services_1.UsersService,
            jwt_refresh_strategy_1.JwtRefreshTokenStrategy,
            jwt_refresh_guard_1.JwtRefreshGuard,
            jwt_strategy_1.JwtStrategy,
            jwt_guard_1.JwtGuard,
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map