<template>
  <div>
    <b-alert variant="danger" :show="error">Submission failed.</b-alert>
    <b-alert variant="success" :show="success">Added Daily Calories.</b-alert>
    <b-form @submit.prevent="onSubmit" inline>
      <b-input-group prepend="Calorie value: ">
        <b-form-input
          v-model="value"
          type="number"
          placeholder="Enter calorie amount"
          required
        />
      </b-input-group>
      <b-button variant="primary" type="submit" class="ml-2">
        Submit
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
      error: false,
      success: false
    };
  },
  methods: {
    async onSubmit() {
      try {
        const entry = await this.$axios.$post("/calories", {
          value: this.value
        });
        this.$emit("addValue", entry);
        this.success = 3;
        this.value = null;
        this.error = false;
      } catch {
        this.error = 3;
        this.success = false;
      }
    }
  }
};
</script>

<style></style>
