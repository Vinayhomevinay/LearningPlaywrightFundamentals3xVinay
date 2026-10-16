import { type Locator, type Page } from '@playwright/test';

export class Loginpage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.getByTestId("username").or(page.getByRole("textbox", { name: "Username" })).or(page.locator("#user-name"));
    this.password = page.getByTestId("password").or(page.getByRole("textbox", { name: "Password" })).or(page.locator("#password"));
    this.loginButton = page.getByTestId("login-button").or(page.getByRole("button", { name: "Login" })).or(page.locator("#login-button"));
  }

  async goto() {
    await this.page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
  }


  async loginflowsnaplocator(username:string,password:string)
  {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();

  }
}
