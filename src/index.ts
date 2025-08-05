#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

const log = console.log;

const main = async () => {
  log("");
  log(chalk.blueBright("Welcome to @minju25kim CLI"));
  log("");

  const questions = [
    {
      type: "select" as const,
      name: "action",
      message: "What would you like to explore?",
      choices: [
        { name: "👤 About Me", value: "about" },
        { name: "🔗 Social Links", value: "links" },
        { name: "👋 Exit", value: "exit" },
      ],
    },
  ];

  while (true) {
    try {
      const { action } = await inquirer.prompt(questions[0]);

      if (action === "about") {
        log("");
        log(chalk.cyan("🔍 About Me"));
        log(chalk.gray("─".repeat(50)));
        log(chalk.white("I am passionate about creating innovative solutions and sharing knowledge through code."));
        log("");
      } else if (action === "links") {
        log("");
        log(chalk.cyan("🔗 Connect with me"));
        log(chalk.gray("─".repeat(50)));
        log(
          chalk.blue("💖 Blog: ") +
            chalk.magentaBright("https://minju25kim.fly.dev")
        );
        log(
          chalk.blue("🐙 GitHub: ") +
            chalk.white("https://github.com/minju25kim")
        );
        log(
          chalk.blue("💼 LinkedIn: ") +
            chalk.white("https://linkedin.com/in/minju25kim")
        );
        log(
          chalk.blue("📸 Instagram: ") +
            chalk.white("https://instagram.com/minju25kim")
        );
        log(
          chalk.blue("🐦 Twitter: ") +
            chalk.white("https://twitter.com/cleaner_than_u")
        );
        log(
          chalk.blue("🎥 YouTube: ") +
            chalk.white("https://youtube.com/@minju25kim")
        );
        log("");
      } else if (action === "exit") {
        log("");
        log(chalk.blue("👋 Exiting..."));
        log("");
        break;
      }
    } catch (error) {
      log("");
      log(chalk.blue("👋 Exiting..."));
      log("");
      break;
    }
  }
};

main();
