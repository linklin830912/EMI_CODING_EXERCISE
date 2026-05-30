# EMI Coding Exercise

# How to Run

```bash
npm install
npm run dev
```
---

# Trade-offs

## 1. `RepairEventProfile` data structure for active RepairEvent

### Context

For active RepairEvent, I introduced a separate `RepairEventProfile` structure with field `stages: RepairEventStage[]`. Each stage stores milestone-specific entries and state.

### Pros

* Keeps milestone-related state grouped together
* Makes stage transitions explicit in the data structure

### Cons

* To support flat chronological timeline in admin view, the current implementation converts the staged structure into a flat `RepairEvent.entries` array through `convertRepairEventProfileToEvent`, additional transformation layer between active and completed events


---

## 2. `RepairEventStore` state management structure

### Context

The store currently manages:

* the current timestamp from `ElapsedTimer`
* completed `RepairEvent[]` with `SEED_EVENTS` as initial data
* the active `RepairEventProfile` with `defaultRepairEventProfile` to generate initial data

### Pros

* Immutable updates are handled through shallow copying, which works well for the current object depth
* Separating the active repair from completed repairs simplified the tablet view implementation

### Cons

* As the application grows, nested updates may complicated
* The distinction between `RepairEvent` and `RepairEventProfile` could introduce duplication or synchronization complexity

---

## 3. Centralised constant configuration

### Context

Constants such as:

* metric thresholds: (`GOOD_METRIC=10`, `MID_METRIC=30`) under 10 minutes is a fast response, 10–30 minutes is acceptable, over 30 minutes warrants attention.
* button styles and colour mappings: `MILESTONE_BUTTONS_SEQUENCE: { title: string, color: MilestoneButtonColorsType, kind: MilestoneKind }[]`, `ANNOTATION_BUTTONS: { title: string, kind: AnnotationKind }[]`

are currently stored centrally in `types.ts`.

### Pros

* Keeps components relatively small and focused
* Avoids duplicated hardcoded values across the UI
* Makes milestone configuration easier to update in one place

### Cons

* Domain logic and presentation concerns currently live in the same layer
* Styling-related constants would be better separated into a theme or design token system
* Metric thresholds may eventually belong in a configurable business-rules layer rather than static constants
