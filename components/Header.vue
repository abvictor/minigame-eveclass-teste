<template>
  <header class="header">You 2SE</header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 70%;
  max-width: 900px;
  height: 80px;
  font-family: "Press Start 2P", cursive;

  font-size: 32px;
  text-align: center;
  font-weight: 400;
  color: black;
  background-color: #f5f5f5;
  border-radius: 10px;
  border: 5px solid black;
}
</style>
