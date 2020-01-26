#!/usr/bin/env node
const puppeteer = require("puppeteer");

const run = async () => {
  const currency = process.argv[2] || "BRL";
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(
    `https://duckduckgo.com/?q=1+dollar+to+${currency}&t=h_&ia=currency`
  );

  const convertedNumber = await page.$$eval(
    'input[type="number"]',
    el => el[1].value
  );

  console.log(convertedNumber);

  await browser.close();
};

run();
