"use client";

import { useState, useEffect } from "react";

export function LiveTelemetry() {
  const [timeString, setTimeString] = useState<string>("SYNCING TELEMETRY...");
  const [locationString, setLocationString] = useState<string>("LOCAL");

  useEffect(() => {
    // Extract location from the user's system timezone (e.g., "America/New_York" -> "AMERICA/NEW YORK")
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setLocationString(tz.toUpperCase().replace("_", " ").replace("/", " / "));

    // Update the clock every second
    const interval = setInterval(() => {
      const now = new Date();
      
      // Format: HH:MM:SS (24-hour)
      const time = now.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      });
      
      // Calculate UTC Offset dynamically
      const offsetMinutes = -now.getTimezoneOffset();
      const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
      const sign = offsetMinutes >= 0 ? '+' : '-';
      
      setTimeString(`${time} [UTC${sign}${offsetHours}]`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="justify-self-center hidden md:block">
      {locationString} — {timeString}
    </div>
  );
}