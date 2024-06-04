import developmentConfig from "./development.config";
import previewConfig from "./preview.config";
import productionConfig from "./production.config";

export const __ENV__ = __APP_ENV__.VERCEL_ENV;

const envConfig = {
  production: productionConfig,
  preview: previewConfig,
  development: developmentConfig,
};

export const appConfig = envConfig[__ENV__];
