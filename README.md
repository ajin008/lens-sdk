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

Installation
Install dependencies
npm install

Development

All development happens inside the src/ directory.

Example:

// src/index.ts
export function trackEvent() {
  // implementation
}


TypeScript strict mode is enabled to ensure long-term safety and maintainability.

Scripts

Available npm scripts:

Script	Description
npm run build	Compile TypeScript → dist/
npm run prepublishOnly	Ensures build runs before publishing
Build

To compile the SDK:

npm run build


Output:

dist/index.js (ESM)

dist/index.d.ts

dist/index.d.ts.map

Publishing & Deployment

This package is designed for npm publishing.

Steps

Ensure build is clean:

npm run build


Publish:

npm publish


The prepublishOnly hook automatically builds the project before publishing.

TypeScript Configuration

Key highlights from tsconfig.json:

Target: ES2022

Module system: NodeNext

Strict mode enabled

Declaration files generated

Source → src/

Output → dist/

This setup ensures:

Modern Node.js compatibility

Correct ESM behavior

First-class type support for consumers

Usage

After installing the package:

import { trackEvent } from "@ak24/lens-sdk";

trackEvent({
  feature: "image_audit",
  model: "gemma3:4b"
});


(Actual API surface depends on your SDK implementation.)

Troubleshooting & Notes
ERR_MODULE_NOT_FOUND

Ensure Node.js version supports ESM

Do not mix require() with import

Types not resolving

Confirm dist/ exists

Ensure package consumers support ESM + types

Publishing issues

dist/ must be present

Version must be bumped before republishing
