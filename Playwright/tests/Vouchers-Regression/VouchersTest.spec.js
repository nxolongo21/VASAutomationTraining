import { test, expect } from '@playwright/test';

test.use({ launchOptions: { slowMo: 1000 } })  //To slow down the motion of Test
test('Purchase Pick n Pay Voucher - Savings account (Predefined amount) - R50', async ({ page }) => {
  await page.goto('https://secure55.capitecbank.co.za/mobile/');
  await page.getByLabel('Account Number Required').fill('506795365');
  await page.getByLabel('PIN Required').fill('11111');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByLabel('Transact').click();
  await page.getByRole('tab', { name: 'Transact' }).click();
  await page.locator('a').filter({ hasText: 'Buy vouchers' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('li:nth-child(3) > .km-listview-wrapper > .cap-list-template > li > .cap-button-wrapper > div > .cap-tile-button').first().click();
  await page.getByLabel('R50', { exact: true }).click();
  await page.getByLabel('Cellphone Number').click();
  await page.getByLabel('Cellphone Number').fill('0694741332');
  await page.getByRole('button', { name: 'Buy' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
});

//test.use({ launchOptions: { slowMo: 1000 } })  //To slow down the motion of Test
test('Purchase Pick n Pay Voucher - Savings account (Own amount) - R370', async ({ page }) => {
  await page.goto('https://secure55.capitecbank.co.za/mobile/');
  await page.getByLabel('Account Number Required').fill('506795365');
  await page.getByLabel('PIN Required').fill('11111');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByLabel('Transact').click();
  await page.getByRole('tab', { name: 'Transact' }).click();
  await page.locator('a').filter({ hasText: 'Buy vouchers' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('li:nth-child(3) > .km-listview-wrapper > .cap-list-template > li > .cap-button-wrapper > div > .cap-tile-button').first().click();
  await page.getByLabel('R', { exact: true }).click();
  await page.getByLabel('R', { exact: true }).fill('37.000');
  await page.getByLabel('Cellphone Number').click();
  await page.getByLabel('Cellphone Number').fill('0607701993');
  await page.getByRole('button', { name: 'Buy' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
});
  
test('Purchase Pick n Pay Clothing Voucher - Savings account (Predefined amount) - R50', async ({ page }) => {
  await page.goto('https://secure55.capitecbank.co.za/mobile/');
  await page.getByLabel('Account Number Required').fill('506795365');
  await page.getByLabel('PIN Required').fill('11111');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByLabel('Transact').click();
  await page.getByRole('tab', { name: 'Transact' }).click();
  await page.locator('a').filter({ hasText: 'Buy vouchers' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('li:nth-child(3) > .km-listview-wrapper > .cap-list-template > li > .cap-button-wrapper > div > .cap-tile-button').first().click();
  await page.getByLabel('R50', { exact: true }).click();
  await page.getByLabel('Cellphone Number').click();
  await page.getByLabel('Cellphone Number').fill('0694741332');
  await page.getByRole('button', { name: 'Buy' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
});

//test.use({ launchOptions: { slowMo: 1000 } })  //To slow down the motion of Test
test('Purchase Pick n Pay Clothing Voucher - Savings account (Own amount) - R370', async ({ page }) => {
  await page.goto('https://secure55.capitecbank.co.za/mobile/');
  await page.getByLabel('Account Number Required').fill('506795365');
  await page.getByLabel('PIN Required').fill('11111');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByLabel('Transact').click();
  await page.getByRole('tab', { name: 'Transact' }).click();
  await page.locator('a').filter({ hasText: 'Buy vouchers' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('li:nth-child(3) > .km-listview-wrapper > .cap-list-template > li > .cap-button-wrapper > div > .cap-tile-button').first().click();
  await page.getByLabel('R', { exact: true }).click();
  await page.getByLabel('R', { exact: true }).fill('37.000');
  await page.getByLabel('Cellphone Number').click();
  await page.getByLabel('Cellphone Number').fill('0607701993');
  await page.getByRole('button', { name: 'Buy' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
});

  