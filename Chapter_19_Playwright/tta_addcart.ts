// @ts-ignore
import { test, expect } from '@playwright/test';
type Page = any;

test('test', async ({ page }: { page: Page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('abc');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('vvv');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="error"]').click();
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
});