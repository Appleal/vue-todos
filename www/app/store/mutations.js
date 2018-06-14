import * as types from "./types.js"
export default {
    [types.GETALL](state,payload){
        state.todos = payload
    },
    [types.DEL](state,payload){
        state.todos= state.todos.filter(item=>item.id !== payload.id)
    },
    [types.CHANGETITLE](state,payload){
        state.todos = state.todos.map((item)=>{
            if (item.id == payload.id) {
                return payload
            }
            return item
        })
    },
   [types.ADD](state,payload){
        state.todos.unshift(payload)
    },
    [types.CHANGEDONE](state,payload){
        state.todos = state.todos.map((item)=>{
            if (item.id==payload.id){
                return payload
            }
            return item
        })
    }
}