const { test, expect } = require('@playwright/test');

test('GitHub homepage opens', async ({ page }) => {
  await page.goto('https://github.com');
  await expect(page).toHaveTitle(/GitHub/);
});

test('Login page shows the form', async ({ page }) => {
  await page.goto('https://github.com/login');

  await expect(page.getByLabel('Username or email address')).toBeVisible();
  await expect(page.getByLabel('Password')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Sign in' })).toBeVisible();
});

test('Public repository page opens', async ({ page }) => {
  await page.goto('https://github.com/microsoft/playwright');
  await expect(page).toHaveTitle(/playwright/i);
});


test('Wrong login shows an error', async ({ page }) => {
  await page.goto('https://github.com/login');

  await page.getByLabel('Username or email address').fill('fake-user-for-testing-12345');
  await page.getByLabel('Password').fill('WrongPassword123');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page.getByText('Incorrect username or password')).toBeVisible();
});