import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const { Given, When, Then } = createBdd();

Given('que el usuario navega a la página de inicio de sesión', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navegar();
});

When('el usuario ingresa el nombre de usuario {string}', async ({ page }, usuario: string) => {
  const loginPage = new LoginPage(page);
  await loginPage.usernameInput.fill(usuario);
});

When('la contraseña {string}', async ({ page }, clave: string) => {
  const loginPage = new LoginPage(page);
  await loginPage.passwordInput.fill(clave);
});

When('hace clic en el botón de ingresar', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.loginButton.click();
});

Then('debería ser redirigido a la página de productos', async ({ page }) => {
  await expect(page).toHaveURL(/.*inventory.html/);
});

Then('debería visualizar el título de la sección {string}', async ({ page }, titulo: string) => {
  await expect(page.locator('.title')).toHaveText(titulo);
});

Then('debería visualizar un mensaje de error que indica {string}', async ({ page }, mensaje: string) => {
  const loginPage = new LoginPage(page);
  await expect(loginPage.errorMessage).toContainText(mensaje);
});