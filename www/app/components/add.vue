<template>
    <div>
        <input type="text" v-model.trim="txt" v-on:keyup.enter="add">
        <button  @click="add" >新增</button>
    </div>
</template>

<script>
    export default {
        name: "add",
        data() {
            return {
                txt: ''
            }
        },
        methods: {
            add() {
                //循环这个id值我觉得做法有点low
                var id = "";
                var str = '453265897';
                for (var i = 0; i < 8; i++) {
                    id += str[~~(Math.random() * str.length)]
                }
                this.$store.dispatch("ADD", {id: id, title: this.txt, done: false})
                this.txt = ""
            }
        }
    }
</script>

<style scoped>

</style>