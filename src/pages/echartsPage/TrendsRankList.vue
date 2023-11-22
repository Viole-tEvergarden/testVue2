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
      duration: 200,
      barWidth: 25,
      data: []
    };
  },
  computed: {
    theMaxOfYaxisNum() {
      const max = _.max(this.data);
      return max * 1.2 || 0
    },
    newShadowHight() {
      return this.data.map(item => {
        return this.theMaxOfYaxisNum - item
      });
    },
    bottomPictorialBar() {
      return {
        z: 2,
        type: 'pictorialBar',
        symbolOffset: ['0%', '50%'],
        symbolSize: [this.barWidth, 12],
        toolltip: {
          show: false
        },
        itemStyle: {
          color: '#a938fe'
        },
        data: [1, 1, 1, 1, 1],
      }
    },
    topPictorialBar() {
      // 顶部圆片
      return {
        z: 3,
        realtimeSort: true,
        symbolPosition: 'end',
        type: 'pictorialBar',
        symbolOffset: ['0%', '-50%'],
        symbolSize: [this.barWidth, 12],
        toolltip: {
          show: false
        },
        itemStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: '#FF4960' },
              { offset: 1, color: '#FF67FF' },
            ]
          }
        },
        data: this.data,
      }
    },
    backGroundBarTop() {
      // 背景的顶部
      return {
        z: 3,
        type: 'pictorialBar',
        symbolPosition: 'end',
        symbolOffset: ['0%', '-50%'],
        symbolSize: [this.barWidth, 12],
        toolltip: {
          show: false
        },
        itemStyle: {
          itemStyle: {
            color: {
              type: 'linear',
              x: 0, y: 0, x2: 0, y2: 1,
              colorStops: [
                { offset: 0, color: '#0FB7EE' },
                { offset: 1, color: '#87C2FF' },
              ]
            }
          }
        },
        data: new Array(this.data.length).fill(this.theMaxOfYaxisNum),
      }
    }
  },
  mounted() {
    this.myChart = this.$echarts.init(this.$refs.myEchartsBar);
    this.myChart.showLoading()
    setTimeout(()=>{
      this.init()
    },1000)
  },
  methods: {
    init() {
      for (let i = 0; i < 15; ++i) {
        this.data.push(Math.round(Math.random() * 10));
      }
      this.option = {
        yAxis: {
          max: 'dataMax',
          show: false
        },
        legend: { show: false },
        xAxis: {
          type: 'category',
          data: new Array(this.data.length).fill('A'),
          animationDuration: 0,
          animationDurationUpdate: this.duration,
          axisLine: { show: false },
          axisTick: { show: false },

        },
        series: [
          this.bottomPictorialBar,
          {
            z: 1,
            realtimeSort: true,
            type: 'bar',
            barWidth: this.barWidth,
            data: this.data,
            showBackground: true,
            backgroundStyle: {
              color: {
                type: 'linear',
                x: 0, y: 0, x2: 0, y2: 1,
                colorStops: [
                  { offset: 0, color: '#1DE4F3' },
                  { offset: 1, color: '#38AAFE' },
                ]
              }
            },
            label: {
              show: true,
              position: 'top',
              valueAnimation: true
            },
            itemStyle: {
              color: {
                type: 'linear',
                x: 0, y: 0, x2: 0, y2: 1,
                colorStops: [
                  { offset: 0, color: '#e6291e' },
                  { offset: 1, color: '#a938fe' },
                ]
              }
            }
          },
          this.topPictorialBar,
          this.backGroundBarTop
        ],
        animationDuration: 0,
        animationDurationUpdate: this.duration,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
      };
      this.option && this.myChart.setOption(this.option);
      const _this = this
      function run() {
        for (var i = 0; i < _this.data.length; ++i) {
          if (Math.random() > 0.9) {
            _this.$set(_this.data, i, _this.data[i] + Math.round(Math.random() * 10))
          } else {
            _this.$set(_this.data, i, _this.data[i] + Math.round(Math.random() * 1))
          }
        }
        _this.myChart.setOption({
          series: [
            _this.bottomPictorialBar,
            {
              type: 'bar',
              data: _this.data
            },
            _this.topPictorialBar,
            _this.backGroundBarTop
          ]
        });
        _this.myChart.hideLoading()
      }
      setTimeout(function () {
        run();
      }, 0);
      setInterval(function () {
        run();
      }, 500);
    }
  }
}
</script>
<style scoped>
.myEchartsBar {
  width: 100vw;
  height: 90vh;
}
</style>
