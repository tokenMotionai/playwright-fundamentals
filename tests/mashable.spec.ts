import { test, expect } from '@playwright/test';

test('Mashable blog functionality test', async ({ page }) => {
  await page.goto('https://mashable.com', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await expect(page).toHaveTitle(/Mashable/);
  await expect(page.locator('body')).toBeVisible();
});
