<template>
  <div class="score_container">
    <div class="your_scores_container">
      <div>
        <span class="scores"> {{scores}} 分!</span>
        <span class="evaluate"> {{evaluate}} </span>
      </div>
      <span class="share_button" @click="share_button"></span>
    </div>




    <div class="footer_share_ewm_box">

      <span>关注葡萄牙之家,获取答案!</span>
      <img src="../../files/images/ewm.png" alt="二维码">

    </div>


    <div class="share_cover" v-if="cover_show"></div>



  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'

  export default {
    data() {
      return {
        rightAnswers: [2, 3, 4, 1, 2],
        scores: 0,
        evaluates: ["水的一笔", "太菜了", "还行咯", "真不错", "贼鸡儿棒!", "你还能再6一点吗!"],
        evaluate: '',
        cover_show: false
      }
    },

    computed: {
      ...mapState([
        "answerid"
      ])
    },

    methods: {
      computedScores() {
        this.rightAnswers.forEach((element, key) => {
          if (element == this.answerid[key]) {
            this.scores += 20;
          }
        });
      },
      share_button() {
        this.cover_show = true;
      },
      computedEvaluate() {
        switch (this.scores) {
          case 0:
            this.evaluate = this.evaluates[5]
            break;
          case 20:
            this.evaluate = this.evaluates[0]
            break;
          case 40:
            this.evaluate = this.evaluates[1]
            break;
          case 60:
            this.evaluate = this.evaluates[2]
            break;
          case 80:
            this.evaluate = this.evaluates[3]
            break;
          case 100:
            this.evaluate = this.evaluates[4]
            break;
        }
      }
    },


    created() {
      this.computedScores();
      this.computedEvaluate();
    }
  }

</script>
<style>
  body {
    background: url("../../files/images/4-1.jpg") no-repeat center center / 100% 100%;
  }
</style>
<style lang="less" scoped>
  .your_scores_container {

    background: url("../../files/images/4-2.png") no-repeat center center / 100% 100%;
    width: 16rem;
    height: 16rem;
    position: absolute;
    left: 2.5rem;
    top: 8rem;

    .scores {
      font-size: 2rem;
      color: #808000;
      position: absolute;
      left: 6.8rem;
      top: 7.5rem;
    }

    .evaluate {
      color: #808000;
      position: absolute;
      left: 4.9rem;
      top: 11.5rem;
    }


    .share_button {
      display: block;
      width: 6rem;
      height: 3rem;
      position: absolute;
      left: 6rem;
      top: 17rem;
      background: url("../../files/images/4-3.png") no-repeat center center / 100% 100%;
    }

  }


  .footer_share_ewm_box {
    width: 12rem;
    height: 12rem;
    position: absolute;
    left: 5rem;
    top: 30rem;
    span {
      color: #400000;
      display: block;
      height: 2rem;
      text-align: center;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }


  .share_cover {
    width: 100vw;
    height: 100vh;
    position: absolute;
    background: url("../../files/images/5-2.png") rgba(0, 0, 0, .5) no-repeat;
    background-size: 20rem 20rem;
    background-position: center;

    img {
      width: 18rem;
      height: 20rem;
      position: absolute;
      left: 2rem;
      top: 12rem;
    }
  }

</style>
