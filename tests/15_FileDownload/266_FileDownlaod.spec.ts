import {test} from '@playwright/test';

test.describe('downloading of the file', () => {

test.beforeEach('open browser',async ({ page })=>{

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/upload-download");
});


test('downloading the file',async({ page })=>{

    const[staticDownnload]=await Promise.all([

        page.waitForEvent('download'),
        page.getByTestId('download-static').click()
    ]);

    await staticDownnload.saveAs('./out/'+staticDownnload.suggestedFilename());
                                 
});


});