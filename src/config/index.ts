import commonConfig from './common';
import devConfig from './development';
import prodConfig from './production';

const getConfig = () => {
  const isLocal = import.meta.env.DEV;
  if (isLocal) {
    return { ...commonConfig, ...devConfig };
  }

  // vercel deploy
  const branch = import.meta.env.VITE_VERCEL_GIT_COMMIT_REF;
  if (branch) {
    switch (branch) {
      // explicitly setting configurations for specific branches for future flexibility,
      // such as renaming branches or adding new ones
      case 'main':
      case 'staging':
        return { ...commonConfig, ...prodConfig };
      case 'dev':
        return { ...commonConfig, ...devConfig };
      default:
        return { ...commonConfig, ...prodConfig };
    }
  }

  // other platform deploy
  const isProd = import.meta.env.PROD;
  if (isProd) {
    return { ...commonConfig, ...prodConfig };
  }

  // default
  return { ...commonConfig, ...devConfig };
};

const config = getConfig();

export default config;
