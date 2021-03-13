<template>
  <b-row class="justify-content-center h-75 align-items-center">
    <b-col md="3" class="border p-4">
      <b-alert v-model="registerAlert" variant="danger"
        >Please renter username and passwords.</b-alert
      >
      <b-form @submit.prevent="onRegister">
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
        <b-form-group label="Validate Password:">
          <b-form-input
            v-model="form.password2"
            type="password"
            placeholder="Enter password again"
            required
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="success">Register</b-button>
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
        password: "",
        password2: ""
      },
      registerAlert: false
    };
  },
  methods: {
    async onRegister() {
      try {
        if (this.form.password !== this.form.password2) {
          this.registerAlert = 3;
          return;
        }
        await this.$axios.post("/users/register", this.form);
        await this.$auth.loginWith("cookie", { data: this.form });
      } catch {
        this.registerAlert = 3;
      }
    }
  }
};
</script>

<style></style>
