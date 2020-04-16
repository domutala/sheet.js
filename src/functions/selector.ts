import { Options } from '../types';
import { $builSelector } from '..';

export const $is = (selector: string, ...options: Options) => {
  return $builSelector({ selector: `&${selector}`, options });
};
export const $active = (...options: Options) => {
  return $builSelector({ selector: '&:active', options });
};
export const $after = (...options: Options) => {
  return $builSelector({ selector: '&:after', options });
};
export const $before = (...options: Options) => {
  return $builSelector({ selector: '&:before', options });
};
export const $checked = (...options: Options) => {
  return $builSelector({ selector: '&:checked', options });
};
export const $default = (...options: Options) => {
  return $builSelector({ selector: '&:default', options });
};
export const $disabled = (...options: Options) => {
  return $builSelector({ selector: '&:disabled', options });
};
export const $empty = (...options: Options) => {
  return $builSelector({ selector: '&:empty', options });
};
export const $enabled = (...options: Options) => {
  return $builSelector({ selector: '&:enabled', options });
};
export const $firstChild = (...options: Options) => {
  return $builSelector({ selector: '&:first-child', options });
};
export const $firstLetter = (...options: Options) => {
  return $builSelector({ selector: '&:first-letter', options });
};
export const $firstLine = (...options: Options) => {
  return $builSelector({ selector: '&:first-line', options });
};
export const $firstOfType = (...options: Options) => {
  return $builSelector({ selector: '&:first-of-type', options });
};
export const $focus = (...options: Options) => {
  return $builSelector({ selector: '&:focus', options });
};
export const $hover = (...options: Options) => {
  return $builSelector({ selector: '&:hover', options });
};
export const $inRange = (...options: Options) => {
  return $builSelector({ selector: '&:in-range', options });
};
export const $indeterminate = (...options: Options) => {
  return $builSelector({ selector: '&:indeterminate', options });
};
export const $invalid = (...options: Options) => {
  return $builSelector({ selector: '&:invalid', options });
};
export const $lang = (...options: Options) => {
  return $builSelector({ selector: '&:lang', options });
};
export const $lastChild = (...options: Options) => {
  return $builSelector({ selector: '&:last-child', options });
};
export const $lastOfType = (...options: Options) => {
  return $builSelector({ selector: '&:last-of-type', options });
};
export const $link = (...options: Options) => {
  return $builSelector({ selector: '&:link', options });
};
export const $not = (...options: Options) => {
  return $builSelector({ selector: '&:not', options });
};
export const $nthChild = (...options: Options) => {
  return $builSelector({ selector: '&:nth-child', options });
};
export const $nthLastChild = (...options: Options) => {
  return $builSelector({ selector: '&:nth-last-child', options });
};
export const $nthLastOfType = (...options: Options) => {
  return $builSelector({ selector: '&:nth-last-of-type', options });
};
export const $nthOfType = (...options: Options) => {
  return $builSelector({ selector: '&:nth-of-type', options });
};
export const $onlyOfType = (...options: Options) => {
  return $builSelector({ selector: '&:only-of-type', options });
};
export const $onlyChild = (...options: Options) => {
  return $builSelector({ selector: '&:only-child', options });
};
export const $optional = (...options: Options) => {
  return $builSelector({ selector: '&:optional', options });
};
export const $outOfRange = (...options: Options) => {
  return $builSelector({ selector: '&:out-of-range', options });
};
export const $placeholder = (...options: Options) => {
  return $builSelector({ selector: '&:placeholder', options });
};
export const $readOnly = (...options: Options) => {
  return $builSelector({ selector: '&:read-only', options });
};
export const $readWrite = (...options: Options) => {
  return $builSelector({ selector: '&:read-write', options });
};
export const $required = (...options: Options) => {
  return $builSelector({ selector: '&:required', options });
};
export const $root = (...options: Options) => {
  return $builSelector({ selector: '&:root', options });
};
export const $selection = (...options: Options) => {
  return $builSelector({ selector: '&:selection', options: options });
};
export const $target = (...options: Options) => {
  return $builSelector({ selector: '&:target', options });
};
export const $valid = (...options: Options) => {
  return $builSelector({ selector: '&:valid', options });
};
export const $visited = (...options: Options) => {
  return $builSelector({ selector: '&:visited', options });
};
export const $child = ($selector, ...options: Options) => {
  return $builSelector({ selector: $selector, options });
};
