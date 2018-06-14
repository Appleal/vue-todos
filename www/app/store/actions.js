import * as types from "./types.js"
export default {
    async[types.GETALL]({commit}){
        var data = await fetch("/mapList").then(data=>data.json())
        commit("GETALL",data)
    },
    async[types.DEL]({commit},payload){
        var data = await fetch(("/mapList/"+payload.id),{
            "method":"DELETE"
        }).then(data=>data.json());
        commit("DEL", payload)
    },
    async [types.CHANGETITLE]({commit},payload){
        var data = await fetch(("/mapList/"+payload.id),{
            "method":"PATCH",
            "headers":{"Content-type":"application/json"},
            "body":JSON.stringify({title:payload.title})
        }).then(data=>data.json());
        commit("CHANGETITLE",data)
    },
    async [types.ADD]({commit},payload){
        var data = await fetch("/mapList",{
            "method":"POST",
            "headers":{"Content-type":"application/json"},
            "body":JSON.stringify(payload)
        }).then(data=>data.json())
        commit("ADD",data)
    },
    async CHANGEDONE({commit},payload){
        var data = await fetch(("/mapList/"+payload.id),{
            "method":"PATCH",
            "headers":{"Content-type":"application/json"},
            "body":JSON.stringify({done:payload.done})
        }).then(data=>data.json())
        commit("CHANGEDONE",data)
    }
}