import { ExtensionId } from '../identity/extension-id.js';

export interface ExtensionContract {
  readonly extensionId: ExtensionId;
  readonly name: string;
  readonly version: string;
  readonly supportedCapabilitiesList: string[];
  
  /**
   * Invoked by the runtime platform when initializing the extension.
   */
  onInitialize(runtimeConfigJson: string): Promise<void>;

  /**
   * Invoked by the runtime platform to execute the extension's designated logic.
   */
  onExecute(payloadJson: string): Promise<string>;

  /**
   * Invoked by the runtime platform prior to decommissioning or upgrading the extension.
   */
  onDestroy(): Promise<void>;
}
