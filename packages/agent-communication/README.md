# Enterprise Agent Communication (AGT-006)

The Enterprise Agent Communication module defines how SBB's **Digital Employees** interact, coordinate, and collaborate with human supervisors, internal corporate systems, and external commuters under strict enterprise compliance rules.

Rather than simple unstructured text streams or unregulated messaging lines, SBB's Communication system forms a fully governed collaboration platform with structured message payloads, classified intents, sandboxed routing rules, dynamic SLA-based escalation hierarchies, and privacy filters.

## Directory Structure

```
packages/agent-communication/
├── README.md                    # Core architecture specifications
├── package.json                 # Module configurations
└── src/
    ├── index.ts                 # Export entry point for communication clients
    ├── core/
    │   ├── agent-communication.ts # Main AgentCommunication contract
    │   ├── communication-session.ts # Interaction session lifecycle leases
    │   ├── conversation.ts      # Thread state containing participants and logs
    │   └── interaction-context.ts # Correlation, tenant, and trace headers
    ├── identity/
    │   ├── communication-id.ts  # Session identifier
    │   ├── conversation-id.ts   # Conversation block identifier
    │   └── message-id.ts        # Granular payload tracking ID
    ├── participants/
    │   ├── participant.ts       # Human operator, digital employee, or system participant
    │   ├── participant-role.ts  # Participant classifications enum
    │   └── recipient-group.ts   # Group distributions profiles
    ├── messages/
    │   ├── communication-message.ts # Gouverned payload with encryption supports
    │   ├── message-priority.ts  # Priority tiers (LOW to CRITICAL)
    │   └── message-status.ts    # Delivery and compliance redaction stages
    ├── intents/
    │   ├── communication-intent.ts # Extracted entities and classification scores
    │   └── intent-category.ts   # Structural intents categories enum
    ├── attachments/
    │   ├── attachment-reference.ts # Secure file reference hashes
    │   └── business-artifact.ts # Contextual database references
    ├── routing/
    │   ├── routing-profile.ts   # Queue load-balancing profiles
    │   ├── routing-policy.ts    # Dynamic dispatcher priorities
    │   └── escalation-path.ts   # SLA breaches multilevel escalation steps
    ├── security/
    │   ├── communication-policy.ts # GDPR filters and keyword blocks
    │   └── confidentiality-level.ts # Data privacy levels (PUBLIC to SECRET)
    ├── governance/
    │   ├── communication-audit.ts # Immutable trace events logs
    │   └── retention-policy.ts  # Message lifespans rules
    ├── metrics/
    │   ├── communication-metrics.ts # Latencies, failed message rates
    │   └── collaboration-metrics.ts # Handovers count and satisfaction index
    └── events/
        ├── communication-started.event.ts # Broadcasted when channels open
        ├── message-sent.event.ts        # Broadcasted on transmission
        ├── message-received.event.ts    # Broadcasted on delivery
        └── communication-completed.event.ts # Broadcasted when threads archive
```

## Out of Scope
* Integration or driver adapters for Slack, Microsoft Teams, WhatsApp, SMS, or SMTP.
* Physical database table setups or ORM entities generation.
* LLM translation layers or client UI elements.
