import { $sheet, $rule } from '../../src';
import { spacers } from '../variables';
import { screenBuilder } from '../functions/screen';

const builder = (sw: string, shts: any[]) => {
  for (const key in spacers) {
    if (spacers.hasOwnProperty(key)) {
      const h = spacers[key];
      shts.push($sheet(`.p${sw}-${key}`, $rule('padding', h, true)));
      shts.push($sheet(`.pl${sw}-${key}`, $rule('padding-left', h, true)));
      shts.push($sheet(`.pr${sw}-${key}`, $rule('padding-right', h, true)));
      shts.push($sheet(`.pt${sw}-${key}`, $rule('padding-top', h, true)));
      shts.push($sheet(`.pb${sw}-${key}`, $rule('padding-bottom', h, true)));

      // margin
      shts.push($sheet(`.m${sw}-${key}`, $rule('margin', h, true)));
      shts.push($sheet(`.ml${sw}-${key}`, $rule('margin-left', h, true)));
      shts.push($sheet(`.mr${sw}-${key}`, $rule('margin-right', h, true)));
      shts.push($sheet(`.mt${sw}-${key}`, $rule('margin-top', h, true)));
      shts.push($sheet(`.mb${sw}-${key}`, $rule('margin-bottom', h, true)));
    }
  }
  shts.push($sheet(`.m${sw}-auto`, $rule('margin', 'auto', true)));
  shts.push($sheet(`.ml${sw}-auto`, $rule('margin-left', 'auto', true)));
  shts.push($sheet(`.mr${sw}-auto`, $rule('margin-right', 'auto', true)));
};
const sheet = screenBuilder(builder);
export default $sheet('', ...sheet);
