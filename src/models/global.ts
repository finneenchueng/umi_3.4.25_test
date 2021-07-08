const model = {
  namespace: 'global',

  state: {
    text: '',
  },

  effects: {},

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },

  subscriptions: {
    async setup({ history, dispatch }) {
      console.log('subscriptions started');
    },
  },
};

export default model;
