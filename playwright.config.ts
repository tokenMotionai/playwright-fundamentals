import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: [["html", { open: "never" }]],
  projects: [
    {
      name: "chromium",
      use: {
        headless: false,
        ...devices["Desktop Chrome"],
        screenshot: "only-on-failure",
        trace: "on-first-retry",
        // Capture screenshot after each test failure.
        // You can also configure other recording options here,
        // like video or trace, which are also very useful for debugging.
        // video: 'on-first-retry', // Example: record video on first retry
        // trace: 'on-first-retry', // Example: record trace on first retry
        video: {
          mode: "on",
          // optional: specify video resolution
          size: { width: 1280, height: 720 },
        },
        // you also need to specify a directory for the videos
        contextOptions: {
          recordVideo: {
            dir: "test-results/my-videos/", //output directory
          },
        },
        launchOptions: {
          slowMo: 1000,
        },
      },
    },
  ],
  // other configs
});

//Node.js/typescript config for enabling devtools
// import { chromium, Browser, BrowserContext, Page } from '@playwright';
// (async () => {
//   const browserHeadful: Broswser = await chromium.laaunch({
//      headless: false,
//      devtools: true,
//      slowMo: 50,
//  });
//  const context: BrowserContext = await browserHeadful.newContext();
//  page: Page = await context.newPage();
//  page.goto('https://playwright.dev/');
//  page.screenshot({ path: 'example.png' });
//  browseHeadful.close();
//}

// module.exports = defineConfig({
//  use: {
//    headless: !!process.env.CI, //true in CI, false in locally -    **!!process.env.LOCAL**, true local, false in CI*?
//  }
//});

// import { PlaywrightTestConfig } from '@playwrightt/test';
// const config: PlaywrightTestConfig = {
//   workers: ProcessingInstruction.env.CI ? 2 : undefined,
//   use: {
//     // other browser options
//   },
// };
// export default config;

//sharding/splitting tests
// import { defineConfig } from '@playwright/test';
// export default defineConfig({
//   shard: {
//     total: 3, //total number of shards
//     current: 1, // this shard instance
//   };
// });
