import { test, expect, Locator, Page } from "@playwright/test";

test("2nd assignment of a form", async ({ page }) => {
     await page.goto("https://demo.applitools.com/");
    await page.locator("#username").fill("Admin");
    await page.locator("#password").fill("Password@123");
    await page.locator("#log-in").click();
    await expect(page).toHaveURL("https://demo.applitools.com/app.html");

    //const valuecount = await page.locator("//td[@class='text-right bolder nowrap']").count();
    //console.log(valuecount);
    const Amounts: string[] = await page.locator("td[class='text-right bolder nowrap']").allInnerTexts();
    //console.log("Amounts:", Amounts);
    
    const result = ExpenseCheck(Amounts);

    console.log(result.totalearned);

    expect(result.totalearned).toBeCloseTo(1996.22,2);
    console.log("TotalSpend :",result.totalspend);


    await page.pause();
});

export function ExpenseCheck(Amounts: string[]) {
  let totalspend = 0;
  let totalearned = 0;
  for (const eachamount of Amounts) {
    const expense = Number(eachamount.replace(/[^\d.+-]/g, ""));
    //console.log(expense);

    totalearned = totalearned + expense;
    //console.log(totalearned);
    
    if (expense<0){
        totalspend=totalspend+Math.abs(expense);
    }

  }

  return {totalearned,totalspend};

}
