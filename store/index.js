import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      breakpoints: {
        small: 750,
        medium: 960,
        large: 1280,
        xlarge: 1920,
        xxlarge: 9999
      },
      transition: {
        page: false
      }
    },
    mutations: {
      updateTransition(state, pageTransition) {
        state.transition.page = pageTransition;
      }
    }
  });
};

export default createStore;
