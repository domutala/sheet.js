import { $sheet, $rule } from '../../src';
import { heading } from '../variables';
import { screenBuilder } from '../functions/screen';

const builder = (sw: string, shts: any[]) => {
  for (const key in heading) {
    if (heading.hasOwnProperty(key)) {
      const h = heading[key];
      const selector = `.${key}${sw}`;
      const sheet = $sheet(
        selector,
        $rule('font-size', h.fontSize, true),
        $rule('font-weight', h.fontWeight, true),
        $rule('line-height', h.lineHeight, true)
      );
      shts.push(sheet);
    }
  }
};
const sheet = screenBuilder(builder);
export default $sheet('', ...sheet);
