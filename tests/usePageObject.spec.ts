import {test, expect} from '@playwright/test'
import {PageManager} from "../page-objects/pageManager"
import {faker} from "@faker-js/faker"

test.beforeEach(async ({page}) => {
  await page.goto('/')
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
  const randomFullName = faker.person.fullName()
  const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`

  await pm.navigateTo().formLayoutsPage()
  await pm.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption(process.env.USERNAME, process.env.PASSWORD, "Option 1")
  await pm.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, true)
  await pm.onDatepickerPage().selectCommonDatePickerDateFromToday(7)
  await pm.onDatepickerPage().selectDatepickerWithRangeFromToday(6, 15)

})


