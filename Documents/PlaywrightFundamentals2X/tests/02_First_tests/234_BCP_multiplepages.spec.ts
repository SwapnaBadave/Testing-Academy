import { test, expect } from '@playwright/test';

test('multi tab test in the same browser context', async ({ browser }) => {
  const context = await browser.newContext();

  // Tab 1
  const page1 = await context.newPage();
  await page1.goto('https://app.vwo.com/login');
  console.log('Tab 1: Dashboard');

  // Tab 2 - same context, shares cookies/local storage
  const page2 = await context.newPage();
  await page2.goto('https://app.vwo.com/#dashboard');
  console.log('Tab 2: Settings');

  await expect(page1).toHaveURL(/login/);
  await expect(page2).toHaveURL(/dashboard/);

  await Promise.all([page1.close(), page2.close(), context.close()]);
});
