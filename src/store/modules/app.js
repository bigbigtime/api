import rotuer from "@/router";
const state = {
    routers: rotuer.options.routes,
    project: sessionStorage.getItem("project")
}

const getters = {}

const mutations = {  // 必须的  同步 没有回调处理事情
    SET_ROTUERS(state, value) {
        state.routers = rotuer.options.routes;
    }
}

const actions = {}


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
