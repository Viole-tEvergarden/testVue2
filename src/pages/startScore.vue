<!-- 星星评分，支持输入值 精确到 0.1； 尚未支持 点击得到半星 -->
<template>
  <div class="_start">
    <div class="grayStart">
      <span v-for="item in total" :key="item" @click="setScore(item)">
        <img :style="startSize" src="../assets/image/starGray.svg" alt="">
      </span>
    </div>
    <div class="activeStart" :style="scoreStyle">
      <span v-for="item in total" :key="item" @click="setScore(item)">
        <img :style="startSize" src="../assets/image/starBlue.svg" alt="">
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String | Number,
      default: '20px'
    },
    total: {
      type: Number,
      default: 5,
    },
    maxScore: {
      type: Number,
      default: 5
    },
    value: {
      type: Number,
      default: 0
    }
  },
  name: 'StartScore',
  components: {},
  data() {
    return {

    };
  },
  computed: {
    localValue: {
      get() {
        return this.value
      },
      set(v) {
        this.$emit('input', v)
      }
    },
    // 星星宽高
    startSize() {
      const size = typeof this.size === 'number' ? this.size + 'px' : this.size;
      return {
        width: size,
        height: size
      }
    },
    // 分值进度
    scoreStyle() {
      return {
        width: `${(this.localValue / this.maxScore) * 100}%`
      }
    }
  },
  methods: {
    setScore(i) {
      this.localValue = i * (this.maxScore / this.total)
    }
  }
}
</script>
<style scoped>
._start {
  position: relative;
  display: inline-block;
}

.grayStart,
.activeStart {
  display: flex;
}

.activeStart {
  overflow: hidden;
}

.grayStart span,
.activeStart span {
  display: inline-block;
  margin: 0 3px;
  cursor: pointer;
}

.activeStart {
  position: absolute;
  left: 0;
  top: 0;
}</style>
