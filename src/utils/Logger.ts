import chalk from "chalk";

class Logger {
  static info(message: string) {
    console.log(chalk.cyan(message));
  }

  static success(message: string) {
    console.log(chalk.green(message));
  }

  static warn(message: string) {
    console.log(chalk.yellow(message));
  }

  static error(message: string) {
    console.log(chalk.red(message));
  }

  static others(message: string) {
    console.log(chalk.magenta(message));
  }

  static step(message: string) {
    console.log(chalk.gray(message));
  }

  static blank() {
    console.log();
  }
}

export default Logger;
