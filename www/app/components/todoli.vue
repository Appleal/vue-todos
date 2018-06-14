<template>
    <li>
        <input type="checkbox" ref="box" v-model="item.done" @click="changeDone(item)">
    <span v-if="!isShow" @dblclick="showInput" :class="{cur:item.done}">{{item.title}}</span>
        <input type="text" v-model="item.title" v-focus v-if="isShow" @blur="hideInput(item)">
        <button @click="del(item.id)">删除</button>
    </li>
</template>

<script>
    export default {
        name: "todoli",
        props:["item"],
        data(){
            return {
                isShow:false
            }
        },
        methods:{
            del(id){
                this.$store.dispatch("DEL",{id})
            },
            showInput(){
                this.isShow = !this.isShow;
            },
            hideInput(item){
               this.showInput();
                this.$store.dispatch("CHANGETITLE",item)
            },
            changeDone(item){
                this.$store.dispatch("CHANGEDONE",{id:item.id,done:this.$refs.box.checked})
            }
        },
        directives:{
            focus:{
                inserted(el){
                    el.focus()
                }
            }
        }

    }
</script>

<style scoped lang="stylus">
    .cur
        text-decoration: line-through;
        color deepskyblue


</style>