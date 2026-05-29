import React, { createContext, useContext, useReducer } from "react";

type Event = {
  id: string;
  status: "active" | "completed";
};

type State = {
    events: Event[];
    activeStartTime: number | null;
};

type SetStartTimeAction = {
  type: "SET_START_TIME";
  payload: number;
};

type Action = SetStartTimeAction;

function setStartTime(state: State, action: { payload: number }): State {
  return {
    ...state,
    activeStartTime: action.payload,
  };
}

/* -------------------- reducer map -------------------- */

const reducers = {
    SET_START_TIME: setStartTime,
} as const;

/* -------------------- main reducer -------------------- */

function reducer(state: State, action: Action): State {
  const handler = reducers[action.type];

  if (!handler) return state;

  return handler(state, action as any);
}

/* -------------------- context store -------------------- */

const StoreContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

const initialState: State = {
  events: [],
  activeStartTime: null,
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