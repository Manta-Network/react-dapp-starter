import developmentConfig from './development.config';
import previewConfig from './preview.config';
import productionConfig from './production.config';

const envConfig = {
  production: productionConfig,
  preview: previewConfig,
  development: developmentConfig
};

export const __ENV__ = __APP_ENV__.VERCEL_ENV;

export const appConfig = envConfig[__ENV__];
