"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        transformOptions: { enableImplicitConversion: true },
    }));
    const config = app.get(config_1.ConfigService);
    app.setGlobalPrefix('/api/v1');
    app.enableCors({
        origin: '*',
        allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe, Access-Control-Allow-Headers, Origin, Authorization',
        methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS, PATCH',
        credentials: true,
    });
    const PORT = config.get('PORT');
    const configDocs = new swagger_1.DocumentBuilder()
        .setTitle('GIS')
        .setDescription('API GIS WEB')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, configDocs);
    document.tags = [];
    swagger_1.SwaggerModule.setup('swagger', app, document, {
        swaggerOptions: {
            docExpansion: 'none',
        },
    });
    await app.listen(PORT);
    console.log('Swagger Running: http://localhost:' + PORT + '/swagger');
}
bootstrap();
//# sourceMappingURL=main.js.map