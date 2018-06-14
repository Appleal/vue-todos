<template>
    <div>
        <add></add>
      <ul>
          <li is="todoli" v-for="item in todos" :item="item"></li>

      </ul>
        <div>
            <p>全部：{{$store.state.todos.length}}个所有事项</p>
            <p>已做：{{hasFinish.length}}个所有事项</p>
            <p>未做：{{notFinish.length}}个所有事项</p>
        </div>
        <div>
            <button @click="all">查看全部</button>
            <button @click="yizuo">查看已做</button>
            <button @click="weizuo">查看未做</button>
        </div>
    </div>
</template>

<script>
    import todoli from "./components/todoli.vue"
    import add from "./components/add.vue"
    export default {
        name: "app",
        data(){
            return {
                state:"all"
            }
        },
        created(){
            this.$store.dispatch("GETALL")
        },
        computed:{
            todos(){
               if (this.state=="all"){
                   return this.$store.state.todos
               } else if (this.state=="yizuo"){
                   return this.$store.getters.hasDone
               } else if (this.state=="weizuo") {
                   return this.$store.getters.notDone
               }
            },
            hasFinish(){
                return this.$store.getters.hasDone
            },
            notFinish(){
                return this.$store.getters.notDone
            },

        },
        components:{
            todoli,add
        },
        methods:{
            all(){
                this.state = "all"
            },
            yizuo(){
                this.state = "yizuo"
            },
            weizuo(){
                this.state = "weizuo"
            }
        }

    }
</script>
