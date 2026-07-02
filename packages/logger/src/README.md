# @sbb/logger - Source Architecture

This directory houses the core implementation files for the `@sbb/logger` package.

## 🧱 Architectural Components

* **`logger.ts`**: Standard wrapper implementing the unified `SBBLogger` interface. This shields consumers from raw `pino` API drift.
* **`factory.ts`**: The instantiation pipeline, checking standard Node environment triggers to configure correct output channels.
* **`child-logger.ts`**: Formats and enforces core transaction properties (Request IDs, Correlation/Trace headers).
* **`serializers.ts`**: Safely structures Error attributes so they translate cleanly to unified log storage targets (Elastic, Datadog).
* **`redaction.ts`**: Enforces zero-leak compliance by checking runtime objects against deep security filters.
* **`constants.ts`**: Holds defaults like standard log names and default log level targets.
* **`types.ts`**: Strongly structures configuration variables and output structures.

## ⚠️ Important Implementation Guidelines

1. **Zero Global Mutations**: Avoid writing directly to global process streams. All stream bindings must flow through Pino.
2. **Type Imports**: Standard named imports are preferred across files.
3. **Pino Compatibility**: If upgrading `pino`, ensure `pino-pretty` remains compatible and performance tests compile.
