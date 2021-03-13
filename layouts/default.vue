<template>
  <b-container fluid class="p-0" style="height: 100vh;">
    <b-navbar v-if="$auth.loggedIn" sticky toggleable="lg" type="dark" variant="info">
      <b-button @click="onLogout" variant="secondary" class="ml-auto">
        Logout
      </b-button>
    </b-navbar>
    <Nuxt />
  </b-container>
</template>

<script>
export default {
  methods: {
    async onLogout () {
      await this.$auth.logout();
    }
  }
}
</script>