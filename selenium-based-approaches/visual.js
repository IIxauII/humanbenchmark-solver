const { Builder, By, Key, until } = require('selenium-webdriver');

//adjust this value to change end score
const maxNumberLength = 3;

(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('https://www.humanbenchmark.com/tests/memory');
        await driver.findElement(By.css('a.hero-button')).click();
        await doStuff(driver);
    } finally {
        //await driver.quit();
    }
})();

async function doStuff(driv) {
    let squares = await driv.findElements(By.css('.square.active'));
    await squares.forEach(async (square) => {
        await square.click();
        await driv.sleep(500);
    });
    await doStuff(driv);
}
