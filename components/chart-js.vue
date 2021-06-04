<template>
  <div class="flex w-full h-full">
    <!-- chart -->
    <canvas ref="canvas" v-show="chartData" class="w-full h-full"></canvas>
    <!-- loading -->
    <svg v-if="!chartData" class="m-auto animate-spin h-7 w-7 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  props:["chartData"],
  methods:{
    setChart(){
        if(this.chartData){
          new Chart(this.$refs.canvas.getContext('2d'), this.chartData);
        }
    }
  },
  mounted() {
    this.setChart()
  },
  watch:{
    chartData(){
      console.log(1)
      this.setChart()
    }
  }
};
</script>
