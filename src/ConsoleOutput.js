export default class ConsoleOutput {
  constructor({ print, isError }) {
    this.print = print;
    this.isError = isError;
  }

  getLogLevel = () => (this.isError ? 'error' : 'info')

  call = async (data) => {
    this.print(data, { level: this.getLogLevel() });
  }
}
