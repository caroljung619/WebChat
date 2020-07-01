<template>
  <div class="hello">
    <h1>Register</h1>
    <input placeholder="username" type="text" v-model="username" />
    <br />
    <br />
    <input placeholder="password" type="password" v-model="password" />
    <br />
    <br />
    <input placeholder="email address" type="text" v-model="email" />
    <br />
    <br />
    <button v-on:click="submit">Submit</button>
    <br />
    <router-link to="/login">로그인 하기</router-link>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      email: ""
    };
  },
  methods: {
    submit: function() {
      console.log("username is: " + this.username);
      console.log("password is: " + this.password);
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
