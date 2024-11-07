import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import HomeNSPage from '../support/pages/HomeNSPage';

test.describe('Pesquisar tenis masculino', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let homeNSPage: HomeNSPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.base_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    homeNSPage = new HomeNSPage(page);
    await page.goto(BASE_URL);
  });

  test('Encontrar produto tenis masculino', async () => {
    await homeNSPage.searchProductByName();
  });

  test('Encontrar sportstyles', async () => {
    await homeNSPage.openSportStyles();
  });
});
