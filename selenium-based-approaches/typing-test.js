const { Builder, By, Key, until } = require('selenium-webdriver');

//adjust this value to adjust WPM (30 = ~230wpm, 100 = ~97wpm)
const chillFactor = 150;
//boolean for ultraquick type (ignores chillFactor if true) (true = ~10000wpm)
const ultraQuick = false;

(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('https://www.humanbenchmark.com/tests/typing');
        text = await driver.findElement(By.css('div.letters')).getText();
        console.log(text);
        console.log(text.length);
        if (ultraQuick) {
            await driver.findElement(By.css('div.letters')).sendKeys(text);
        } else {
            let charArray = [...text];
            await typeText(driver, charArray, 0);
        }
    } finally {
        //await driver.quit();
    }
})();

async function typeText(driv, charArray, x) {
    await driv.findElement(By.css('div.letters')).sendKeys(charArray[x]);
    await driv.sleep(chillFactor);
    x++;
    if (charArray[x]) {
        await typeText(driv, charArray, x);
    } else {
        return;
    }
}
