# SBB AI Gateway Foundation

This package establishes the unified AI Gateway architecture and foundational abstraction layers for the SBB platform.

## Architecture

The AI Gateway decouples the SBB business services from the underlying AI providers (such as Gemini, OpenAI, Anthropic, or local LLMs). This enables provider independence, centralized cost and usage tracking, universal content safety filtering, smart tenant-based routing, caching, and comprehensive audit telemetry.

### Key Components

1. **`AIGateway`**: The core execution engine. Orchestrates safety checks, caching, routing, telemetry tracking, and provider delegation.
2. **`AIProvider`**: Interface contracts (`ChatProvider`, `EmbeddingProvider`, `ImageProvider`, `AudioProvider`) implemented by specialized adapters.
3. **`ModelRouter`**: Decides which model and provider to delegate requests to based on criteria such as cost, capability, region, tenant tier, or latency.
4. **`PromptRegistry` & `PromptTemplate`**: A structured system for prompt versioning and variable compilation.
5. **`SafetyPolicy`**: Abstractions for input (prompt) and output content moderation.
6. **`AICache`**: Cache requests to minimize repetitive external API roundtrips.
7. **`CostEstimator`**: Tracks token consumption and translates it into approximate USD costs.
8. **`AITelemetry`**: High-performance operational reporting capturing token count, durations, and request status.
9. **`Events`**: Standard event definitions (`AIRequested`, `AICompleted`, `AIFailed`) for asynchronous event-driven integrations.
