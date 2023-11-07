<!--  -->
<template>
  <div></div>
</template>

<script>
import axios from "axios";
export default {
  name:'cancelAjax',
  components: {},
  data() {
    return {
      abortController:''
    };
  },
  mounted () {
    this.sendAxios();
    setTimeout(() => {
      this.sendAxios()
    }, 100);
  },
  methods: {
    async sendAxios(){
      let url = 'https://tenapi.cn/v2/color';
       if (this.abortController) {
        // 如果存在abortController,就取消掉上次的请求,注意不同接口如果使用同一个abortController,则会被abort() 一起取消掉
        this.abortController.abort()
        this.abortController = ""
      } else {
        this.abortController = new AbortController()
      }
      let res = await axios.get(url,{signal:this.abortController.signal});
      console.log(res);


      const remarks = [
        {
          name: "person1",
          scores: [
            {
              name: '维度1',
              score: 1,
            },
            {
              name: '维度2',
              score: 2,
            },
            {
              name: '维度3',
              score: 3,
            }
          ]
        },
        {
          name: "person2",
          scores: [
            {
              name: '维度1',
              score: 1,
            },
            {
              name: '维度2',
              score: 2,
            },
            {
              name: '维度3',
              score: 3,
            }
          ]
        },
        {
          name: "person3",
          scores: [
            {
              name: '维度1',
              score: 1,
            },
            {
              name: '维度2',
              score: 2,
            },
            {
              name: '维度3',
              score: 3,
            }
          ]
        }
      ]
    }
  }
}
</script>
<style scoped>
</style>
