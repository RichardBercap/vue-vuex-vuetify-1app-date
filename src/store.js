import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading:{
      titulo:'',
      estado:false,
      color:'primary'
    }
  },
  mutations: {
    mostrarLoading(state, payloader){
      state.loading.titulo = payloader.titulo;
      state.loading.color  = payloader.color;
      state.loading.estado = true;
    },
    ocultarLoading(state){
      state.loading.estado = false;
    }
  },
  actions: {

  }
})
