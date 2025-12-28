const LoggedMessages = new Set<string>();

export function debugLog(
  enabled: boolean,
  message: string,
  ...arg: unknown[]
): void {
  if (!enabled) return;
  console.log("[lens-sdk]", ...arg);

  if (LoggedMessages.has(message)) return;

  LoggedMessages.add(message);
  console.warn("[lens-sdk]", message, ...arg);
}
