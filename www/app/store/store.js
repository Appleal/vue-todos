import actions from "./actions.js"
import mutations from "./mutations.js"
import getters from "./getters.js"

export const storeObj= {
    state: {
        todos: []
    },
    actions: {
        ...actions
    },

    mutations: {
        ...mutations
    },
    getters: {
        ...getters
    }
}