<template lang="">
  <div>
    <h2 class="minigame__title">Minigame</h2>
    <div class="question__container">
      <h4 class="question__title">Questão 1.</h4>
      <p class="question__sentence">
        Você acordou na floresta tonto e com uma grande dor de cabeça, sem
        nenhuma memória de como foi parar ali. Um barulho cada vez mais intenso
        foi o que despertou você desse apagão. Após abrir os olhos e
        levantar-se, você observa uma manada de búfalos vindo em sua direção, a
        pouquíssimos metros de distância. Oque você faz?
      </p>
    </div>
    <div class="choices__container">
      <div>
        <input type="radio" id="q1" name="q1" value="A" />
        <label for="q1">A. Corre o mais rápido possível</label>
      </div>
      <div>
        <input type="radio" id="q2" name="q1" value="B" />
        <label for="q2">B. Sobe na árvore</label>
      </div>
      <div>
        <input type="radio" id="q3" name="q1" value="C" />
        <label for="q3">C. Se finge de morto</label>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "./Button";
export default {
  name: "Questions",
  components: { Button },
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
