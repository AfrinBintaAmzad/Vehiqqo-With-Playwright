const { test, expect } = require('@playwright/test');

test('vheiqqo landing page opens', async ({ page }) => {
  await page.goto('https://amraoui-hiredriver.vercel.app/')
  await expect(page).toHaveTitle(' Vehiqqo | Modern SaaS Platform');
});


test('vheiqqo login page shows the form', async ({ page }) => {
    await page.goto('https://amraoui-hiredriver.vercel.app/login')
    await expect(page).toHaveTitle(' Vehiqqo | Modern SaaS Platform');
});

test('vheiqqo shows the input field', async ({ page }) => {
  await page.goto('https://amraoui-hiredriver.vercel.app/login');
  await expect(page.getByPlaceholder('you@example.com')).toBeVisible();
  await expect(page.getByPlaceholder('••••••••')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
});

test ('vheiqqo wrong login shows an errror', async({page}) => {
    await page.goto('https://amraoui-hiredriver.vercel.app/login');
    await page.getByPlaceholder('you@example.com').fill('invalid@example.com');
    await page.getByPlaceholder('••••••••').fill('WrongPassword123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await expect(page.getByText('User does not exist')).toBeVisible();
});

test ('Verify forgot password workflow', async({page}) => {
    await page.goto('https://amraoui-hiredriver.vercel.app/login');
    await page.getByRole('link', { name: 'Forgot password?' }).click();
    await expect(page).toHaveTitle(' Vehiqqo | Modern SaaS Platform');
    await expect(page.getByRole('heading', { name: 'Forgot Password' })).toBeVisible();
    await expect(page.getByPlaceholder('you@example.com')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Send Reset Code' })).toBeVisible();

});

test ('Verify reset password workflow with valid email', async({page}) => {
    await page.goto('https://amraoui-hiredriver.vercel.app/forgot-password');
    await page.getByPlaceholder('you@example.com').fill('afrinbintaamzad@gmail.com');
    await page.getByRole('button', { name: 'Send Reset Code' }).click();
    await expect(page.getByText('Reset code sent to your email')).toBeVisible();
});


