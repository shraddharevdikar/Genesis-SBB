export class AuthorizationMapper {
  /**
   * Placeholder mapping method.
   */
  public static toDto(entity: any): any {
    return {
      id: entity.getId().getValue(),
      name: entity.getName(),
    };
  }
}
