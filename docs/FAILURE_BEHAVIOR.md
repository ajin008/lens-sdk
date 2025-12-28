# Lens SDK — Failure Behavior (V1)

This document defines how the Lens SDK behaves when failures occur.

---

## General Principles

- SDK never throws errors
- SDK never blocks application execution
- SDK failures are silent by default
- Debug logging is opt-in

---

## Failure Scenarios

### SDK not initialized

- Event is dropped
- No logs (unless debug enabled)

### Invalid event payload

- Event is dropped
- Debug log emitted once

### Network failure / timeout

- Event is dropped
- Debug log emitted once

### Backend 4xx / 5xx

- Event is dropped
- No retries
- Debug log emitted once

### Invalid API key

- Event is dropped
- No retries
- Debug log emitted once

---

## Retries

- No retries in V1
- Retry logic is deferred to V2+

---

## Logging

- Logs only appear when `debug: true`
- Same failure is logged once per process
- No console spam in production

---

## Guarantees

- SDK will not crash the host application
- SDK will not interfere with business logic
