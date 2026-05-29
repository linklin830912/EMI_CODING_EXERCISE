import type { RepairEvent } from './types';

/**
 * Seed data so the admin view has something to render before a technician
 * taps anything. A handful of past breakdowns across the status range.
 *
 * Times are anchored to "yesterday" so they remain plausible no matter when
 * the app is opened. Feel free to add more, or to compute timestamps relative
 * to now if you'd rather.
 */

export const yesterday = (hours: number, minutes: number): { timestamp: string, time: number } => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  d.setHours(hours, minutes, 0, 0);
  return { timestamp: d.toISOString(), time: d.getTime() };
};

export const SEED_EVENTS: RepairEvent[] = [
  {
    id: 'RE-2401',
    asset: 'CAT 793F #12',
    system: 'Hydraulic',
    registeredBy: 'J Smith',
    registeredAt: yesterday(8, 12),
    status: 'Completed',
    entries: [
  { type: "milestone", kind: "StartBreakdown", at: { timestamp: "08:12", time: 1779919920000 }, by: "J Smith" },
  { type: "milestone", kind: "ArrivedAtMachine", at: { timestamp: "08:18", time: 1779920280000 }, by: "J Smith" },
  { type: "annotation", kind: "Finding", at: { timestamp: "08:22", time: 1779920520000 }, by: "J Smith", text: "Hydraulic hose split near the hoist cylinder. Wet ground around the boom." },
  { type: "milestone", kind: "ProblemIdentified", at: { timestamp: "08:25", time: 1779920700000 }, by: "J Smith" },
  { type: "annotation", kind: "Note", at: { timestamp: "08:27", time: 1779920820000 }, by: "J Smith", text: "Calling M Perez over - needs two on this." },
  { type: "milestone", kind: "StartRepair", at: { timestamp: "08:30", time: 1779921000000 }, by: "M Perez" },
  { type: "annotation", kind: "Action", at: { timestamp: "08:45", time: 1779921900000 }, by: "M Perez", text: "Hose replaced. System pressure tested." },
  { type: "annotation", kind: "Part", at: { timestamp: "08:47", time: 1779922020000 }, by: "M Perez", text: "HYD-HOSE-2456" },
  { type: "milestone", kind: "RepairComplete", at: { timestamp: "09:02", time: 1779922920000 }, by: "M Perez" },
  { type: "milestone", kind: "ReturnToService", at: { timestamp: "09:05", time: 1779923100000 }, by: "J Smith" },
],
  },
  {
    id: 'RE-2402',
    asset: 'KOM 980E #07',
    system: 'Drivetrain',
    registeredBy: 'A Nguyen',
    registeredAt: yesterday(11, 4),
    status: 'Completed',
    entries: [
  { type: "milestone", kind: "StartBreakdown", at: { timestamp: "11:04", time: 1779966240000 }, by: "A Nguyen" },
  { type: "milestone", kind: "ArrivedAtMachine", at: { timestamp: "11:19", time: 1779967140000 }, by: "A Nguyen" },
  { type: "milestone", kind: "ProblemIdentified", at: { timestamp: "11:41", time: 1779968460000 }, by: "A Nguyen" },
  { type: "annotation", kind: "Finding", at: { timestamp: "11:43", time: 1779968580000 }, by: "A Nguyen", text: "Final drive seal failure, oil contamination evident." },
  { type: "milestone", kind: "StartRepair", at: { timestamp: "11:50", time: 1779969000000 }, by: "A Nguyen" },
  { type: "milestone", kind: "RepairComplete", at: { timestamp: "13:22", time: 1779974520000 }, by: "A Nguyen" },
  { type: "milestone", kind: "ReturnToService", at: { timestamp: "13:30", time: 1779975000000 }, by: "A Nguyen" },
],
  },
  {
    id: 'RE-2403',
    asset: 'LIE R 9400 #03',
    system: 'Electrical',
    registeredBy: 'K Patel',
    registeredAt: {time:0, timestamp:"14:31"},
    status: 'Stopped',
    entries: [
      { type: 'milestone', kind: 'StartBreakdown',    at: {time:0, timestamp:"12:52"}, by: 'K Patel' },
      { type: 'milestone', kind: 'ArrivedAtMachine',  at: {time:0, timestamp:"13:41"}, by: 'K Patel' },
      { type: 'annotation', kind: 'Note',             at: {time:0, timestamp:"14:31"}, by: 'K Patel',
        text: 'Stopped for shift change. Handing over to night crew.' },
    ],
  },
];

export const DEFAULT_REPAIR_EVENT_DATA = {
  id: 'RE-240X',
  asset: 'LIE R 9400 #0X',
  system: 'K Patel',
  registeredBy: 'Electrical'
};