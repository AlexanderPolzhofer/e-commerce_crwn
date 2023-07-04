/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_DB_CONNECTION: string
    readonly VITE_DB_NAME: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }