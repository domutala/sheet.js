import { $sheet, $rule } from '../../src';
import { rounded } from '../variables';
import { screenBuilder } from '../functions/screen';

const round = (sw: string, shts: any[]) => {
  for (const key in rounded) {
    if (rounded.hasOwnProperty(key)) {
      const shadow = rounded[key];
      const selector = `.rounded${sw}${key !== 'default' ? `-${key}` : ''}`;
      const sheet = $sheet(selector, $rule('border-radius', shadow, true));
      shts.push(sheet);
    }
  }
};

const roundedTop = (sw: string, shts: any[]) => {
  for (const key in rounded) {
    if (rounded.hasOwnProperty(key)) {
      const shadow = rounded[key];
      const selector = `.rounded-top${sw}${key !== 'default' ? `-${key}` : ''}`;

      const sheet1 = $sheet(
        selector,
        $rule('border-top-left-radius', shadow, true),
        $rule('border-top-right-radius', shadow, true)
      );
      shts.push(sheet1);
    }
  }
};

const roundedBottom = (sw: string, shts: any[]) => {
  for (const key in rounded) {
    if (rounded.hasOwnProperty(key)) {
      const shadow = rounded[key];
      const selector = `.rounded-bottom${sw}${
        key !== 'default' ? `-${key}` : ''
      }`;

      const sheet1 = $sheet(
        selector,
        $rule('border-bottom-left-radius', shadow, true),
        $rule('border-bottom-right-radius', shadow, true)
      );

      shts.push(sheet1);
    }
  }
};

const roundedleft = (sw: string, shts: any[]) => {
  for (const key in rounded) {
    if (rounded.hasOwnProperty(key)) {
      const shadow = rounded[key];
      const selector = `.rounded-left${sw}${
        key !== 'default' ? `-${key}` : ''
      }`;

      const sheet1 = $sheet(
        selector,
        $rule('border-top-left-radius', shadow, true),
        $rule('border-bottom-left-radius', shadow, true)
      );

      shts.push(sheet1);
    }
  }
};

const roundedRight = (sw: string, shts: any[]) => {
  for (const key in rounded) {
    if (rounded.hasOwnProperty(key)) {
      const shadow = rounded[key];
      const selector = `.rounded-right${sw}${
        key !== 'default' ? `-${key}` : ''
      }`;

      const sheet1 = $sheet(
        selector,
        $rule('border-top-right-radius', shadow, true),
        $rule('border-bottom-right-radius', shadow, true)
      );
      shts.push(sheet1);
    }
  }
};
let sh: any[] = [];
sh = sh.concat(screenBuilder(round));
sh = sh.concat(screenBuilder(roundedTop));
sh = sh.concat(screenBuilder(roundedBottom));
sh = sh.concat(screenBuilder(roundedleft));
sh = sh.concat(screenBuilder(roundedRight));

export default $sheet('', ...sh);
