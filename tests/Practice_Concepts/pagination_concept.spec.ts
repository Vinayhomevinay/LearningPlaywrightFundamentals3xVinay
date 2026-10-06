import{test} from '@playwright/test';


test('webtable paginzation practice',async({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    const pagination=await page.locator("//div[@class='pager-nav']/button").count();
    console.log(pagination);


    await page.pause();



});