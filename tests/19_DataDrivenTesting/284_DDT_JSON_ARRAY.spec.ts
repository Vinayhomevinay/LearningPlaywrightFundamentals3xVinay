import {test} from '@playwright/test';

test.describe('DDT Simple',() =>{

    test.beforeEach('navigating to the page', async ({page})=>{
        await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    });


// TEST DATA — array of objects
    const loginData = [
        {
            description: "valid credentials",
            username: "admin@gmail.com",
            password: "admin123",
            expectedURL: /admin/,
            shouldPass: true
        },
        {
            description: "invalid password",
            username: "admin123@ymail.com",
            password: "wrongpass",
            expectedURL: /admin/,
            shouldPass: false
        },
        {
            description: "empty username",
            username: "",
            password: "admin123",
            expectedURL: /admin123/,
            shouldPass: false
        },
        {
            description: "empty password",
            username: "pramod@ppp.com",
            password: "",
            expectedURL: /admin/,
            shouldPass: false
        },
        {
            description: "both empty",
            username: "",
            password: "",
            expectedURL: /multiple_element_filter/,
            shouldPass: false
        }
    ];

    for (const testdata of loginData){
       test(`checking the test with : ${testdata.description}`,async ({ page })=> {
        await page.locator('#email').fill(testdata.username);
        await page.locator('#password').fill(testdata.password);
        await page.getByTestId('login-button').click();
       }); 

    }
 
});







