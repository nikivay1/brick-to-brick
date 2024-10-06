import { createStore } from 'vuex';
import { apiService } from '@/services/apiService';

const store = createStore({
  state: {
    students: [],
    activeStudents: null
  },
  mutations: {
    setStudents(state, students) {
      state.students = students;
    },
    setActiveStudents(state, activeStudents) {
      state.activeStudents = activeStudents;
    },
  },
  actions: {
    async fetchStudents({ commit }) {
      try {
        const response = await apiService.get('/student');
        console.log(response.data);
        commit('setStudents', response.data.results);
      } catch (error) {
        console.error('Ошибка при получении студентов:', error);
      }
    }
  },
  getters: {
    students: (state) => state.students
  }
});

export default store;
