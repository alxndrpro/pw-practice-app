import {test, expect} from '@playwright/test'

test('Drag and drop with iFrame', async ({page}) => {

  await page.goto('https://www.globalsqa.com/demo-site/draganddrop')

  const frame = page.frameLocator('[rel-title="Photo manager"] iframe')

  await frame.locator('la', {hasText: "High Tatras 2"}).dragTo(frame.locator('#trash'))

  // More precise control
  await frame.locator('la', {hasText: "High Tatras 4"}).hover()
  await page.mouse.down()
  await frame.locator('#trash').hover()
  await page.mouse.up()

  await expect.(frame.locator('#trash li h5')).toHaveValue(["High Tatras 2", "High Tatras 4"])

})
