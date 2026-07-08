# AI Providers Module (Phase 1)

This module implements production integrations for:
* Google Gemini (Chat, Reasoning, Embeddings, Vision)
* OpenAI (Chat, Reasoning, Embeddings, Vision)

## Module Structure

```
packages/ai-sdk/src/providers/
├── google/
│   ├── gemini-provider.ts      # Core Gemini Provider entry point
│   ├── gemini-chat.ts          # Chat and ChatStream implementation
│   ├── gemini-reasoning.ts     # Deep thinking / reasoning capability
│   ├── gemini-embeddings.ts    # Content embedding generation
│   ├── gemini-vision.ts       # Multimodal image analysis
│   └── gemini-mapper.ts        # Maps raw Gemini models to AIResponse
├── openai/
│   ├── openai-provider.ts      # Core OpenAI Provider entry point
│   ├── openai-chat.ts          # Chat and ChatStream implementation
│   ├── openai-reasoning.ts     # o1-series thinking capabilities
│   ├── openai-embeddings.ts    # text-embedding-3 capabilities
│   ├── openai-vision.ts        # Multimodal vision analysis
│   └── openai-mapper.ts        # Maps raw OpenAI models to AIResponse
├── shared/
│   ├── provider-errors.ts      # Translates vendor exceptions to AppError
│   ├── provider-options.ts     # Generic execution settings
│   └── provider-result.ts      # Neutral return contracts
└── configuration/
    ├── provider-config.ts      # Multi-tenant config definitions
    └── provider-credentials.ts # Safe runtime key & endpoint loader
```

## Abstract Contracts

Every provider implements the appropriate interface boundaries exported from the SDK:
* `ChatProvider`: Fulfill `chat` and `chatStream` loops.
* `ReasoningProvider`: Fulfill logical `reason` paths.
* `EmbeddingProvider`: Fulfill numeric `embed` conversions.
* `VisionProvider`: Fulfill multidimensional `analyzeImage` checks.

All execution exceptions are safely mapped to `AppError` / `AIError` and never leaked outside this module.
No hardcoded credentials. All variables are dynamically loaded via `ProviderCredentials`.
