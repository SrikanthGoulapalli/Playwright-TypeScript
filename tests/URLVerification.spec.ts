import {test, expect} from "@playwright/test"

test("Verify page URL", async ({page}) => {
    await page.goto("http://www.automationpractice.pl/index.php")
    let url : string = await page.url();
    console.log(url);
    await expect(page).toHaveURL("http://www.automationpractice.pl/index.php"); // To verify the complete URL
    await expect(page).toHaveURL(/automationpractice/); // To verify a part of the URL
});