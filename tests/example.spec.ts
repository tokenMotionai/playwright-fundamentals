// import { test, expect } from '@playwright/test';
// test('take a simple screenshot for debugging', async ({ page }) => {
//     await page.goto('https://playwright.dev/');
//     // take a screenshot & save it as 'playwright_homepage'
//     await page.screenshot({
//         path: 'test-results/playwright_homepage.png'
//     });
// });

// import { test, expect } from '@playwright/test';
// test('Homepage should look the same',  async ({ page }) => {
//     await page.goto('https://practicesoftwaretesting.com/contact');
//     // this is the magic line
//     await expect(page).toHaveScreenshot('homepage.png');
// });


import { test, expect } from '@playwright/test';
test('Homepage should look the same',  async ({ page }) => {
    await page.goto('https://with-bugs.practicesoftwaretesting.com/#/contact');
    await expect(page).toHaveScreenshot('homepage.png');
});