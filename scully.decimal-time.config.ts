import { ScullyConfig } from '@scullyio/scully'

const wslConfig: Partial<ScullyConfig> = {
  puppeteerLaunchOptions: {
    executablePath: 'google-chrome-stable',
    args: [
      '--disable-gpu',
      '--renderer',
      '--no-sandbox',
      '--no-service-autorun',
      '--no-experiments',
      '--no-default-browser-check',
      '--disable-dev-shm-usage',
      '--disable-setuid-sandbox',
      '--no-first-run',
      '--no-zygote',
      '--single-process',
      '--disable-extensions',
    ],
  },
}

export const config: ScullyConfig = {
  // ...wslConfig,
  projectRoot: './src',
  projectName: 'decimal-time',
  outDir: './dist/static',
  routes: {},
}
