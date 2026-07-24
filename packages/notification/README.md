# @sbb/notification — Enterprise Notification Service

Enterprise-grade multi-channel notification service for Genesis-SBB supporting Email, SMS, WhatsApp, Push, and In-App notifications.

## Features
- **Multi-Channel Dispatcher**: Modular provider interface (`EMAIL`, `SMS`, `WHATSAPP`, `PUSH`, `IN_APP`).
- **Template Engine**: Handlebars rendering with custom helpers (`uppercase`, `formatDate`, `default`) and automatic variable extraction.
- **Queue & Scheduling**: Immediate, delayed, and scheduled job processing with Dead Letter Queue (DLQ) support.
- **Retry Policy**: Exponential backoff retry handling with configurable max retries.
- **User & Tenant Preferences**: Granular channel toggles, quiet hours evaluation, emergency overrides, and tenant branding injection.
- **Observability**: Delivery metrics, success/failure rate calculations, and provider latency tracking.
- **Audit & Event Bus Integration**: Automatically records audit logs and publishes domain events.
- **Multi-Tenant Scoping**: Strict tenant boundaries across all notification operations.

## REST Endpoints
- `POST /notifications/send`: Send a single notification.
- `POST /notifications/schedule`: Schedule a delayed notification.
- `GET /notifications`: Retrieve notification history with filtering and tenant isolation.
- `GET /notifications/metrics`: Get real-time delivery metrics.
- `POST /notifications/templates`: Create notification template.
- `PUT /notifications/templates/:id`: Update notification template.
- `GET /notifications/templates`: List notification templates.
- `POST /notifications/preferences`: Set or update user notification preferences.
- `GET /notifications/preferences`: Get user notification preferences.
