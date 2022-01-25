<template>
  <div class="container">
    <Header />
    <Main />
  </div>
</template>

<script></script>

<style>
html,
body,
#__nuxt,
#__layout {
  width: 100%;
  height: 100%;
  background-color: #3462ea;
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
}
</style>
