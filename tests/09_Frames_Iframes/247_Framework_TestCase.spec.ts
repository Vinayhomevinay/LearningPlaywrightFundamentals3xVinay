import {test,expect,Locator,FrameLocator} from '@playwright/test';


test("Verify multi framelocator", async ({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/frames/multi-frames");

    let mainFrame:FrameLocator=  page.frameLocator('[name="main"]');
    const heading=await mainFrame.locator("#main-heading").innerText();
    console.log(heading);

    const allFrames: Locator[] = await page.locator('//frame').all();
    console.log('total number of frames: ' + allFrames.length);

     for (const frame of allFrames) {
        console.log(await frame.getAttribute('name'), ': ', await frame.getAttribute('src'));

    }


    let sideFrame: FrameLocator =  page.frameLocator('[name="side"]');
    await sideFrame.getByTestId('side-link-registration').click();

    

    await page.pause();



});