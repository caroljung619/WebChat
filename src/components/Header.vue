<template>
  <header>
    <h1>{{ title }}</h1>
    <button v-on:click="clickRegister">Register</button>
    <button v-on:click="clickLogin">Login</button>
  </header>
</template>

<script>
// import router from "./router";

export default {
  data() {
    return {
      title: "WebChat"
    };
  },
  methods: {
    clickLogin: function() {
      this.$router.push("/login");
    },
    clickRegister: function() {
      this.$router.push("/register");
    }
  }
};
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 4px;
  margin: 0px;
  /* display: flex; */
}
button {
  background: none;
  border-color: white;
  color: white;
  float: right;
  width: 100px;
  height: 40px;
  font-size: 20px;
  margin-left: 10px;
}
h1 {
  color: white;
  text-align: center;
  padding: 0px;
  margin: 0px;
  display: inline-flex;
}
</style>
