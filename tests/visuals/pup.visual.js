import puppeteer from 'puppeteer';
jest.setTimeout(30000);
describe.only('Pup', () => {

  beforeAll(async (done) => {
    setTimeout(function() {

      // do some stuff

      done();

    }, 5000);
  })

  test('render', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:6006/iframe.html?id=buttons--bbb');

    await page.click(`[data-hook="btn1"]`);
    await browser.close();
    expect(false).toEqual(false);
  });
});
