import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nebz.app',
  appName: 'nebzapp',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
