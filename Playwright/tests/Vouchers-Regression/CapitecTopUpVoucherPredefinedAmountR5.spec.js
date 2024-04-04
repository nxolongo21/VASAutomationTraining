import { test, expect } from '@playwright/test';

test.use({ launchOptions: { slowMo: 1000 } })  //To slow down the motion of Test
test('Purchase Capitec TopUp Voucher - Savings account (Predefined amount) - R5', async ({ page }) => {
    await page.goto('https://secure55.capitecbank.co.za/mobile/');
    await page.getByLabel('Account Number Required').fill('503152535');
    await page.getByLabel('PIN Required').fill('11111');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'OK' }).click();
    await page.getByLabel('Transact').click();
    await page.getByRole('tab', { name: 'Transact' }).click();
    await page.locator('a').filter({ hasText: 'Buy vouchers' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.locator('li > .km-listview-wrapper > .cap-list-template > li > .cap-button-wrapper > div > .cap-tile-button').first().click();
    await page.getByLabel('R5', { exact: true }).click();
    await page.getByRole('button', { name: 'Buy' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
  });
