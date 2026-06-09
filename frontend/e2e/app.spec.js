import { test, expect } from '@playwright/test';

test('page title is correct', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Demo App');
});

test('shows Demo App heading', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Demo App' })).toBeVisible();
});

test('shows Backend Status heading', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Backend Status' })).toBeVisible();
});

test('backend status shows UP', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('pre')).toContainText('"status": "UP"');
});

test('backend status is not UNREACHABLE', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('pre')).not.toContainText('UNREACHABLE');
});
