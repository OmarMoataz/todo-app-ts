/// <reference types="vite/client" />

export interface ImportMetaEnv {
  readonly VITE_USERS_API: string
  readonly VITE_TODOS_API: string
  // more env variables...
}

export interface ImportMeta {
  readonly env: ImportMetaEnv
}