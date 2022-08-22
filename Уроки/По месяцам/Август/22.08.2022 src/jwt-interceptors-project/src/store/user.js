import * as authApi from ''

export default {
    namespaced: true,
    state: {
        user: null,
    },
    getters: {
        isLogin: state => state.user !== null,
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        }
    },
    actions: {
        async login({ commit }, { login, password }) {
            const { data } = await authApi.login
        }
    }
}