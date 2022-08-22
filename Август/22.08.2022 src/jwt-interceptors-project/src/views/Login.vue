<template>
  <div class="login-container">
    <h1 class="login-header">Welcome to my project!</h1>
    <v-card width="600">
      <v-form>
        <v-container>
          <v-text-field
              label="Email"
              v-model="email"
              outlined
              required
          ></v-text-field>
          <v-text-field
              label="Password"
              v-model="password"
              outlined
              required
          ></v-text-field>
          <v-btn @click="tryLogin">Log in</v-btn>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import instance from "../api/http.js";

export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    tryLogin() {
      instance.post('auth/login', {
        email: this.email,
        password: this.password
      }).then(response => {
        localStorage.setItem('token', response.data.access_token)
        this.$router.push({ name: 'Products' })
      })
    }
  }
}
</script>

<style scoped>
.login-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.login-header {
  color: white;
  font-size: 3em;
  text-align: center;
  margin-bottom: 30px;
  text-shadow: 3px 3px 0 rgb(79 79 79);
}
</style>