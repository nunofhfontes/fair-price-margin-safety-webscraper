const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://finbox.com/NYSE:HD/explorer/fair_value/');

  const elementText = await page.evaluate(() => {
    const element = document.querySelector('a[rel="noopener noreferrer nofollow"][href="/NYSE:HD/explorer/fair_value"]');
    return element ? element.innerText : null;
  });

  console.log(elementText);

  await browser.close();
})();
