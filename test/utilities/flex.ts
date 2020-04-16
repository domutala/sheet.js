import { $sheet, $rule } from '../../src';
import { screenBuilder } from '../functions/screen';

const builder = (sw: string, shts: any[]) => {
  // flex-row
  const sh = [
    $sheet(`.flex${sw}-row`, $rule('flex-direction', 'row', true)),
    $sheet(
      `.flex${sw}-row-reverse`,
      $rule('flex-direction', 'row-reverse', true)
    ),

    // flex-collumn
    $sheet(`.flex${sw}-column`, $rule('flex-direction', 'column', true)),
    $sheet(
      `.flex${sw}-column-reverse`,
      $rule('flex-direction', 'column-reverse', true)
    ),

    // flex-wrap
    $sheet(`.flex${sw}-wrap`, $rule('flex-wrap', 'wrap', true)),
    $sheet(`.flex${sw}-nowrap`, $rule('flex-wrap', 'nowrap', true)),
    $sheet(`.flex${sw}-wrap-reverse`, $rule('flex-wrap', 'wrap-reverse', true)),

    // flex-fill
    $sheet(`.flex${sw}-fill`, $rule('flex', '1 1 auto', true)),

    // flex-grow
    $sheet(`.flex${sw}-grow-0`, $rule('flex-grow', '0', true)),
    $sheet(`.flex${sw}-grow-1`, $rule('flex-grow', '1', true)),

    // flex-shrink
    $sheet(`.flex${sw}-shrink-0`, $rule('flex-shrink', '0', true)),
    $sheet(`.flex${sw}-shrink-1`, $rule('flex-shrink', '1', true)),

    // justify-content
    $sheet(`.justify${sw}-start`, $rule('justify-content', 'flex-start', true)),
    $sheet(`.justify${sw}-end`, $rule('justify-content', 'flex-end', true)),
    $sheet(`.justify${sw}-center`, $rule('justify-content', 'center', true)),
    $sheet(
      `.justify${sw}-between`,
      $rule('justify-content', 'space-between', true)
    ),
    $sheet(
      `.justify${sw}-around`,
      $rule('justify-content', 'space-around', true)
    ),

    // align-items
    $sheet(`.items${sw}-start`, $rule('align-items', 'flex-start', true)),
    $sheet(`.items${sw}-end`, $rule('align-items', 'flex-end', true)),
    $sheet(`.items${sw}-cener`, $rule('align-items', 'center', true)),
    $sheet(`.items${sw}-baseline`, $rule('align-items', 'baseline', true)),
    $sheet(`.items${sw}-stretch`, $rule('align-items', 'stretch', true))
  ];

  shts.push(...sh);
};
const sheet = screenBuilder(builder);
export default $sheet('', ...sheet);
