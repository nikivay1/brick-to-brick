import { createStore } from 'vuex';
import students from './modules/students';

const store = createStore({
  modules: {
    students,
  }
});

export default store;
