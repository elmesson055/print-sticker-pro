import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.printstickerpro.app',
  appName: 'Print Sticker Pro',
  webDir: 'dist',
  server: {
    url: 'https://63c4bf99-2a82-4b8a-87ee-a497ff2e68e1.lovableproject.com?forceHideBadge=true',
    cleartext: true
  }
};

export default config;
