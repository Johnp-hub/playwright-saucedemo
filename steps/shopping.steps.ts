import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

const { Given, When, Then } = createBdd();

// Reutilizamos el login para los Antecedentes de shopping
Given('que el usuario ha iniciado sesión correctamente', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navegar();
  await loginPage.login('standard_user', 'secret_sauce');
});

When('el usuario hace clic en {string} del producto {string}', async ({ page }, accion: string, producto: string) => {
  const cartPage = new CartPage(page);
  await cartPage.agregarAlCarrito(producto);
});

Then('el icono del carrito debe mostrar un indicador de {string} producto agregado', async ({ page }, cantidad: string) => {
  await expect(page.locator('.shopping_cart_badge')).toHaveText(cantidad);
});

Given('que el usuario ha agregado el producto {string} al carrito', async ({ page }, producto: string) => {
  const cartPage = new CartPage(page);
  await cartPage.agregarAlCarrito(producto);
});

When('el usuario navega hacia el carrito de compras', async ({ page }) => {
  const cartPage = new CartPage(page);
  await cartPage.irAlCarrito();
});

Then('debería ver el producto {string} en la lista de artículos seleccionados', async ({ page }, producto: string) => {
  await expect(page.locator('.inventory_item_name')).toHaveText(producto);
});

Given('que el usuario tiene productos en el carrito', async ({ page }) => {
  const cartPage = new CartPage(page);
  await cartPage.agregarAlCarrito('Sauce Labs Backpack');
});

Given('se encuentra en la pantalla de revisión del carrito', async ({ page }) => {
  const cartPage = new CartPage(page);
  await cartPage.irAlCarrito();
});

When('completa el formulario de envío con sus datos', async ({ page }) => {
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  await cartPage.iniciarCheckout(); // Viene de CartPage o se llama aquí
  await checkoutPage.completarFormulario('John', 'Anton', '15073');
});

When('confirma la orden en el paso final', async ({ page }) => {
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.finalizarCompra();
});

Then('debería visualizar el mensaje de confirmación {string}', async ({ page }, mensaje: string) => {
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.validarConfirmacion(mensaje);
});