import LoadingView from "./index.vue";
import Vue from "vue";
class JSloading{
    constructor(){
        let LoadingFn = Vue.extend(LoadingView);
        this.LoadingVm = new LoadingFn({
            el:document.createElement("div"),
            
        })
    }
    loadingMount(){
        document.body.appendChild(this.LoadingVm.$mount().$el);
    }
    loadingDestory(){
        document.body.removeChild(this.LoadingVm.$mount().$el);
    }
}
export default new JSloading();