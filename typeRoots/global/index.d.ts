declare global {
  const __APP_ENV__: {
    VERCEL_ENV: 'production' | 'preview' | 'development';
  };
}

export {};
