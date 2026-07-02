# Changelog

All notable changes to the `@sbb/types` package will be documented in this file.

## [1.0.0] - 2026-07-02

### Added
- Created the core shared types package (`@sbb/types`) defining the central domain models of the SBB Platform.
- Declared foundational interfaces (`Timestamped`, `BaseEntity`) and utility type primitives (`Nullable`, `Dictionary`, `CustomMetadata`) in `common`.
- Structured API communication standards containing single/paginated responses, parameter structures, page boundary metrics, and error payload definitions.
- Created robust `identity` schemas modeling user profiles, lifecycle states (`active`, `suspended`, `pending_invitation`), active device sessions, and authorization permission controls.
- Defined workspace structures inside `organization` documenting organizational contexts, subscription plans, settings, and member mappings.
- Implemented `tenant` configurations tracking subdomain routing, active hosting status, resource caps, and geographic region permissions.
- Outlined compliance logs inside `audit` containing severities, initiator descriptors, custom change diff fields, and security tracks.
- Modeled approval templates in `workflow` defining step sequences, run monitors, outcomes, and step transition lines.
- Programmed generative schemas inside `ai` detailing participant roles, message trails, model parameter configurations, and token calculation limits.
- Described service linkers inside `integration` modeling active platform profiles, outgoing Webhook scopes, and system syncing run logs.
