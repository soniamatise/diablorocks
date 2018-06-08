import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      breakpoints: {
        small: 750,
        medium: 960,
        large: 1000
      }
    }
  });
};

export default createStore;
