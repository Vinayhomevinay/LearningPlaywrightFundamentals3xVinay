import {test,FrameLocator,Locator} from '@playwright/test';

test('Testing Multilevel nested frames', async({page})=>{

    await page.goto("https://selectorshub.com/iframe-scenario/");
    let frame1:FrameLocator= page.frameLocator("(//iframe[@id='pact1'])[1]");
    let frame2:FrameLocator=frame1.frameLocator("#pact2");
    let frame3:FrameLocator=frame2.frameLocator("#pact3");
    await frame1.locator("#inp_val").fill("Shraddha Kapoor");

     await frame2.locator("#jex").fill("wife");
     
     await frame3.locator("#glaf").fill("Playwright");
    
     const header= await frame1.locator("h3").innerText();
     console.log(header);

     await page.pause();

});
