# Five Things I Would Do Next

## 1. Improve event store architecture for multiple concurrent states
In the current simplified implementation, the store separates `repairEvents: RepairEvent[]` and `currentRepairEventProfile: RepairEventProfile`, assuming only one active repair event at a time.

To support real-world usage, this model would need to evolve to handle multiple concurrent active repairs.

A more scalable approach would be to:
- Treat all events uniformly in a single source of truth
- Derive `active`, `stopped`, and `completed` states from event status rather than separate storage
- Avoid adding the active event into the array manually when switching views

This would improve state consistency and support multi-device scenarios.

---

## 2. Introduce a more robust event sequencing model
Currently, ordering is based on array insertion order, which is unsafe if events are later received via API or multiple sources.

A more reliable approach:
- Treat (high-precision) timestamps as the primary ordering mechanism
- Use immutable event logs where ordering is derived, not stored
- In more complex systems, introduce a queue or broker to guarantee ordering consistency

This ensures event order remains correct in distributed environments.

---

## 3. Introduce a systematic design token and theming strategy
At the moment, UI colours and milestone styling are mapped through constant arrays linking `MilestoneKind`, labels, and colours.

While functional, this mixed domain logic with presentation details.

A better approach would be to:
- Introduce a central theme or design token system (colours, spacing, semantic states)
- Map domain concepts to semantic roles (ex: success / warning / danger) rather than direct colour values
- Apply styling consistently through a shared theme layer (CSS variables or token module)

This improves maintainability and makes future UI changes easier.

---

## 4. Introduce a flexible event querying and sorting layer
Events are currently implicitly sorted by creation time, which is sufficient for v1 but limits operational flexibility.

The next step would be to formalise event ordering into a dedicated query layer rather than embedding sorting logic in UI components.

This would enable:
- Sorting by multiple dimensions (creation time, completion time, duration, last activity)
- Filtering by event type (milestones vs annotations)
- Cross-event comparisons for analytics (ex: longest repair durations)

This prepare the system for future reporting and dashboard features.

---

## 5. Extend attribution model for milestone ownership changes
Currently, each repair event is associated with a single user (`registerBy`), which assumes ownership does not change during the lifecycle of an event.

In real operational contexts, responsibility may shift during a repair, especially in events that are put on hold or reassigned mid-repair.

A more flexible model would:
- Allow multiple users to be associated with a single event over time
- Track who performed each milestone or annotation individually

This reflects real-world maintenance workflows where multiple technicians may contribute to a single repair.