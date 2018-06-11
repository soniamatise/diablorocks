import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      breakpoints: {
        small: 750,
        medium: 960,
        large: 1000,

        pageTransition: false
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
