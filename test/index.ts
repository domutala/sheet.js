import { $sheet, $rule, $render, $media, $keyframes } from '../src';
import * as variables from './variables';
import utilities from './utilities';

const body = [
  $rule('margin', '0', true),
  $rule('background-color', variables.themeColors.light),
  $rule('font-size', variables.font.size.default),
  $rule('line-height', String(variables.lineHeight.default)),

  $keyframes(
    'animate',
    $sheet('0%', $rule('transform', 'scale(.1)')),
    $sheet('10%', $rule('transform', 'scale(.5)')),
    $sheet('100%', $rule('transform', 'scale(1)'))
  )
];

const cb = (r: string) => {
  console.log(r);
};

$render($sheet('.body', ...body), cb);
utilities(cb);
