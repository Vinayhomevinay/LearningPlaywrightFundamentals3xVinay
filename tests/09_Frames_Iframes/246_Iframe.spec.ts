import {test,expect,FrameLocator} from '@playwright/test';


test("verify frame and its relevant locators", async ({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/frames/");
    let vehicleframe: FrameLocator =  page.frameLocator("#frame-one");
    
    await vehicleframe.locator("#RESULT_TextField-1").fill("Maruti Ignis");
    await vehicleframe.locator("#RESULT_TextField-2").fill("Pinki");
    await vehicleframe.locator("#RESULT_RadioButton-1").selectOption("Hatchback");
    await vehicleframe.locator("#RESULT_TextField-4").fill("2018");
    await vehicleframe.locator("#RESULT_TextArea-1").fill("A perfect Family Car");
    await vehicleframe.locator("#vehicle-submit").click();

    const ouputlog= await vehicleframe.locator("#vehicle-output").innerText();

    console.log(ouputlog);


    await page.pause();

});