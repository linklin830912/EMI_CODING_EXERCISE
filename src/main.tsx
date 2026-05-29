import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';
import { clearEvents, saveEvents } from './lib/storage';
import { SEED_EVENTS } from './lib/seed';
import { StoreProvider } from './store/RepairEventStore';

clearEvents();
saveEvents(SEED_EVENTS);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>
);