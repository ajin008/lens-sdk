export type LensEventPayload = {
  model: string;
  latency_ms: number;
  tokens: number;
  cost_usd?: number;
  status: "success" | "error";

  user_id?: string;
  feature?: string;
  metadata?: Record<string, unknown>;

  environment: string;
  sdk_version: string;
  runtime: "node";
  timestamp: string;

  // PHASE 7 additions
  request_id: string;
  sent_at: string;
};
