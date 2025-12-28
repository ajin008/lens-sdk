import { getConfig, setConfig } from "./config.js";
import { dispatchEvent } from "./dispatcher.js";
import { debugLog } from "./logger.js";
import type { LensEventPayload } from "./types.js";
import { validateEvent } from "./validator.js";
import { generateRequestId } from "./utils/id.js";

export type LensInitOptions = {
  apiKey: string;
  endpoint?: string;
  environment?: "production" | "staging" | "development";
  debug?: boolean;
};

export type LensEvent = {
  model: string;
  latency_ms: number;
  tokens: number;
  cost_usd?: number;
  status: "success" | "error";

  user_id?: string;
  feature?: string;
  metadata?: Record<string, unknown>;
};

export function init(options: LensInitOptions): void {
  if (!options?.apiKey) {
    return;
  }

  setConfig({
    apiKey: options.apiKey,
    endpoint: options.endpoint ?? "http://localhost:8080/v1/events",
    environment: options.environment ?? "production",
    debug: options.debug ?? false,
    sdk_version: "0.1.0",
    runtime: "node",
  });
}

export function track(event: LensEvent): void {
  const config = getConfig();
  if (!config) return;

  const validation = validateEvent(event);

  if (!validation.valid) {
    debugLog(config.debug, "Event dropped:", validation.reason, event);
    return;
  }

  const payload: LensEventPayload = {
    model: event.model,
    latency_ms: event.latency_ms,
    tokens: event.tokens,
    cost_usd: event.cost_usd,
    status: event.status,

    user_id: event.user_id,
    feature: event.feature,
    metadata: event.metadata,

    environment: config.environment,
    sdk_version: config.sdk_version,
    runtime: config.runtime,
    timestamp: new Date().toISOString(),
    request_id: generateRequestId(),
    sent_at: new Date().toISOString(),
  };

  void dispatchEvent(payload, config.endpoint, config.apiKey, config.debug);
}
