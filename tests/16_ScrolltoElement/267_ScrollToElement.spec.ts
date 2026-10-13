import {test} from '@playwright/test';

test.describe('Scroll element methods', () =>{

    test.beforeEach('navigation of page', async ({page})=>{

        await page.goto("https://app.thetestingacademy.com/playwright/widgets/scroll");

    });

    test('Different ways to scroll to the element',async({page})=>{

       // await page.locator("#deep-anchor").scrollIntoViewIfNeeded();
       // await page.locator('#deep-anchor').click();


        //js execute
        await page.evaluate(() => window.scrollBy(0, 1000));

        // // 3) jump to bottom
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      

       //    // // 4) jump back to top
      await page.evaluate(() => window.scrollTo(0, 0));



      await page.pause();


    });



});