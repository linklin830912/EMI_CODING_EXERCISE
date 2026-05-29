/**
 * Domain types for the Repair Event exercise.
 *
 * You can extend, narrow, or replace these. They're a starting point.
 * See BRIEF.md and design-reference/mockup.md for behaviour.
 */

export type MilestoneKind =
  | 'StartBreakdown'
  | 'ArrivedAtMachine'
  | 'ProblemIdentified'
  | 'StartRepair'
  | 'RepairComplete'
  | 'ReturnToService';

export type AnnotationKind = 'Finding' | 'Action' | 'Part' | 'Note';

export type RepairStatus = 'Active' | 'Stopped' | 'Completed';

export type ISODateString = { timestamp: string, time: number };

export type MilestoneEntry = {
  type: 'milestone';
  kind: MilestoneKind;
  at: ISODateString;
  by: string;
};

export type AnnotationEntry = {
  type: 'annotation';
  kind: AnnotationKind;
  at: ISODateString;
  by: string;
  text: string;
};

export type Entry =
  | MilestoneEntry
  | AnnotationEntry;

export type RepairEvent = {
  id: string;
  asset: string;
  system: string;
  registeredBy: string;
  registeredAt: ISODateString;
  status: RepairStatus;
  entries: Entry[];
};

/**
 * The ordered milestone sequence. The next-tappable milestone is the first
 * one in this list that doesn't yet appear in the event's entries.
 */
export const MILESTONE_SEQUENCE: readonly MilestoneKind[] = [
  'StartBreakdown',
  'ArrivedAtMachine',
  'ProblemIdentified',
  'StartRepair',
  'RepairComplete',
  'ReturnToService',
] as const;

export const MILESTONE_BUTTONS_SEQUENCE: readonly { title: string, color: MilestoneButtonColorsType, kind: MilestoneKind }[] = [
  { title: 'Start Breakdown', color: 'red', kind: 'StartBreakdown' },
  { title: 'Arrived At Machine', color: 'orange', kind: 'ArrivedAtMachine' },
  { title: 'Problem Identified', color: 'gold', kind: 'ProblemIdentified' },
  { title: 'Start Repair', color: 'orange', kind: 'StartRepair' },
  { title: 'Repair Complete', color: 'green', kind: 'RepairComplete' },
  { title: 'Return To Service', color: 'green', kind: 'ReturnToService' },
] as const;

export type RepairEventStage = {
  registeredBy: string;
  milestone: MilestoneKind;
  at: ISODateString;
  completed: boolean;
  entries: Entry[]
};

export type RepairEventProfile = {
  step: number;
  stages: RepairEventStage[]
};