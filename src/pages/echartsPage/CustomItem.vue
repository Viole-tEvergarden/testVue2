<!--  -->
<template>
  <div class="myEchartsBar" ref="myEchartsBar"></div>
</template>

<script>
export default {
  name: 'CustomItem',
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
  },
  mounted() {
    this.registerShape()
    this.myChart = this.$echarts.init(this.$refs.myEchartsBar);
    this.init()
  },
  methods: {
    init() {
      for (let i = 0; i < 15; ++i) {
        this.data.push(Math.round(Math.random() * 10));
      }
      // this.data = [100, 10]
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
          {
            z: 1,
            realtimeSort: true,
            type: 'custom',
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
            },
            renderItem: this.renderItem,
          }
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
            {
              type: 'custom',
              data: _this.data
            }
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
    },
    renderItem(params,api){
      // 柱子索引值
      const { seriesIndex } = params;

      // 基础坐标
      const basicsCoord = api.coord([api.value(0), api.value(1)]);
      // 顶部基础 y 轴
      const topBasicsYAxis = basicsCoord[1];
      // 基础 x 轴
      const basicsXAxis = basicsCoord[0];
      // 底部 y 轴
      const bottomYAxis = api.coord([api.value(0), 0])[1];

      return {
        type: 'group',
        children: [
          {
            type: 'bar',
            transition: 'all',
            updateAnimation: {
              duration: 300
            },
            shape: {
              topBasicsYAxis,
              basicsXAxis,
              bottomYAxis,
            },
            style: {
              ...api.style(),
              fill: {
                type: 'linear',
                x: 0, y: 0, x2: 0, y2: 1,
                colorStops: [
                  { offset: 0, color: '#e6291e' },
                  { offset: 1, color: '#a938fe' },
                ]
              }
            },
          },
          {
            type: 'ellipticTop',
            transition: 'all',
            updateAnimation: {
              duration: 300
            },
            shape: {
              topBasicsYAxis,
              basicsXAxis,
              bottomYAxis,
            },
            label: {show:false},
            style: api.style(),
          },
          {
            type: 'ellipticBot',
            transition: 'all',
            updateAnimation: {
              duration: 300
            },
            shape: {
              topBasicsYAxis,
              basicsXAxis,
              bottomYAxis,
            },
            style: api.style(),
          },
        ]
      }
    },
    registerShape(){
       const bar = this.$echarts.graphic.extendShape({
        buildPath(ctx, shape) {
          const { topBasicsYAxis, bottomYAxis, basicsXAxis } = shape;
          // 侧面宽度
          const WIDTH = 25/2;

          const p1 = [basicsXAxis - WIDTH, topBasicsYAxis];
          const p2 = [basicsXAxis - WIDTH, bottomYAxis];
          const p3 = [basicsXAxis + WIDTH, bottomYAxis];
          const p4 = [basicsXAxis + WIDTH, topBasicsYAxis];

          ctx.moveTo(p1[0], p1[1]);
          ctx.lineTo(p2[0], p2[1]);
          ctx.lineTo(p3[0], p3[1]);
          ctx.lineTo(p4[0], p4[1]);
        },
      });

      const ellipticBot = this.$echarts.graphic.extendShape({
        buildPath(ctx, shape) {
          const { topBasicsYAxis, bottomYAxis, basicsXAxis } = shape;
          // 侧面宽度
          const WIDTH = 25/2;

          ellipse(ctx, basicsXAxis, topBasicsYAxis, WIDTH, WIDTH/2)
        },
      });

      const ellipticTop = this.$echarts.graphic.extendShape({
        buildPath(ctx, shape) {
          const { topBasicsYAxis, bottomYAxis, basicsXAxis } = shape;
          // 侧面宽度
          const WIDTH = 25 / 2;

          ellipse(ctx, basicsXAxis, bottomYAxis, WIDTH, WIDTH / 2)
        },
      });

       function ellipse(ctx, x, y, a, b) {
        const step = (a > b) ? 1 / a : 1 / b;

        ctx.moveTo(x + a, y);
        for (let i = 0; i < 2 * Math.PI; i += step) {
          ctx.lineTo(x + a * Math.cos(i), y + b * Math.sin(i));
        }
        ctx.fill();
      }
      this.$echarts.graphic.registerShape('bar', bar);
      this.$echarts.graphic.registerShape('ellipticBot', ellipticBot);
      this.$echarts.graphic.registerShape('ellipticTop', ellipticTop);
    }
  }
}
</script>
<style scoped>
.myEchartsBar {
  width: 1000px;
  height: 1000px;
}
</style>
