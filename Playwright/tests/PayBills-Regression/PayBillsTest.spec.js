import { test, expect } from '@playwright/test';

test('Pay a Bill for Pay@ - Bill Reference : 115981111111111', async ({ page }) => {
  await page.goto('https://secure55.capitecbank.co.za/mobile/');
  await page.getByLabel('Account Number Required').fill('503152535');
  await page.getByLabel('PIN Required').fill('11111');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByLabel('Transact').click();
  await page.getByRole('tab', { name: 'Transact' }).click();
  await page.locator('a').filter({ hasText: 'Pay bills' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'payAt' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('115981111111111');
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'Pay' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
});
