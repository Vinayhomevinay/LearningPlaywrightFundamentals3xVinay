import {test} from '@playwright/test';

test ('basic dropdown test', async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/drag_and_drop");

    const draglocatorA= await page.locator("#column-a");
    const draglocatorB = page.locator("#column-b");

    await draglocatorA.dragTo(draglocatorB);
    

    await page.pause();
});