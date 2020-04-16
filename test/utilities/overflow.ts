import { $sheet, $rule } from '../../src/functions';

const overflows = [
  $sheet('.overflow-hidden', $rule('overflow', 'hidden', true)),
  $sheet('.overflow-auto', $rule('overflow', 'auto', true))
];

export default $sheet('', ...overflows);
