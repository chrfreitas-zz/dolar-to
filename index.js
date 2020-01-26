#!/usr/bin/env node
const puppeteer = require("puppeteer");
const chalk = require("chalk");

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

  console.log(chalk.bold.blue("USD ") + 1);
  console.log(chalk.bold.green(currency) + " " + convertedNumber);
  console.log("\n");
  console.log("🤙");

  await browser.close();
};

run();
