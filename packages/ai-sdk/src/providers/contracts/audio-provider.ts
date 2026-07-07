import { AIProvider } from './ai-provider.js';

export interface AudioProvider extends AIProvider {
  textToSpeech(text: string, options?: Record<string, any>): Promise<Buffer>;
  speechToText(audio: Buffer, options?: Record<string, any>): Promise<string>;
}
