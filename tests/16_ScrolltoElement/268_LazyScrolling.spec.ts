import {test,expect} from '@playwright/test';

test.describe('Lazy scrolling to load the elements', () => {

    test.beforeEach('navigating to the page',async({page})=>{

        await page.goto("https://app.thetestingacademy.com/playwright/widgets/scroll");

    });

    test('Checking the lazy load feature',async({page})=>{

        await page.getByTestId('section-lazy').scrollIntoViewIfNeeded();
        await page.getByTestId('lazy-list').scrollIntoViewIfNeeded();


        const list= page.locator('#lazy-list li');

        await expect(list).toHaveCount(10);

        const initialCount = await list.count();

      await page.evaluate(() => window.scrollTo(0, 0));
      await page.getByTestId('lazy-loader').scrollIntoViewIfNeeded();


        await expect.poll(async () => list.count(), {
         message: "expected_itmes > 10",
         timeout: 10_000
             }).toBeGreaterThan(initialCount);

      const finalCount = await list.count();
      console.log(finalCount);

      await page.waitForTimeout(5000);

        //#lazy-list li

    });


});