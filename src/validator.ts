import type { LensEvent } from "./index.js";

export type ValidationResult =
  | { valid: true }
  | { valid: false; reason: string };

export function validateEvent(event: LensEvent): ValidationResult {
  if (!event.model || typeof event.model !== "string") {
    return { valid: false, reason: "Invalid model" };
  }

  if (typeof event.latency_ms !== "number" || event.latency_ms < 0) {
    return { valid: false, reason: "Invalid latency_ms" };
  }

  if (typeof event.tokens !== "number" || event.tokens < 0) {
    return { valid: false, reason: "Invalid tokens" };
  }

  if (event.status !== "success" && event.status !== "error") {
    return { valid: false, reason: "Invalid status" };
  }

  if (
    event.cost_usd !== undefined &&
    (typeof event.cost_usd !== "number" || event.cost_usd < 0)
  ) {
    return { valid: false, reason: "Invalid cost_usd" };
  }

  if (event.metadata !== undefined && typeof event.metadata !== "object") {
    return { valid: false, reason: "Invalid metadata" };
  }

  return { valid: true };
}
