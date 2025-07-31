import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bodyParser: false, // Required for Better Auth
  });

  // 🧠 Middleware de sesión (Better Auth lo requiere)
  // app.use(
  //   session({
  //     secret: process.env.SESSION_SECRET ?? 'una_clave_segura',
  //     resave: false,
  //     saveUninitialized: false,
  //   }),
  // );

  // ✅ Middleware de better-auth
  // app.use(auth); // 👈 Asegúrate de agregarlo antes de las rutas protegidas

  const config = new DocumentBuilder()
    .setTitle('terminal-bus')
    .setDescription('The terminal-bus API description')
    .setVersion('1.0')
    .addTag('terminal')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  // Configurar la carpeta de vistas
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  // Usar Handlebars como motor de plantillas
  app.setViewEngine('hbs');

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
