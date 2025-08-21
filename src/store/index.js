import { createStore } from 'vuex'

export default createStore({
  state: {
    participants: []
  },
  mutations: {
    ADD_PARTICIPANT(state, participant) {
      state.participants.push({
        ...participant,
        id: Date.now(),
        registrationDate: new Date().toLocaleDateString()
      })
    }
  },
  actions: {
    addParticipant({ commit }, participant) {
      commit('ADD_PARTICIPANT', participant)
    }
  },
  getters: {
    getAllParticipants: (state) => state.participants,
    getParticipantsCount: (state) => state.participants.length
  }
})
