const { Builder, By, Key, until } = require('selenium-webdriver');

//adjust this value to change end score
const maxNumberLength = 10;

(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('https://www.humanbenchmark.com/tests/number-memory');
        await doStuff(driver);
    } finally {
        //await driver.quit();
    }
})();

async function doStuff(driv) {
    await driv.findElement(By.css('a.hero-button')).click();
    number = await driv.findElement(By.css('.big-number')).getText();
    console.log(number);
    console.log(maxNumberLength - number.length, 'rounds to go!');
    await driv.wait(until.elementLocated(By.css('.test-group > input')), number.length * 1000 * 2);
    await driv.findElement(By.css('.test-group > input')).sendKeys(number);
    await driv.findElement(By.css('a.hero-button')).click();
    if (number.length === maxNumberLength) {
        await driv.findElement(By.css('a.hero-button')).click();
        number = await driv.findElement(By.css('.big-number')).getText();
        await driv.wait(until.elementLocated(By.css('.test-group > input')), number.length * 1000 * 2);
        await driv.findElement(By.css('.test-group > input')).sendKeys('1337');
        await driv.findElement(By.css('a.hero-button')).click();
        console.log('Finished! Feel Free to save score');
    } else {
        await doStuff(driv);
    }
}
