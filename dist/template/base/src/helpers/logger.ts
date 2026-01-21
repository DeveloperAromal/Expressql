import chalk from "chalk";

type LogType = "info" | "success" | "warn" | "error" | "default";

class Logger {
  static log(type: LogType, message: string) {
    const timestamp = new Date().toISOString();

    switch (type) {
      case "success":
        console.log(
          chalk.green(`[SUCCESS] ${timestamp} - ${message}`),
        );
        break;

      case "info":
        console.log(chalk.cyan(`[INFO] ${timestamp} - ${message}`));
        break;

      case "warn":
        console.log(chalk.yellow(`[WARN] ${timestamp} - ${message}`));
        break;

      case "error":
        console.log(chalk.red(`[ERROR] ${timestamp} - ${message}`));
        break;

      default:
        console.log(chalk.magenta(`[LOG] ${timestamp} - ${message}`));
    }
  }

  static info(message: string) {
    this.log("info", message);
  }

  static success(message: string) {
    this.log("success", message);
  }

  static warn(message: string) {
    this.log("warn", message);
  }

  static error(message: string) {
    this.log("error", message);
  }

  static other(message: string) {
    this.log("default", message);
  }
}

export default Logger;
