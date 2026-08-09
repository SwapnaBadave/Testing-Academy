import { test, expect } from '@playwright/test';

test('multi user test with admin and viewer contexts', async ({ browser }) => {
  // Admin context
  const adminContext = await browser.newContext();
  const adminPage = await adminContext.newPage();
  await adminPage.goto('https://app.vwo.com/login');
  console.log('Admin: on login page');

  // Viewer context
  const viewerContext = await browser.newContext();
  const viewerPage = await viewerContext.newPage();
  await viewerPage.goto('https://app.vwo.com/login');
  console.log('Viewer: on login page');

  await expect(adminPage).toHaveURL(/login/);
  await expect(viewerPage).toHaveURL(/login/);

  await Promise.all([adminContext.close(), viewerContext.close()]);
});
