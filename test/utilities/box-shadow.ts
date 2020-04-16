import { $sheet, $rule } from '../../src';
import { shadows } from '../variables';
import { screenBuilder } from '../functions/screen';

const builder = (sw: string, shts: any[]) => {
  for (const key in shadows) {
    if (shadows.hasOwnProperty(key)) {
      const shadow = shadows[key];
      const selector = `.shadow${sw}${key !== 'default' ? `-${key}` : ''}`;
      const sheet = $sheet(selector, $rule('box-shadow', shadow, true));
      shts.push(sheet);
    }
  }
};
const sheet = screenBuilder(builder);
export default $sheet('', ...sheet);
