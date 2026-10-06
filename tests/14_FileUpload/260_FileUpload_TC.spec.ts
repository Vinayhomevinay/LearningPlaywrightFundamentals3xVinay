import {test,expect} from '@playwright/test';
import {path} from 'path';


test.describe('Upload File',()=>{

    const url="https://the-internet.herokuapp.com/upload";
    test.beforeEach('url goto',async ({page})=>{
        await page.goto(url);

    });

    test('uploading single file',async({page})=>{

        const filepath=path.join(__dirname,'testdata.txt');
        console.log(filepath);

        await page.locator("#file-upload").setInputFiles([filepath]);
        await page.getByRole('button',{name:'Upload'}).click();
        await expect(page.locator("#uploaded-files")).toContainText("testdata.txt");

        
        await page.pause();


    });


});