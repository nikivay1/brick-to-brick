import { apiService } from '@/services/apiService';

export default {
  namespaced: true,
  state: () => ({
    students: [],
    loading: false,
    error: null,
  }),
  mutations: {
    setStudents(state, students) {
      state.students = students;
    },
    setLoading(state, status) {
      state.loading = status;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    async fetchStudents({ commit }) {
      commit('setLoading', true);
      commit('setError', null);

      try {
        const response = await apiService.get('/', { results: 10, nat: 'us'});
        commit('setStudents', response.data.results);
      } catch (error) {
        commit('setError', 'Ошибка при загрузке студентов');
        console.error(error);
      } finally {
        commit('setLoading', false);
      }
    }
  },
  getters: {
    students: (state) => state.students,
    isLoading: (state) => state.loading,
    hasError: (state) => !!state.error,
    errorMessage: (state) => state.error
  }
};
