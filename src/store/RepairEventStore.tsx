import { SEED_EVENTS } from "@/lib/seed";
import { defaultRepairEventProfile, RepairEvent, RepairEventProfile } from "@/lib/types";
import React, { createContext, useContext, useReducer } from "react";

type State = {
    repairEvents: RepairEvent[];
    activeStartTime: number | null;
    currentRepairEventProfile: RepairEventProfile;
};

type SetStartTimeAction = {
  type: "SET_START_TIME";
  payload: number;
};

type SaveRepairEventAction = {
  type: "SAVE_REPAIR_EVENT";
  payload: RepairEvent;
};

type SetCurrentRepairEventProfileAction = {
    type: "SET_CURRENT_REPAIR_PROFILE";
    payload: RepairEventProfile
}

type Action = SetStartTimeAction | SaveRepairEventAction | SetCurrentRepairEventProfileAction;

function setStartTime(state: State, action: { payload: number }): State {
  return {
    ...state,
    activeStartTime: action.payload,
  };
}

function saveRepairEvent(state: State, action: { payload: RepairEvent }): State { 
    const { payload } = action;
    return {
        ...state,
      repairEvents: [
          payload,
          ...state.repairEvents
        ],
    };
}

function setCurrentRepairProfile(state: State, action: { payload: RepairEventProfile }): State { 
    return {
        ...state,
        currentRepairEventProfile: action.payload,
    };
}

const reducers = {
    SET_START_TIME: setStartTime,
    SAVE_REPAIR_EVENT: saveRepairEvent,
    SET_CURRENT_REPAIR_PROFILE: setCurrentRepairProfile
} as const;

function reducer(state: State, action: Action): State {
  const handler = reducers[action.type];

  if (!handler) return state;

  return handler(state, action as any);
}

const StoreContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

const initialState: State = {
    repairEvents: SEED_EVENTS,
    activeStartTime: null,
    currentRepairEventProfile: defaultRepairEventProfile("")
};

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used inside StoreProvider");
  }
  return context;
}