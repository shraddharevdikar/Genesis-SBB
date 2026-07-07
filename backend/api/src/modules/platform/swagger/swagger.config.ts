import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerConfig {
  /**
   * Bootstraps the Swagger UI and OpenAPI documentation for the SBB platform.
   */
  public static bootstrap(app: INestApplication, path: string = 'api-docs'): void {
    const config = new DocumentBuilder()
      .setTitle('SBB Platform API')
      .setDescription('Enterprise platform services core API specifications and Request/Response definitions')
      .setVersion('1.0.0')
      .addBearerAuth()
      .addTag('Platform', 'Platform core request pipeline and infrastructure APIs')
      .addTag('Health', 'System readiness and liveness endpoints')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(path, app, document);
  }
}
