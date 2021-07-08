import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  locale: {
    default: 'en-US',
    antd: false,
    title: true,
    baseNavigator: false,
    baseSeparator: '-',
  },
  targets: {
    chrome: 45,
    firefox: 49,
    safari: 10,
    edge: 13,
    ie: 11,
  },
  fastRefresh: {},
});
