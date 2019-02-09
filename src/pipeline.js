import fs from 'fs';
import _ from 'lodash';

class ExtNum {
  static middle(list) {
    const middleIdx = Math.round(list.length / 2);
    return list[middleIdx];
  }
}

class Main {
  static plural(str, symbol) {
    return str.endsWith('s') ? str : `${str}${symbol}`;
  }

  static main() {
    const fileNames = fs.readdirSync('./');
    const visibleFileNames = _.filter(fileNames, (str => !str.startsWith('.')));
    const sorted = visibleFileNames.sort();
    const selectedFileName = ExtNum.middle(sorted);
    const pluralized = Main.plural(selectedFileName);
    const uppercased = _.toUpper(pluralized);
    console.log(uppercased);
  }
}

Main.main();
