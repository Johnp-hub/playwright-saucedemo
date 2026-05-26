import { type Locator, type Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartLink: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async agregarAlCarrito(nombreProducto: string) {
    // Formateamos el nombre para que coincida dinámicamente con el data-test
    const formatoId = nombreProducto.toLowerCase().replace(/ /g, '-');
    await this.page.locator(`[data-test="add-to-cart-${formatoId}"]`).click();
  }

  async irAlCarrito() {
    await this.cartLink.click();
  }

  async iniciarCheckout() {
    await this.checkoutButton.click();
  }
}