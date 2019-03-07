import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router.js'

let _api = axios.create({
  baseURL: 'https://dragon-duel.herokuapp.com/api'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    champions: [],
    activeChampion: {},
    dragons: [],
    activeDragon: {},
    activeGame: {}
  },
  mutations: {
    setChampions(state, data) {
      state.champions = data
    },

    setDragons(state, data) {
      state.dragons = data
    },

    setGame(state, data) {
      state.activeGame = data
    },

    setActiveChampion(state, data) {
      state.activeChampion = data
    },

    setActiveDragon(state, data) {
      state.activeDragon = data
    }


  },
  actions: {
    //get request general for all champs and all dragons
    getChampions({ commit, dispatch }) {
      _api.get('champions')
        .then(res => {
          commit('setChampions', res.data)
        })
    },

    getDragons({ commit, dispatch }, payload) {
      _api.get('dragons')
        .then(res => {
          commit('setDragons', res.data)
        })
    },

    getGame({ commit, dispatch }, payload) {
      _api.get('games/' + payload)
        .then(res => {
          commit('setGame', res.data)
          commit('setActiveChampion', res.data._champion)
          commit('setActiveDragon', res.data._dragon)
        })
    },

    //get game by id
    createGame({ commit, dispatch }, payload) {
      _api.post('games', payload)
        .then(res => {
          //set the game in the state
          commit('setGame', res.data.game)
          commit('setActiveChampion', res.data.game._champion)
          commit('setActiveDragon', res.data.game._dragon)
          //router push
          router.push({ name: 'Game', params: { id: res.data.game._id } })
        })
    },
    //put reuqest, goes to game, object gameid and the string for the attack
    attack({ commit, dispatch }, payload) {
      _api.put('games/' + payload._id, payload)
        .then(res => {
          commit('setGame', res.data)
        })
    },

    changeActiveChampion({ commit, dispatch }, payload) {
      commit('setActiveChampion', payload)
    },

    changeActiveDragon({ commit, dispatch }, payload) {
      commit('setActiveDragon', payload)
    }

  }
})
