import {test, expect} from '@playwright/test';
import {NavigationPage} from '../page-object/navigationPage';


test.beforeEach(async({page}) => {
  await page.goto('http://localhost:4200');
});

test('chap46 PageObject', async({page}) => {
  const navigateTo = new NavigationPage(page);
  await navigateTo.formLayoutsPage();
  await navigateTo.datepickerPage();

});