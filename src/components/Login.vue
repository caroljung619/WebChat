<template>
  <div class="hello">
    <h1>Login</h1>
    <input placeholder="username" type="text" v-model="username" />
    <br />
    <br />
    <input placeholder="password" type="text" v-model="password" />
    <br />
    <br />
    <button v-on:click="submit">Submit</button>
    <br />
    <router-link to="/register">회원가입 하기</router-link>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    submit: function() {
      console.log("username is: " + this.username);
      console.log("password is: " + this.password);
      this.$router.push("/chat-start");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
