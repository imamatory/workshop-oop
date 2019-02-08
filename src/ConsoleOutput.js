export default class ConsoleOutput {
  constructor({ print, formatData, isError }) {
    this.print = print;
    this.formatData = formatData;
    this.isError = isError;
  }

  getLogLevel = () => (this.isError ? 'error' : 'info')

  call = async (data) => {
    this.print(data, this.getLogLevel());
  }
}
