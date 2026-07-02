/**
 * Deterministic and custom UUID generator specifically for unit and integration testing.
 */
export function generateTestUuid(id: number | string): string {
  const cleanId = String(id).replace(/[^0-9a-fA-F]/g, '');
  const padded = cleanId.padStart(12, '0').slice(-12);
  return `00000000-0000-4000-a000-${padded}`;
}

/**
 * Predefined static UUIDs for test consistency across suites.
 */
export const TestUuids = {
  user: generateTestUuid('1'),
  admin: generateTestUuid('2'),
  guest: generateTestUuid('3'),
  tenant: generateTestUuid('100'),
  organization: generateTestUuid('200'),
  workspace: generateTestUuid('300'),
  workflow: generateTestUuid('400'),
  auditTrail: generateTestUuid('500'),
};

/**
 * Deterministic dates and mock clock helpers for time-sensitive tests.
 */
export class TestClock {
  private static mockTime: Date | null = null;

  /**
   * Static epoch date (2026-07-02T12:00:00Z) to use as stable baseline.
   */
  public static readonly EPOCH = new Date('2026-07-02T12:00:00.000Z');

  /**
   * Freezes the global test clock at a specific date.
   */
  public static freeze(time: Date = TestClock.EPOCH): void {
    TestClock.mockTime = new Date(time);
  }

  /**
   * Resets the mock clock, returning to default dynamic time.
   */
  public static reset(): void {
    TestClock.mockTime = null;
  }

  /**
   * Retrieves the current mock date or a live Date if clock is not frozen.
   */
  public static now(): Date {
    return TestClock.mockTime ? new Date(TestClock.mockTime) : new Date();
  }

  /**
   * Retrieves current ISO timestamp from mock or live clock.
   */
  public static nowIso(): string {
    return TestClock.now().toISOString();
  }

  /**
   * Shifts the current mock date forward or backward by a specific number of milliseconds.
   */
  public static tick(ms: number): void {
    if (TestClock.mockTime) {
      TestClock.mockTime = new Date(TestClock.mockTime.getTime() + ms);
    } else {
      throw new Error('TestClock must be frozen using TestClock.freeze() before calling tick()');
    }
  }
}
