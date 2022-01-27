<template lang="">
  <div class="main__content">
    <div v-if="!this.$route.params.slug">
      <Questions class="questions__container" :index="this.questionId - 1" />
    </div>
    <div class="result__container" v-else>
      <h1 class="title">Resultado</h1>

      <h3 class="result">
        {{
          this.question.choices[Number(this.$store.getters.getResponse) - 1]
            .result
        }}
      </h3>
    </div>

    <div v-if="this.$store.getters.getResponse" class="button__container">
      <NuxtLink :to="{ path }">
        <Button :title="{ buttonTitle }" />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import Questions from "./Questions";
export default {
  name: "Main",
  components: {
    Questions,
  },
  created() {
    this.question = this.$store.state.questions[0][this.questionId - 1];

    if (this.$route.params.slug && this.$store.state.isCorrect) {
      this.buttonTitle = "Avançar";
    } else if (this.$route.params.slug && !this.$store.state.isCorrect) {
      this.buttonTitle = "Recomeçar";
    } else {
      this.buttonTitle = "Responder";
    }
  },
  props: ["path", "questionId", "outcomeId"],
};
</script>

<style>
.main__content > div > .questions__container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
  padding: 20px;
  flex: 1;
}

.main__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
}

.button__container {
  display: flex;
  justify-content: center;
}

.result__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 80%;
}
.title {
  font-family: "Press Start 2P", cursive;
  font-size: 20px;
}

.result {
  font-weight: 400;
  font-family: "Roboto", sans-serif;
}
</style>
