import { apiService } from '@/services/apiService';

export default {
  namespaced: true,
  state: () => ({
    students: [],
    contracts: [],
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
    setContracts(state, contracts) {
      state.contracts = contracts;
    },
  },
  actions: {
    async fetchStudents({ commit }) {
      commit('setLoading', true);
      commit('setError', null);

      try {
        const response = await apiService.get('/student');
        commit('setStudents', response.data);
      } catch (error) {
        commit('setError', 'Ошибка при загрузке студентов');
        console.error(error);
      } finally {
        commit('setLoading', false);
      }
    },
    async fetchStudentsContracts({ commit },  filters) {
      try {
        const response = await apiService.get('/contracts', filters);
        commit('setContracts', response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchAddStudentContracts(_, contract) {
      try {
        await apiService.post('/contracts', contract);
      } catch (error) {
        console.error(error);
      }
    },
  },
  getters: {
    students: (state) => state.students,
    contracts: (state) => state.contracts,
    isLoading: (state) => state.loading,
    hasError: (state) => !!state.error,
    errorMessage: (state) => state.error
  }
};
