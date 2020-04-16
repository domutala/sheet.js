import { $sheet, $rule } from '../../src';
import { $eval } from '../../src/functions/eval';
import { screenBuilder } from '../functions/screen';
import * as variables from '../variables';

const builder = (sw: string, shts: any[]) => {
  if (sw) {
    const aliasSw = sw.slice(1);
    let mw = $eval(`${variables.screenWidths[aliasSw].size} * 0.9px`);
    shts.push($sheet('.container', $rule('max-width', mw)));
  }
};

let sheets = [
  $sheet(
    '.container',
    $rule('width', '90%'),
    $rule('margin-right', 'auto'),
    $rule('margin-left', 'auto')
  ),
  ...screenBuilder(builder)
];

export default $sheet('', ...sheets);
