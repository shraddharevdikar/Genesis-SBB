# Enterprise Notification Hub Foundation (RUN-006)

The Enterprise Notification Hub provides the defining, templates rendering, preferences matching, and delivery coordinating contracts for multi-channel business communications inside SBB. It defines providers-independent protocols (Email, SMS, Push, In-App, Slack, Teams, WhatsApp, Webhooks), quiet hours matching, customizable localization templates, and delivery performance metrics trackers.

The platform delegates the actual communication provider integration (SMTP, Twilio, Webhook calls) to the infrastructure adapters while preserving clean architectural core contracts.

## Directory Structure

```
packages/notification-hub/
├── README.md                    # Core architecture documentation
├── package.json                 # Package configurations
└── src/
    ├── index.ts                 # Export entry point for notification clients
    ├── core/
    │   ├── notification-hub.ts  # Core NotificationHub contract
    │   ├── notification-definition.ts # Design-time notification templates metadata
    │   ├── notification-instance.ts # Active execution communication envelope state
    │   ├── notification-context.ts # Dynamic template rendering state
    │   └── notification-lifecycle.ts # Transitions from QUEUED to SENDING, DELIVERED, READ or FAILED
    ├── identity/
    │   ├── notification-id.ts   # Unique identity value object for definitions
    │   ├── notification-instance-id.ts # Unique identity value object for active envelopes
    │   └── template-id.ts       # Unique identity value object for visual Templates
    ├── channels/
    │   ├── email-channel.ts     # Email envelope schema and CC/BCC/attachments structures
    │   ├── sms-channel.ts       # SMS phone numbers and GSM characters boundaries
    │   ├── push-channel.ts      # Push mobile sound payload identifiers
    │   ├── inapp-channel.ts     # In-App visual type indicators (Modals, banners, toast)
    │   ├── slack-channel.ts     # Slack Slack-Specific block kit visual structures
    │   ├── teams-channel.ts     # Microsoft Teams adaptive card schemas
    │   ├── whatsapp-channel.ts  # WhatsApp business variables components
    │   └── webhook-channel.ts   # Webhook callback URLs and HMAC signature metadata
    ├── templates/
    │   ├── notification-template.ts # Parent template placeholders and categorization
    │   ├── template-version.ts  # Semantic versions containing per-channel markups
    │   └── localization-template.ts # Multi-language translations mappings
    ├── delivery/
    │   ├── delivery-policy.ts   # Primary/secondary backup failover policies
    │   ├── retry-policy.ts      # Multi-stage backoff rules and dead-letter targets
    │   ├── delivery-window.ts   # System-wide operational calendar windows
    │   └── priority-policy.ts   # Bypass rules for high-priority notifications
    ├── preferences/
    │   ├── notification-preferences.ts # Multi-category channel opt-in configurations
    │   ├── user-preferences.ts  # Active timezone and global DND status override
    │   └── quiet-hours.ts       # User-localized hour-minute ranges and bypass rules
    ├── audience/
    │   ├── recipient.ts         # User contact detail mappings (emails, push tokens)
    │   ├── recipient-group.ts   # Nested teams and organizational structures
    │   └── audience-rule.ts     # Dynamically matched segmentations and filtering
    ├── governance/
    │   ├── notification-policy.ts # Frequency limits and strict laws compliance matching
    │   ├── notification-security.ts # Security level triggers clearance asserts
    │   └── notification-audit.ts  # Hash-masked immutable GDPR compliant ledger logs
    ├── metrics/
    │   ├── delivery-health.ts   # Active bounce rates, queue loads, and failures
    │   ├── delivery-performance.ts # Latencies tracking per channel
    │   └── engagement-metrics.ts # Click-through and read engagement rates analytics
    └── events/
        ├── notification-created.event.ts # Broadcasted on template creation
        ├── notification-queued.event.ts  # Broadcasted on enqueue
        ├── notification-delivered.event.ts # Broadcasted on target delivery success
        ├── notification-failed.event.ts # Broadcasted on exhaustion of retries
        └── notification-read.event.ts # Broadcasted on user visualization callback
```

## Out of Scope
* Direct SMTP, HTTP clients, or socket connections implementations.
* Third-party client libraries (e.g. Twilio SDK, Firebase Admin SDK).
* UI interface views, modals, and tables.
* Database drivers or configurations.
