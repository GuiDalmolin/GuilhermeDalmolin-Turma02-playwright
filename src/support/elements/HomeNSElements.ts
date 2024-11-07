import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class HomeNSElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getSearchField(): Locator {
    return this.page.locator('#search');
  }

  getSearchButton(): Locator {
    return this.page.locator('.search__button');
  }

  getHeader(): Locator {
    return this.page.locator('h1.header-content__title');
  }

  getCategoryButton(): Locator {
    return this.page.locator('div.navbar__button');
  }

  getStylesButton(): Locator {
    return this.page.locator(
      'a[href="https://www.netshoes.com.br/sub/sportstyle?mi=hm_ger_mntop_R-sportstyle&psn=Menu_Top"]'
    );
  }

  getHeaderSports(): Locator {
    return this.page.locator('div.owl-stage');
  }
}
