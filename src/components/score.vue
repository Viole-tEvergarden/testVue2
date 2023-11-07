//score.vue//html代码
<template class="scroe-content">
  <template v-if="score > 0">
    <span>显示从父组件传递过来的分数{{ (score / 10).toFixed(2) }}</span>
    <template v-for="(item, index) in fullStar">
      <div class="star-one" :key="index">
        <div class="star-two">
          <div class="star" :style="{ 'width': item.width }"></div>
        </div>
      </div>
    </template>
    <tempalte v-if="greyStar">
      <img src="这里放灰色星星" class="star-img" v-for="item in greyStar" :key="item"></img>
  </template>
  <template v-else> //这里放灰色星星，循环 greyStar 变量即可
    <img src="这里放灰色星星" class="star-img" v-for="item in greyStar" :key="item"></img>
  </template>
</template>
//js
export default {
  props:{     score:{}   },
  data(){
    return{
      greyStar:0,
      fullStar:[],
    }
  },
  mounted(){
    this.isFullStar();
  },
methods:{
  isFullStar(){
    let score = (this.score / 10) / 2 ;
    let score_int = parseInt(score);
    let fullStar = [];
<score_int;i++){
      fullStar.push({
        width:'100%'
      })
    }
    let score_float = score.toFixed(2);
    let float = '0.' + score_float.split('.')[1];
    if(float == 0 && this.score%2===0){

    }else{
      let float_width = Number(float) * 100;
      fullStar.push({
        width:float_width + '%'
      })
    }
    this.greyStar = 5 - fullStar.length;
    this.fullStar = fullStar
  }
}
}
<style type="text/css">
</style>
//css
.score-content{   display:flex;   justify-content:center;   align-items:center}
  .star-img{
    width:25rpx;
    height:25rpx;
  }
  .star-one,.star-two{
    width:25rpx;
    height:25rpx
  }
  .star-one{
    position:relative;
    background:url('放灰色星星') no-repeat;
    background-size:cover;
    margin-right:7rpx;
  }
  .star{
    position:absolute;
    top:0;
    left:0;
    width:70%;
    height:25rpx;
    background:url('放亮星星') no-repeat;
    background-size:cover;
  }
 
//使用方式，假设index界面需要使用
//js
import score from '@/components/score.vue;
components:{
  score
}
//html--假设是在循环里面
<score :score="item.score"></score>
