import { RepairEvent } from "@/lib/types";
import { getTimeStamp } from "./getTimeStamp";
import { DEFAULT_REPAIR_EVENT_DATA } from "@/lib/seed";

export function createDefaultEvent(id: number, startTime: number): RepairEvent {
    // TODO: id: number for generating id and assets
    return {
        id: `${DEFAULT_REPAIR_EVENT_DATA.id}_${id}`,
        asset: `${DEFAULT_REPAIR_EVENT_DATA.asset}-${id}`,
        system: DEFAULT_REPAIR_EVENT_DATA.system,
        registeredBy: DEFAULT_REPAIR_EVENT_DATA.registeredBy,
        registeredAt: getTimeStamp(startTime),
        status: 'Active',
        entries: [],
    };
}