export type InternalConfig = {
  apiKey: string;
  endpoint: string;
  environment: string;
  debug: boolean;
  sdk_version: string;
  runtime: "node";
};

let config: InternalConfig | null = null;

export function setConfig(nextConfig: InternalConfig): void {
  if (config) {
    // config already set → ignore
    return;
  }
  config = nextConfig;
}

export function getConfig(): InternalConfig | null {
  return config;
}
