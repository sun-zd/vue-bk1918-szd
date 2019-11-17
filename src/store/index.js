import Vue from "vue";
import Vuex from "vuex";
import { stat } from "fs";

Vue.use(Vuex);


const state = {
  
  goodsList: [
    //localStorage.getItem("kly")
    // {
    //   id: 1,
    //   name: "【国内专柜秒发】美国?雅诗兰黛 新多效智妍眼霜5ml",
    //   goodIntroduce: "5ml*1",
    //   price: 59.9,
    //   num: 1,
    //   check: false,
    //   img:''
    // },

  ],
  cartList:[]
  

}
const actions = {
  handleactionAdd({ commit }, params) {
    commit("handleMutationAdd", params);
  },
  handleActionCheck({ commit }, params) {
    commit("handleMutationCheck", params);
  },
  handleActionReduce({ commit }, params) {
    commit("handleMutationReduce", params)
  },
  handleActionAllCheck({ commit }, params) {
    commit("handleMutationAllCheck", params);
  },
  handlePush({ commit }, params) {
    commit("handlePushDb", params)
  }
}
const mutations = {
  
  handleMutationAdd(state, params) {
    state.goodsList[params].num++;

  },
  handleMutationCheck(state, params) {
    state.goodsList[params].check = !state.goodsList[params].check;
  },
  handleMutationReduce(state, params) {
    if (
      state.goodsList[params].num <= 1) {
      state.goodsList[params].num++;
    }
    state.goodsList[params].num--;

  },
  handleMutationAllCheck(state, params) {
    for (var i = 0; i < state.goodsList.length; i++) {
      if (state.goodsList[0].check == false) {

      }
      state.goodsList[i].check = params;
    }
  },
  handleGet(state,params){
    console.log(111)
    state.goodsList = params
  },
  handlePushDb(state, params) {
    console.log(params)
    var flag=0;
    var index='';
    for(var i=0;i<state.goodsList.length;i++){
        if(params.id==state.goodsList[i].id){
          flag=1;
          index=i;
          break;
        }
    }
    if(flag==0){
      state.goodsList.push(params)
    }else{
      state.goodsList[index].num+=params.num
    }
    console.log( state.goodsList)
    console.log( isNaN(state.goodsList.price) );
    localStorage.setItem("kly",JSON.stringify(state.goodsList))
  }
}

let getters = {
  countPrice() {
    let sumPrice = 0;
    let sumCount = 0;
    for (var i = 0; i < state.goodsList.length; i++) {
      if (state.goodsList[i].check) {
        sumCount += Number(state.goodsList[i].num)
        sumPrice += Number(state.goodsList[i].price * 100) * Number(state.goodsList[i].num)
      }

    }
    return {
      sumPrice,
      sumCount
    }
  }
}
const store = new Vuex.Store({

  state,
  actions,
  mutations,
  getters
})

export default store;
