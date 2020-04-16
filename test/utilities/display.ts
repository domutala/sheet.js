import { $sheet, $rule } from '../../src';
import { screenBuilder } from '../functions/screen';

const builder = (sw: string, shts: any[]) => {
  // block
  shts.push($sheet(`.d${sw}-block`, $rule('display', 'block', true)));
  shts.push($sheet(`.d${sw}-iblock`, $rule('display', 'inline-block', true)));

  // flex
  shts.push($sheet(`.d${sw}-flex`, $rule('display', 'flex', true)));
  shts.push($sheet(`.d${sw}-iflex`, $rule('display', 'inline-flex', true)));

  // table
  shts.push($sheet(`.d${sw}-table`, $rule('display', 'table', true)));
  shts.push($sheet(`.d${sw}-table-cell`, $rule('display', 'table-cell', true)));
  shts.push($sheet(`.d${sw}-table-row`, $rule('display', 'table-row', true)));

  // none
  shts.push($sheet(`.d${sw}-none`, $rule('display', 'none', true)));
};

const sheet = screenBuilder(builder);

export default $sheet('', ...sheet);
