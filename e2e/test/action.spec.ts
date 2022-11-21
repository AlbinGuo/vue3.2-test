import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:3001/');
    await page.getByPlaceholder('请输入姓').click();
    await page.getByPlaceholder('请输入姓').fill('刘');
    await page.getByPlaceholder('请输入姓').press('Tab');
    await page.getByPlaceholder('请输入名').fill('玄德');
    await page.getByPlaceholder('请输入名').press('Enter');
});