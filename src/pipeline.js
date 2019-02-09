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
    const compositionList = [
      array => _.filter(array, (str => !str.startsWith('.'))),
      array => array.sort(),
      ExtNum.middle,
      Main.plural,
      _.toUpper,
      console.log,
    ];
    return compositionList.reduce((acc, f) => f(acc), fileNames);
  }
}

Main.main();
