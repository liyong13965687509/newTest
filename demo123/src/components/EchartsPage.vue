<template>
  <div class="echartsPage">
    <div id="myChart" :style="{width: '600px', height: '600px'}"></div>
  </div>

</template>

<script>
  export default {
    name: "EchartsPage",
    data() {
      return {
        // echarts数据
        chartArr: [5, 20, 36, 10, 10],
        // 定时器
        timer: '',
      }
    },
    mounted() {
      this.drawLine();
      this.timer = setInterval(this.get, 1000);
    },
    beforeDestroy() {
      clearInterval(this.timer);
    },
    watch: {
      chartArr() {
        this.drawLine();
      }
    },
    methods: {
      // 改变echarts数据
      get() {
        this.chartArr = this.chartArr.map(() => Math.random() * 10);
      },
      // echarts实现
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'));
        // 绘制图表
        myChart.setOption({
          title: {text: '在Vue中使用echarts'},
          tooltip: {},
          xAxis: {
            data: ["VUE", "CSS3", "HTML5", "JS", "JQUERY"]
          },
          yAxis: {},
          series: [{
            name: '技能',
            type: 'bar',
            data: this.chartArr
          }]
        });
      }
    },

  }
</script>

<style scoped>

</style>
