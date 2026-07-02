/**
 * Core integration testing utility classes for simulated databases and webhook listeners.
 */

/**
 * Reusable helper simulating database state tracking, rollback capabilities, and transactions.
 */
export class MockDatabaseManager {
  private tables: Map<string, any[]> = new Map();
  private transactionBackup: Map<string, any[]> | null = null;

  /**
   * Clears all simulated database tables.
   */
  public clearAll(): void {
    this.tables.clear();
    this.transactionBackup = null;
  }

  /**
   * Initializes or gets a table's list of rows.
   */
  public getTable<T>(tableName: string): T[] {
    if (!this.tables.has(tableName)) {
      this.tables.set(tableName, []);
    }
    return this.tables.get(tableName) as T[];
  }

  /**
   * Simulates starting a new database transaction.
   */
  public beginTransaction(): void {
    if (this.transactionBackup !== null) {
      throw new Error('A mock transaction is already in progress');
    }
    this.transactionBackup = new Map();
    for (const [key, value] of this.tables.entries()) {
      this.transactionBackup.set(key, JSON.parse(JSON.stringify(value)));
    }
  }

  /**
   * Commits the current simulated database transaction.
   */
  public commitTransaction(): void {
    if (this.transactionBackup === null) {
      throw new Error('No active mock transaction to commit');
    }
    this.transactionBackup = null;
  }

  /**
   * Rolls back the current simulated database transaction.
   */
  public rollbackTransaction(): void {
    if (this.transactionBackup === null) {
      throw new Error('No active mock transaction to roll back');
    }
    this.tables = this.transactionBackup;
    this.transactionBackup = null;
  }
}

/**
 * Utility to track and simulate asynchronous webhooks and third-party integrations.
 */
export class SimulatedWebhookReceiver {
  private receivedPayloads: any[] = [];

  /**
   * Simulates receiving a webhook event.
   */
  public receive(payload: any): void {
    this.receivedPayloads.push(payload);
  }

  /**
   * Gets all received webhook payloads.
   */
  public getPayloads(): any[] {
    return [...this.receivedPayloads];
  }

  /**
   * Resets the receiver's logs.
   */
  public clear(): void {
    this.receivedPayloads = [];
  }
}
