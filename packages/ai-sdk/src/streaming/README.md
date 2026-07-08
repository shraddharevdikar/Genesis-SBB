# AI Streaming Infrastructure

This module implements the core streaming contract and management layer for the SBB AI Gateway. It establishes a highly decoupled, transport-agnostic, and provider-agnostic streaming architecture. Business modules and client components can interact with active streaming sessions via uniform lifecycle contracts without tying themselves to specific transport protocols (like SSE or WebSockets) or SDK APIs.

## Structure

```
packages/ai-sdk/src/streaming/
├── types/
│   ├── stream-type.ts
│   └── stream-status.ts
├── context/
│   └── stream-context.ts
├── streams/
│   ├── ai-stream.ts
│   ├── stream-event.ts
│   └── stream-message.ts
├── control/
│   ├── stream-controller.ts
│   ├── cancellation-token.ts
│   └── stream-resume.ts
├── progress/
│   ├── progress-event.ts
│   └── progress-tracker.ts
├── serialization/
│   └── stream-serializer.ts
└── events/
    ├── stream-started.event.ts
    ├── stream-completed.event.ts
    └── stream-cancelled.event.ts
```

## Core Abstractions

### Stream Type & Status Enums
* `StreamType`: Models different data frames traveling inside the stream including `Text`, `JSON`, `Structured Data`, `Progress`, `Tool Calls` (future), `Reasoning Events` (future), `Status Updates`, and `Completion`.
* `StreamStatus`: Strictly models standard streaming lifecycle phases: `Created`, `Running`, `Completed`, `Cancelled`, `Failed`, `Paused`, and `Resumed`.

### Stream Content Context & Message Envelopes
* `StreamContext`: Standardized multi-tenant metadata block containing ID context, tenant scoping, model selection, and correlation signatures.
* `StreamMessage`: A structured data payload frame inside the stream.
* `StreamEvent`: Generic stream event envelope carrying chunks, progress markers, state updates, or errors.

### Progress Estimation & Tracking
* `ProgressEvent`: Structures progress information including current phase (`retrieving`, `generating`, `reasoning`), completion percentage, and estimated remaining seconds.
* `ProgressTracker`: Component interface allowing providers or routers to publish progress updates during processing.

### Stream Control & Cancellation
* `StreamController`: Manages state machine state changes including starting, pausing, resuming, cancelling, and closing active stream sessions.
* `CancellationToken`: Propagates immediate cancellation triggers across nested workers to cleanly terminate remote requests before the buffer completes.

### Serialization & Lifecycle Events
* `StreamSerializer`: Abstract contract to serialize and deserialize `StreamEvents` to/from strings or binary frames safely.
* `Events`: Lightweight event structures including `StreamStartedEvent`, `StreamCompletedEvent`, and `StreamCancelledEvent` for auditable tracking.
