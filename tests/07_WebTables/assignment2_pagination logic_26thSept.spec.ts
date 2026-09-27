import { test, expect, Page, Locator } from '@playwright/test';

async function pagination(page: Page): Promise<void> {
  const nextbutton = page.locator('span:has-text("NEXT")');

  while (true) {

    const itemnames: string[] = await page.locator(".RG5Slk").allInnerTexts();
    const itemprice: string[] = await page.locator(".oFEPlD .hZ3P6w.DeU9vF").allInnerTexts();

    for (const link of itemnames) {
      console.log(link);
    }
    for (const linkprice of itemprice) {
      console.log(linkprice);
    }

    const isNextVisible = await nextbutton.isVisible().catch(() => false);
    if (!isNextVisible) {
      break;
    }

    await nextbutton.click();
    await page.locator('.RG5Slk').first().waitFor({ state: 'visible' });
  }
}

test('Flipkart Webtable navigation and print the name and price', async ({ page }) => {

  await page.goto("https://www.flipkart.com/");
  await page.locator("//span[@role='button']").click();

  const searchbar = page.getByRole('textbox', { name: 'Search for products, brands and more' });
  await searchbar.fill("DSLR camera");
  await searchbar.press('Enter');

  await expect(page).toHaveURL("https://www.flipkart.com/search?q=DSLR%20camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off");
  await expect(page.locator("//div[@class='lvJbLV col-12-12']").first()).toBeVisible();

  await pagination(page);

  await page.pause();
});