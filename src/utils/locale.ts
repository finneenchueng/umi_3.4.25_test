import { getIntl } from 'umi';

/**
 * get translation result
 * @param key  translate key
 * @param extend extended variable name
 * @returns
 */
export function $t(
  key: string,
  extend?: {
    [key: string]: string;
  },
): string {
  if (!key) {
    return key;
  }
  try {
    const intl = getIntl();
    return intl.formatMessage({ id: key }, extend);
  } catch (e) {}
  return key;
}
