/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_MODE: 'development' | 'staging' | 'production';
  APPLICATION_NAME: string;
  APPLICATION_DESCRIPTION: string;
  APPLICATION_URL: string;
  WALLET_CONNECT_PROJECT_ID: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

