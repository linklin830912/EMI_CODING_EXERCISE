export function getTimeStamp(startTime: number): { timestamp: string, time: number } { 
    const now = Date.now();
    const diffMs = Date.now() - startTime;

    const totalSeconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return {
        timestamp: `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`,
        time: now
    };
}