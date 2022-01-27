<template>
  <div class="container">
    <Header />
    <Main
      :path="this.id + '/outcome/' + this.$store.getters.getResponse"
      :questionId="this.id"
    />
  </div>
</template>

<script>
import Header from "../../components/Header";

export default {
  name: "App",
  components: {
    Header,
  },
  created() {
    !!this.$route.params.id
      ? (this.id = this.$route.params.id)
      : (this.id = null);
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

.main__content {
  width: 80%;
  height: 70%;

  background-color: #f5f5f5;
  border-radius: 15px;
  border: 4px solid black;
  max-width: 1200px;
}
</style>
