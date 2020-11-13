import vue from 'vue'
import vuex from 'vuex'
import storeMethods from './StoreMethod'
vue.use(vuex)
const myStore = new vuex.Store({
    modules:{
        a:{
            namespaced:true,
            state:{
                count :1
            },
            mutations:{
                [storeMethods.ADD](state,count){
                    state.count=state.count+count
                },
                abc(state,count){
                    state.count=state.count+count
                }
            },
            getters:{
                // eslint-disable-next-line no-unused-vars
                [storeMethods.LOGIN](state){
                    myStore.commit(storeMethods.ADD,5)
                    return 666
                }
            },
            actions:{
                [storeMethods.GETDATA](context){
                    // eslint-disable-next-line no-unused-vars
                    return new Promise((resolve, reject)=>{
                        setTimeout(()=>{
                            context.commit(storeMethods.ADD,3)
                            resolve('123')
                        },2000)
                    })
                }
            }
        },
    },


})
export default myStore