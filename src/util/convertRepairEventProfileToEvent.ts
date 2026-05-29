import { RepairEvent, RepairEventProfile, RepairStatus } from "@/lib/types";

export function convertRepairEventProfileToEvent(profile: RepairEventProfile, event: RepairEvent, status: RepairStatus ):RepairEvent {
    return {
            id: event.id,
            asset: event.asset,
            system: event.system,
            registeredBy: event.registeredBy,
            status: status,
            registeredAt: profile.stages[0]!?.at,
            entries: profile.stages.flatMap(stage => stage.entries)
          } as RepairEvent
}