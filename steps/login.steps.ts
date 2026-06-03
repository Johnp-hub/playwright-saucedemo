import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const { Given, When, Then } = createBdd();

Given('que el usuario navega a la página de inicio de sesión', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navegar();
});

When('el usuario ingresa las credenciales de un {string}', async ({ page }, rol: string) => {
  
  // El diccionario se queda exactamente igual (Seguro y encapsulado)
  const diccionarioCredenciales = {
    USUARIO_VÁLIDO: {
      user: process.env.TEST_USER,
      pass: process.env.TEST_PASSWORD
    },
    USUARIO_INVÁLIDO: {
      user: process.env.LOCKED_OUT_USER,
      pass: process.env.LOCKED_OUT_PASSWORD
    }
  };

  const credenciales = diccionarioCredenciales[rol as keyof typeof diccionarioCredenciales];

  if (!credenciales || !credenciales.user || !credenciales.pass) {
    throw new Error(`❌ Error de Seguridad: Las credenciales para el rol "${rol}" no están configuradas.`);
  }

  // 2. CORRECCIÓN CLAVE: Ahora usamos 'page' directamente, NO 'this.page'
  await page.locator('[data-test="username"]').fill(credenciales.user);
  await page.locator('[data-test="password"]').fill(credenciales.pass);
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