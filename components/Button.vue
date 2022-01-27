<template>
  <div>
    <button class="button">{{ title.buttonTitle }}</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ["title"],
};
</script>

<style scoped>
.button {
  width: 180px;
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
.button:hover {
  opacity: 0.8;
  transition: opacity 0.2s;
}
</style>
