<template>
  <apexchart
    v-if="series"
    width="500"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
import { format } from "date-fns";
export default {
  props: ["data"],
  computed: {
    calories() {
      return this.data.map(entry => entry.value);
    },
    times() {
      return this.data.map(entry =>
        format(new Date(entry.created_at), "MM/dd/yyyy")
      );
    },
    series() {
      return [
        {
          name: "Calories",
          data: this.calories
        }
      ];
    },
    chartOptions() {
      return {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight"
        },
        title: {
          text: "Calories by Day",
          align: "left"
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: this.times
        }
      };
    }
  }
};
</script>

<style></style>
