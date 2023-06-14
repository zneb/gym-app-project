import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "ngo.doflami.nebzapp",
  appName: "nebzapp",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

export default config;
