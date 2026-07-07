import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerConfig {
  /**
   * Bootstraps the Swagger UI and OpenAPI documentation for the SBB platform.
   * Supports multiple API versions and future version groups.
   */
  public static bootstrap(app: INestApplication, basePath: string = 'api-docs'): void {
    const config = new DocumentBuilder()
      .setTitle('SBB Platform API')
      .setDescription('Enterprise platform services core API specifications and Request/Response definitions')
      .setVersion('1.0.0')
      .addBearerAuth()
      .addTag('Platform', 'Platform core request pipeline and infrastructure APIs')
      .addTag('Health', 'System readiness and liveness endpoints')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(basePath, app, document);

    // Bootstrap version-specific Swagger endpoints (e.g., api-docs/v1, api-docs/v2)
    const activeVersions = ['v1', 'v2'];
    activeVersions.forEach((version) => {
      const versionConfig = new DocumentBuilder()
        .setTitle(`SBB Platform API - ${version.toUpperCase()}`)
        .setDescription(`API Specifications and contract definitions specifically for version ${version}`)
        .setVersion(version)
        .addBearerAuth()
        .addTag('Platform', `Platform infrastructure APIs for ${version}`)
        .build();

      const versionDoc = SwaggerModule.createDocument(app, versionConfig);
      SwaggerModule.setup(`${basePath}/${version}`, app, versionDoc);
    });
  }

  /**
   * Prepares and creates a custom OpenAPI version document group.
   */
  public static createVersionGroup(
    app: INestApplication,
    version: string,
    title: string,
    description: string
  ): any {
    return new DocumentBuilder()
      .setTitle(title)
      .setDescription(description)
      .setVersion(version)
      .addBearerAuth()
      .build();
  }
}
