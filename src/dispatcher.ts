import { debugLog } from "./logger.js";
import type { LensEventPayload } from "./types.js";

export async function dispatchEvent(
  payload: LensEventPayload,
  endpoint: string,
  apiKey: string,
  debug: boolean
): Promise<void> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2000);

    await fetch(endpoint, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeout);
  } catch (err) {
    debugLog(debug, "event_dispatch_failed", err);
  }
}
