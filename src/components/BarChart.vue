<template>
  <canvas ref="barChart" id="barChart" width="400" height="400"></canvas>
</template>

<script>
export default {
  props: ['propsdata'],
  mounted() {
    //var ctx = document.getElementById("barChart").getContext("2d");
    var myChart = new this.$_Chart(this.$refs.barChart, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: this.propsdata,
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
        onClick: () => { //function() {~} 로 하는 경우 bind가 안 되어 this.$emit is not a function 발생
          this.$emit('refresh:chart');
        }
      }
    });
    console.log(myChart);
  }
}
</script>

<style>

</style>