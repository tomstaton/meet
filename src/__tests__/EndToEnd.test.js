import puppeteer from "puppeteer";

describe("show/hide event details", () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250,
      ingnoreDefaultArgs: ["--disable-extensions"],
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".Event");
  }, 300000);

  afterAll(() => {
    browser.close();
  });

  it("An event element is collapsed by default", async () => {
    await page.waitForSelector(".Event");

    const eventDetails = await page.$(".Event .Event__Details");
    expect(eventDetails).toBeNull();
  });

  it("User can expand an event to see its details", async () => {
    await page.waitForSelector(".Event");
    await page.click(".Event", ".showMore");

    const eventDetails = await page.$(".Event .EventDetails");
    expect(eventDetails).toBeDefined();
  });

  it("User can collapse an event to hide its details", async () => {
    await page.click(".Event", ".showLess");
    const eventDetails = await page.$(".Event .EventDetails");
    expect(eventDetails).toBeNull();
  });
});
