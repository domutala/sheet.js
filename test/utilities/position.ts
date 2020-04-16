import { $sheet, $rule } from '../../src/functions';

const posititons = [
  $sheet('.position-absolute', $rule('position', 'absolute', true)),
  $sheet('.position-relative', $rule('position', 'relative', true)),
  $sheet('.position-static', $rule('position', 'static', true)),
  $sheet('.position-foxed', $rule('position', 'fixed', true)),
  $sheet('.position-sticky', $rule('position', 'sticky', true))
];

export default $sheet('', ...posititons);
