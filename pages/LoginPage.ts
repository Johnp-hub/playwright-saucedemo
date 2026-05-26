import { type Locator, type Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async navegar() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(usuario: string, clave: string) {
    await this.usernameInput.fill(usuario);
    await this.passwordInput.fill(clave);
    await this.loginButton.click();
  }
}