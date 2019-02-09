export default class ConsoleOutput {
  constructor({ print, formatData, isError }) {
    this.print = print;
    this.formatData = formatData;
    this.isError = isError;
  }

  call = async (data) => {
    if (data instanceof Error) {
      this.print('error', data);
      return;
    }
    this.print('info', data);
  }
}
