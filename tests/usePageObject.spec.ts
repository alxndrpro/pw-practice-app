import {test, expect} from '@playwright/test'
import {PageManager} from "../page-objects/pageManager";

test.beforeEach(async ({page}) => {
  await page.goto('http://localhost:4200/')
})

test('Navigate to form page', async ({page}) => {
  const pm = new PageManager(page)
  await pm.navigateTo().formLayoutsPage()
  await pm.navigateTo().datePickerPage()
  await pm.navigateTo().smartTablePage()
  await pm.navigateTo().toastrPage()
  await pm.navigateTo().tooltipPage()
})

test('Parametrized methods', async ({page}) => {
  const pm = new PageManager(page)
  await pm.navigateTo().formLayoutsPage()
  await pm.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption("test@test.com", "welcome1", "Option 1")
  await pm.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox("John Smith", "john@test.com", true)
  await pm.onDatepickerPage().selectCommonDatePickerDateFromToday(7)
  await pm.onDatepickerPage().selectDatepickerWithRangeFromToday(6, 15)
})
