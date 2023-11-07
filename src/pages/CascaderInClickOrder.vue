<!--  -->
<template>
  <el-cascader ref="cascader" v-model="localValue" v-bind="$attrs" @change="change">
    <template #[slotName] v-for="(slot, slotName) in $slots">
      <slot :name="slotName"></slot>
    </template>
  </el-cascader>
</template>

<script>
// 添加根据点击时间顺序显示级联 tag
export default {
  name: 'CascaderInClickOrder',
  props: {
    value: {
      type: Array | String,
      default: ''
    }
  },
  data() {
    return {
      preValue: [],//上次所选值
      echoTag: true,//是否尚未回显过远程数据
    };
  },
  computed: {
    localValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value);
      }
    },
    multiple() {
      return this.$attrs.props.multiple;
    },
    valueFieldName(){
      // value 是 选项数据 option 所绑定的数据中 value 的 字段名默认就是 vlaue
      return this.$attrs.props.value || 'value'
    }
  },
  watch: {
    localValue: {
      handler(nv) {
        if (!this.multiple) return; //不是多选不需要排序
        if (this.echoTag && nv && nv.length > 0) {
          // 回显远程数据时, 进行排序显示, 添加时间戳
          let timestamp = Date.now();
          this.preValue = nv.map(item => {
            item.timestamp = timestamp++;
            return item;
          })
          this.renderSortTag(nv);
          this.echoTag = false;
        }
      },
      immediate: true
    }
  },
  methods: {
    change(v) {
      try {
        if (!this.multiple) throw Error('不是多选不需要排序');

        const findEl = (arr, el) => arr.find(item => item[item.length - 1] === el[el.length - 1])

        // 回显远程数据后 第一次点击新增选项时 远程数据中没有 timestamp 这里将 preValue 中对于的 timestamp 赋予 v
        if (this.preValue && this.preValue.length > 0) v.forEach(el => {
          if (!el.timestamp) {
            const findedEl = findEl(this.preValue, el)
            if (findedEl) el.timestamp = findedEl.timestamp || null;
          }
        });
        // 得到与上次数据 preValue 中的不同项
        const diff = v.filter(el => {
          return findEl(this.preValue, el) ? false : true;
        });
        // 赋予 时间戳
        diff.forEach(el => {
          findEl(v, el).timestamp = Date.now();
        })

        // 根据 timestamp 排序
        this.preValue = v = _.orderBy(v, 'timestamp', 'asc');

        this.renderSortTag(v)
      } catch (error) {
        console.error(error);
      }

      this.$emit('input', v);
      this.$emit('change', v);
    },
    renderSortTag(v) {
      this.$nextTick(() => {
        this.$nextTick(() => {
          this.$refs.cascader.presentTags = v.map(item => {
            return this.$refs.cascader.presentTags.find(node => node.node.data[this.valueFieldName] === item[item.length - 1])
          })
        })
      })
    }
  }
}
</script>
<style scoped></style>
