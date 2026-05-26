import { type Locator, type Page, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly confirmationHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.confirmationHeader = page.locator('[data-test="complete-header"]');
  }

  async completarFormulario(nombre: string, apellido: string, zip: string) {
    await this.firstNameInput.fill(nombre);
    await this.lastNameInput.fill(apellido);
    await this.postalCodeInput.fill(zip);
    await this.continueButton.click();
  }

  async finalizarCompra() {
    await this.finishButton.click();
  }

  async validarConfirmacion(mensaje: string) {
    await expect(this.confirmationHeader).toContainText(mensaje);
  }
}