import { Page, expect } from '@playwright/test';
import HomeNSElements from '../elements/HomeNSElements';
import BasePage from './BasePage';

export default class HomeNSPage extends BasePage {
  readonly homeNSElements: HomeNSElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.homeNSElements = new HomeNSElements(page);
  }

  async searchProductByName(): Promise<void> {
    await this.homeNSElements.getSearchField().fill('tenis masculino');
    await this.homeNSElements.getSearchButton().click();

    await expect(this.homeNSElements.getHeader()).toBeVisible();
  }

  async openSportStyles(): Promise<void> {
    await this.homeNSElements.getStylesButton().click();
  }
}
