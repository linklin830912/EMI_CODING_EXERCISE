import { RepairEvent } from "@/lib/types";
import { getTimeStamp } from "./getTimeStamp";
import { DEFAULT_REPAIR_EVENT_DATA } from "@/lib/seed";

export function createDefaultEvent(id: number, startTime: number): RepairEvent {
    // TODO: id: number for generating id and assets
    return {
        id: DEFAULT_REPAIR_EVENT_DATA.id,
        asset: DEFAULT_REPAIR_EVENT_DATA.asset,
        system: DEFAULT_REPAIR_EVENT_DATA.system,
        registeredBy: DEFAULT_REPAIR_EVENT_DATA.registeredBy,
        registeredAt: { timestamp: getTimeStamp(startTime), time: startTime },
        status: 'Active',
        entries: [],
    };
}