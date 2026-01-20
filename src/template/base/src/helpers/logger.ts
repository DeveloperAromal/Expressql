import chalk from "chalk";

type LogType = "info" | "success" | "warn" | "error" | "default";

class Logger {
  static log(type: LogType, message: string) {
    const timestamp = new Date().toISOString();

    switch (type) {
      case "success":
        console.log(
          chalk.green(`[FUMEHUB] [SUCCESS] ${timestamp} - ${message}`),
        );
        break;

      case "info":
        console.log(chalk.cyan(`[FUMEHUB] [INFO] ${timestamp} - ${message}`));
        break;

      case "warn":
        console.log(chalk.yellow(`[FUMEHUB] [WARN] ${timestamp} - ${message}`));
        break;

      case "error":
        console.log(chalk.red(`[FUMEHUB] [ERROR] ${timestamp} - ${message}`));
        break;

      default:
        console.log(chalk.magenta(`[FUMEHUB] [LOG] ${timestamp} - ${message}`));
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
