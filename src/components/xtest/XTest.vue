<template>
  <div>
    {{count}}
    <el-button @click="click()">确定</el-button>
  </div>

</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  name: "XTest",
  data(){
    return{

    }
  },
  methods:{
    getCount(){
      return this.$store.state.a.state.count
    },
    click(){
      // this.getdata().then(()=>{
      //   console("12")
      // })
      this.$store.dispatch("a/"+this.$storeMethods.GETDATA).then(res=>{
        alert(res)
      })
      //this.abc(4)
      //alert(this.xxx)
      //this.$store.commit(this.$storeMethods.ADD,5)
    },
    ...mapMutations([
      'a/abc'
    ]),
    ...mapActions([
        'a/getdata'
    ])
  },
  computed:{
    ...mapState('a',{
      count:'count'
    }),
    ...mapGetters({
      xxx:'a/login'
    })
  },
}
</script>

<style scoped>

</style>