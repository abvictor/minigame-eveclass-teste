<template>
  <div class="container">
    <Header />
    <NuxtLink to="/play/1">
      <button class="play__button">Jogar</button>
    </NuxtLink>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "App",
  components: {
    Header,
  },
  async asyncData({ $axios }) {
    const questions = await $axios.$get("/questions");
    return { questions };
  },
  created() {
    this.$store.commit("add", this.questions);
  },
};
</script>

<style>
html,
body,
#__nuxt,
#__layout {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top, #013be5, #0f4bff, #4271ff);
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  justify-content: space-evenly;
}
.play__button {
  width: 120px;
  height: 50px;

  border: 2px solid black;
  border-radius: 15px;

  font-size: 18px;
  color: black;
  font-family: "Press Start 2P", cursive;

  background-color: #f58b00;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  opacity: 1;
  cursor: pointer;
}
.play__button:hover {
  opacity: 0.8;
  transition: opacity 0.2s;
}
</style>
