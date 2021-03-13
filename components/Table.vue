<template>
  <div>
    <b-table striped hover :items="items" :fields="fields">
      <template #cell(remove)="data">
        <b-icon-trash
          variant="danger"
          style="cursor: pointer;"
          @click="confirmation(data.item.id)"
        />
      </template>
    </b-table>
  </div>
</template>

<script>
import { format } from "date-fns";
import { BIconTrash } from "bootstrap-vue";
export default {
  components: { BIconTrash },
  props: ["items"],
  methods: {
    confirmation(id) {
      this.boxOne = "";
      this.$bvModal
        .msgBoxConfirm("Are you sure you want to delete?", {
          okTitle: "Delete",
          okVariant: "danger"
        })
        .then(value => {
          console.log({ value });
          console.log({ id });
          if (value) {
            this.$emit("deleteValue", id);
          }
        })
        .catch(err => {
          // An error occurred
        });
    }
  },
  data() {
    return {
      fields: [
        { key: "value", label: "Calories" },
        {
          key: "created_at",
          label: "Date",
          formatter: date => format(new Date(date), "MM/dd/yyyy")
        },
        {
          key: "remove",
          label: ""
        }
      ]
    };
  }
};
</script>

<style></style>
