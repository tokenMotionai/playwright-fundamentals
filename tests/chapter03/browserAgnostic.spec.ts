import {test, expect } from '@playwright/test';
test('should navigate to sweets page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveTitle(/Swag Labs/);
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});