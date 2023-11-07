<!--  -->
<template>
  <div>
    <xd-file-list-preview :list="list" @remove="handleRemoveClick"></xd-file-list-preview>
  </div>
</template>

<script>
export default {
  name:'FilePreview',
  components: {},
  data() {
    return {
      list: [
          {url: '../../static/中国风.pptx', name: '中国风',fid: '2334'},
          {
            url: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf',
            name: 'aaaa',
            fid: 'aadadads'
          },
        ]
    };
  },
  methods: {
    /**
       * @description 删除图片事件
       * @param item {Object} 当前被删除的文件对象
       * @param done {function} 删除文件完成回调函数
       */
      handleRemoveClick(item, done) {
        setTimeout(() => {
          console.log('handleRemoveClick', item);
          done()
        }, 2000);
      },
  }
}
</script>
<style scoped>
</style>
