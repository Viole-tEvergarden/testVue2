<!--  -->
<template>
  <div class="myEchartsBar" ref="myEchartsBar"></div>
</template>

<script>
export default {
  name: 'TrendsRankList',
  components: {},
  data() {
    return {
      myChart: null,
      data: [],
      option: {},
      xAxis: ['ABCDEF中文', '一个条目的名称一个条目的名称一个条目的名称', 'C', 'D', 'E']
    };
  },
  mounted() {
    this.myChart = this.$echarts.init(this.$refs.myEchartsBar);
    setTimeout(() => {
      this.init()
    }, 1000)
  },
  methods: {
    init() {
      for (let i = 0; i < 5; ++i) {
        this.data.push(Math.round(Math.random() * 10));
      }
      let data = this.data;
      this.option = {
        xAxis: {
          type: 'category',
          data: this.xAxis,
          axisLabel: {
            show: false,
          },
        },
        grid:{
          left: '10%',
          right:'10%'
        },
        yAxis: {
          type: 'value',
        },
        series: [{
          type: 'bar',
          barWidth: 40,
          data: [10, 70, 30, 40, 50],
        }],
        graphic: {
          elements:this.getEles(),
        },
      };
      this.option && this.myChart.setOption(this.option);

    },
    getEles(){
      return this.xAxis.map((item,index) => {
        const widthe = this.$refs.myEchartsBar.offsetWidth;
        const gridw = widthe * (1 - .1 - .1);
        const barAndGap = gridw / this.data.length;
        const leftBase = widthe * .1;
        const gap = (barAndGap - 40)/2;
        const fontSize = 12
        return {
          type: 'text',
          left: leftBase + gap - (fontSize+5) + index * barAndGap,
          top: 'center',
          rotation: 1.57,//20.42
          // item.split('').join('\n')
          style: {
            text: item,
            fill: '#000',
            fontSize: 12,
          },
        }
      })

    }
  }
}
</script>
<style scoped>
.myEchartsBar {
  width: 90vw;
  height: 90vh;
}
</style>
