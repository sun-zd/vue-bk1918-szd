import Vue from "vue"
import Bscroll from "./bscroll"

let commponentMap=[
    Bscroll
];

commponentMap.forEach(item=>{
    Vue.component(item.name,item)
})