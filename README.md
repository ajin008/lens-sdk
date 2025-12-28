# Lens SDK

A lightweight **TypeScript SDK for AI observability and tracking**.  
Designed to be simple, strongly typed, and future-proof — easy to maintain even years later.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Development](#development)
- [Scripts](#scripts)
- [Build](#build)
- [Publishing & Deployment](#publishing--deployment)
- [TypeScript Configuration](#typescript-configuration)
- [Usage](#usage)
- [Troubleshooting & Notes](#troubleshooting--notes)

---

## Overview

**Lens SDK** provides a clean foundation for tracking and observing AI-related events such as:
- model usage
- latency
- token counts
- request metadata

This repository contains the **core SDK package**, written in TypeScript and compiled to ESM-compatible JavaScript.

---

## Features

- Fully written in **TypeScript**
- Emits **type declarations** (`.d.ts`)
- ESM-first (`type: module`)
- Clean build output
- Minimal dependencies
- Ready for npm publishing

---

## Tech Stack

- **TypeScript** (v5+)
- **Node.js** (ESM / NodeNext resolution)
- No runtime dependencies

---

## Project Structure

```text
.
├── src/                 # SDK source code
│   └── index.ts
├── dist/                # Compiled output (generated)
│   ├── index.js
│   ├── index.d.ts
│   └── index.d.ts.map
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md

```

## Installation

Install dependencies:

```bash
npm install

```

// src/index.ts
export function trackEvent() {
  // implementation
}

| Script                   | Description                          |
| ------------------------ | ------------------------------------ |
| `npm run build`          | Compile TypeScript → `dist/`         |
| `npm run prepublishOnly` | Ensures build runs before publishing |

##Build
##To compile the SDK:
npm run build

##Publishing & Deployment
##This package is designed for npm publishing.
npm run build
npm publish

##Usage
##After installing the package:
import { trackEvent } from "@ak24/lens-sdk";

trackEvent({
  feature: "image_audit",
  model: "gemma3:4b"
});
