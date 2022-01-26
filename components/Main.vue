<template lang="">
  <div class="main__content">
    <div>
      <Questions class="questions__container" />
      <div class="button__container">
        <NuxtLink :to="{ path }">
          <Button />
        </NuxtLink>
      </div>
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
    console.log(this.$route.path);
    console.log(this.path, "cenourinha");
    console.log(this.id, "abobra");
  },
  props: ["path"],
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
.main__content > div {
  height: 100%;
}

.button__container {
  display: flex;
  justify-content: center;
}
</style>
