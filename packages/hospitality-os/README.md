# SBB HospitalityOS Foundation (BOSF-028)

The Hospitality Operating System (HospitalityOS) is SBB's core industry-specific operating system designed to orchestrate guest lifecycles, manage guest profiles and loyalty levels, track room inventory and clean/dirty statuses, coordinate housekeeping schedules and maintenance requests, process dining, spa, and fitness center bookings, manage conference and banquet events, issue guest folios and invoices, and deliver analytics such as occupancy forecasts and dynamic pricing under human-supervised AI guidance.

## Modules Included

* **core/**: Hospitality framework context, guest lifecycles, and main HospitalityFramework contract.
* **guests/**: Guest registries, contact profiles, loyalty membership standings, and specialized stay preferences.
* **reservations/**: Accommodation bookings, room assignment grids, cancellation flows, and room lock/holds.
* **rooms/**: Room categories, active room statuses, amenities lists, and capacity limits.
* **housekeeping/**: Room cleaning tasks, scheduled rotas, and physical engineering maintenance issues.
* **food-beverage/**: Restaurant properties, table reservations, digital menus, and room-service order entries.
* **facilities/**: Luxury spa treatments, fitness center coordinates, swimming pool timetables, and facility reservations.
* **billing/**: Centralized guest folios, itemized point-of-sale line charges, tax computations, and pre-authorizations.
* **analytics/**: RevPAR performance charts, ADR indices, room occupancy ratios, and hospitality KPIs.
* **ai/**: Deep occupancy forecasting models, automated dynamic pricing optimizations, and sentiment analysis.
* **events/**: Business-level events (reservation confirmed, guest checked in, housekeeping finished, guest checked out, event booked).
