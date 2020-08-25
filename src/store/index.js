import Vue from "vue";
import Vuex from "vuex";

// import state from "./state";
// import mutations from "./mutations";
import actions from "./actions";

import smallboxes from "../data/smallboxes";
import largeboxes from "../data/largeboxes";

Vue.use(Vuex);

export default new Vuex.Store({
  // data is stored in state file
  state: {
    smallboxes,
    largeboxes,
    test: {
      isNavOpen: false,
    },
  },
  mutations: {
    toggleSideNav(state) {
      state.test.isNavOpen = !state.test.isNavOpen;
    },
  },
  actions,
  modules: {},
});
