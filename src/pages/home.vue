<template>
  <div ref="bar-3d" class="bar-3d" style="width:100vw;height:100vh"></div>
</template>
<script>
import * as echarts from "echarts/lib/echarts"


export default {
  data() {
    return {
      value: [],
      options: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      }, {
        value: 'zujian',
        label: '组件',
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: 'Layout 布局'
          }, {
            value: 'color',
            label: 'Color 色彩'
          }, {
            value: 'typography',
            label: 'Typography 字体'
          }, {
            value: 'icon',
            label: 'Icon 图标'
          }, {
            value: 'button',
            label: 'Button 按钮'
          }]
        }, {
          value: 'form',
          label: 'Form',
          children: [{
            value: 'radio',
            label: 'Radio 单选框'
          }, {
            value: 'checkbox',
            label: 'Checkbox 多选框'
          }, {
            value: 'input',
            label: 'Input 输入框'
          }, {
            value: 'input-number',
            label: 'InputNumber 计数器'
          }, {
            value: 'select',
            label: 'Select 选择器'
          }, {
            value: 'cascader',
            label: 'Cascader 级联选择器'
          }, {
            value: 'switch',
            label: 'Switch 开关'
          }, {
            value: 'slider',
            label: 'Slider 滑块'
          }, {
            value: 'time-picker',
            label: 'TimePicker 时间选择器'
          }, {
            value: 'date-picker',
            label: 'DatePicker 日期选择器'
          }, {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器'
          }, {
            value: 'upload',
            label: 'Upload 上传'
          }, {
            value: 'rate',
            label: 'Rate 评分'
          }, {
            value: 'form',
            label: 'Form 表单'
          }]
        }, {
          value: 'data',
          label: 'Data',
          children: [{
            value: 'table',
            label: 'Table 表格'
          }, {
            value: 'tag',
            label: 'Tag 标签'
          }, {
            value: 'progress',
            label: 'Progress 进度条'
          }, {
            value: 'tree',
            label: 'Tree 树形控件'
          }, {
            value: 'pagination',
            label: 'Pagination 分页'
          }, {
            value: 'badge',
            label: 'Badge 标记'
          }]
        }, {
          value: 'notice',
          label: 'Notice',
          children: [{
            value: 'alert',
            label: 'Alert 警告'
          }, {
            value: 'loading',
            label: 'Loading 加载'
          }, {
            value: 'message',
            label: 'Message 消息提示'
          }, {
            value: 'message-box',
            label: 'MessageBox 弹框'
          }, {
            value: 'notification',
            label: 'Notification 通知'
          }]
        }, {
          value: 'navigation',
          label: 'Navigation',
          children: [{
            value: 'menu',
            label: 'NavMenu 导航菜单'
          }, {
            value: 'tabs',
            label: 'Tabs 标签页'
          }, {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑'
          }, {
            value: 'dropdown',
            label: 'Dropdown 下拉菜单'
          }, {
            value: 'steps',
            label: 'Steps 步骤条'
          }]
        }, {
          value: 'others',
          label: 'Others',
          children: [{
            value: 'dialog',
            label: 'Dialog 对话框'
          }, {
            value: 'tooltip',
            label: 'Tooltip 文字提示'
          }, {
            value: 'popover',
            label: 'Popover 弹出框'
          }, {
            value: 'card',
            label: 'Card 卡片'
          }, {
            value: 'carousel',
            label: 'Carousel 走马灯'
          }, {
            value: 'collapse',
            label: 'Collapse 折叠面板'
          }]
        }]
      }, {
        value: 'ziyuan',
        label: '资源',
        children: [{
          value: 'axure',
          label: 'Axure Components'
        }, {
          value: 'sketch',
          label: 'Sketch Templates'
        }, {
          value: 'jiaohu',
          label: '组件交互文档'
        }]
      }]
    };
  },
  mounted () {
    // 当请求回数据后
    this.initData(['周一', '周二', '周三', '周四', '周五', '周六'], [100, 50, 70, 80, 60, 40]);
    console.log(this.value);
  },
  methods: {
    initData(xData, yData) {
      let bar = echarts.init(this.$refs['bar-3d'])
      let options = {
        // 直角坐标系内绘图网格,设置组件距离容器的距离
        grid: {
          left: 50,
          top: 50,
          right: 50,
          bottom: 50
        },
        // 设置鼠标移入的提示，默认显示
        tooltip: {},
        // 设置图例
        legend: {
          textStyle: {
            color: '#999'
          }
        },
        // 设置x轴
        xAxis: {
          data: [],
          // 显示x轴
          axisLine: {
            show: true
          },
          // 设置x轴的颜色和偏移量
          axisLabel: {
            color: '#999',
            rotate: 0
          },
          // 不显示x轴刻度
          axisTick: {
            show: false
          }
        },
        // 设置y轴
        yAxis: {
          // 显示y轴
          axisLine: {
            show: true
          },
          // 设置y轴的颜色
          axisLabel: {
            color: '#999',
          },
          // 不显示y轴刻度
          axisTick: {
            show: false
          },
          // 不显示分隔线
          splitLine: {
            show: false
          }
        },
        // 表示不同系列的列表
        series: []
      }
      // 设置顶部和底部的值
      let symbolData = [], newShadowHight = []
      let heights = 0
      yData.forEach(item => {
        symbolData.push(1)
        heights += item
      })
      newShadowHight = yData.map(item => heights)
      options.xAxis.data = xData
      options.series = [
        // 底部
        {
          z: 2,
          type: 'pictorialBar',
          symbol: 'diamond',
          symbolOffset: ['0%', '50%'],
          symbolSize: [30, 12],
          toolltip: {
            show: false
          },
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: '#1f7eff' }, { offset: 1, color: '#64adff' }])
          },
          data: symbolData, // [1,1,1,1,1]
        },
        // 内容区域
        {
          z: 1,
          type: 'bar',
          barWidth: 30,
          data: yData
        },
        // 内容的顶部
        {
          z: 3,
          type: 'pictorialBar',
          symbol: 'diamond',
          symbolPosition: 'end',
          symbolOffset: ['0%', '-50%'],
          symbolSize: [30, 12],
          toolltip: {
            show: false
          },
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: '#1f7eff' }, { offset: 1, color: '#64adff' }])
          },
          data: yData,
        },
        // 阴影区域
        {
          z: 0,
          type: 'bar',
          barWidth: 30,
          data: newShadowHight,  // [400, 400, 400, 400, 400]
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: '#9cc1ff' }, { offset: 1, color: '#ecf5ff' }])
          }
        },
        // 阴影的顶部
        {
          z: 3,
          type: 'pictorialBar',
          symbol: 'diamond',
          symbolPosition: 'end',
          symbolOffset: ['0%', '-50%'],
          symbolSize: [30, 12],
          toolltip: {
            show: false
          },
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: '#1f7eff' }, { offset: 1, color: '#64adff' }])
          },
          data: newShadowHight,
        }
      ]

      // 设置配置项
      bar.setOption(options)
    }

  },
};
</script>
