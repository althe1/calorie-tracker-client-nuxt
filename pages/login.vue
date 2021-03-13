<template>
  <b-row class="justify-content-center h-75 align-items-center">
    <b-col md="3" class="border p-4">
      <b-alert v-model="loginAlert" variant="danger"
        >Please check your login credentials and retry.</b-alert
      >
      <b-form @submit.prevent="onLogin">
        <b-form-group label="Username:">
          <b-form-input
            v-model="form.username"
            placeholder="Enter username"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Password:">
          <b-form-input
            v-model="form.password"
            type="password"
            placeholder="Enter password"
            required
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Login</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      loginAlert: false
    };
  },
  methods: {
    async onLogin() {
      try {
        await this.$auth.loginWith("cookie", { data: this.form });
      } catch {
        this.loginAlert = 3;
      }
    }
  }
};
</script>

<style></style>
