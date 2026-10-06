import {test,expect} from '@playwright/test';


test.describe('Shadow Handling',()=>{
    const url="https://app.thetestingacademy.com/playwright/widgets/shadow-dom";
  
    test.beforeEach(async({page})=>{
        await page.goto(url);
  });

test('test the shadow dom element', async({page})=>{

const cardlocator= page.getByTestId("card-account-card");
await cardlocator.getByTestId("card-account-email").fill("vinay.d.kumar@rediffmail.com");
await cardlocator.getByTestId("card-account-password").fill("AB");
await cardlocator.getByTestId("card-account-submit").click();
await expect( page.getByTestId("card-account-status")).toContainText("vinay.d.kumar@rediffmail.com");

const cart= page.getByTestId("counter-cart");

await cart.getByTestId("counter-cart-inc").click();
await cart.getByTestId("counter-cart-inc").click();
await expect(cart.getByTestId("counter-value")).toHaveText("5");


const card=page.getByTestId("card-inside");

await card.getByTestId("card-inside-email").fill("Williamson@example.com");
await card.getByTestId("card-inside-password").fill("Bes");
await card.getByTestId("card-inside-submit").click();

await page.pause();


});

});