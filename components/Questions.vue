<template lang="">
  <div>
    <h2 class="minigame__title">Minigame</h2>
    <div class="question__container">
      <h4 class="question__title">Questão {{ index + 1 }}.</h4>
      <p class="question__sentence">{{ question.statement }}</p>
    </div>
    <div class="choices__container">
      <div>
        <input
          type="radio"
          id="q1"
          name="q1"
          value="1"
          @change="onChange($event)"
        />
        <label for="q1">A. {{ question.choices[0].sentence }}</label>
      </div>
      <div>
        <input
          type="radio"
          id="q2"
          name="q1"
          value="2"
          @change="onChange($event)"
        />
        <label for="q2">B. {{ question.choices[1].sentence }} </label>
      </div>
      <div>
        <input
          type="radio"
          id="q3"
          name="q1"
          value="3"
          @change="onChange($event)"
        />
        <label for="q3">C. {{ question.choices[2].sentence }}</label>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "Questions",
  components: { Button },
  created() {
    this.$store.commit("addResponse", "");
    this.question = this.$store.state.questions[0][this.index];
  },
  props: ["index"],
  methods: {
    onChange(event) {
      this.picked = event.target.value;
      this.$store.commit(
        "setIsCorrect",
        this.picked == this.question.correctChoice
      );
      this.$store.commit("addResponse", this.picked);
    },
  },
};
</script>

<style>
.minigame__title {
  display: flex;
  justify-content: center;

  font-family: "Press Start 2P", cursive;
  font-size: 14px;

  margin-top: 0;
}

.question__container {
  border: 2px solid #295eff;
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
}

.question__sentence {
  font-weight: 300;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  line-height: 24px;
  text-align: justify;
}
.question__title {
  font-size: 12px;
  font-family: "Press Start 2P", cursive;
}

.choices__container > div {
  font-size: 18px;
  line-height: 24px;
  text-align: justify;
  font-family: "Roboto", sans-serif;

  margin-bottom: 40px;
}
.choices__container {
  margin: 40px 25px;
}
</style>
