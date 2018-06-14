export default {
    hasDone(state){
        return state.todos.filter(item=>item.done===true)
    },
    notDone(state){
        return state.todos.filter(item=>item.done===false)
    }
}