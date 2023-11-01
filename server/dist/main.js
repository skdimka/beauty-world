"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const constants_1 = require("./shared/constants");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: '*',
        credentials: true,
    });
    app.setGlobalPrefix(constants_1.API_PREFIX);
    app.use(cookieParser());
    app.use(session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true,
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    initSwagger(app);
    await app.listen(constants_1.PORT);
}
function initSwagger(app) {
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Beauty Saloon Api')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup(`${constants_1.API_PREFIX}/swagger`, app, document);
}
bootstrap();
//# sourceMappingURL=main.js.map