import { $sheet, $rule } from '../../src';
import { screenSubdivise } from '../variables';
import { screenBuilder } from '../functions/screen';

const minWidthScreen = 100 / screenSubdivise;
const builder = (sw: string, shts: any[]) => {
  for (let ss = 0; ss < screenSubdivise + 1; ss++) {
    const selector = `col${sw}-${ss}`;
    const width = ss * minWidthScreen;
    const sheet = $sheet(
      selector,
      $rule('position', 'relative'),
      $rule('flex', `0 0 ${width}%`),
      $rule('width', '100%'),
      $rule('max-width', `${width}%`)
    );
    shts.push(sheet);
  }
};
const sheets = screenBuilder(builder);

export default $sheet('', ...sheets);
