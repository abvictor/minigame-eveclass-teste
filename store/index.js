export const state = () => ({
  questions: [],
  response: "",
  isCorrect: false,
});

export const mutations = {
  add(state, question) {
    state.questions.push(question);
  },
  addResponse(state, response) {
    state.response = response;
  },
  setIsCorrect(state, response) {
    state.isCorrect = response;
  },
};

export const getters = {
  getResponse(state) {
    return state.response;
  },
};
