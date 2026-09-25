import {chromium} from 'playwright';
import dotenv from 'dotenv';

 dotenv.config();
 

const VWO_USER = process.env.VWO_USER;
const VWO_PASS = process.env.VWO_PASS;

async function sessionstorage()
{
  let browser=await chromium.launch({ headless: false });
  let context=await browser.newContext();
  let page= await context.newPage();

  await page.goto("https://app.wingify.com/#/login");
  await page.locator("//input[@id='login-username']").fill(VWO_USER);
  await page.locator("//input[@id='login-password']").fill(VWO_PASS);
  await page.locator("//button[@id='js-login-btn']").click();
  
  await page.waitForURL(/#\/(dashboard|home)/, { timeout: 15000 });

  await context.storageState({ path:"./user-session.json"});
  console.log("Session saved to user-session.json ✅");

  await context.close();
  await page.close();
  await browser.close();



}



sessionstorage()
