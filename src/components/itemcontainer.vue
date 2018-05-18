<template>
  <section>
    <header class="top_tips">
      <span class="num_tip" v-if="fathercomponent == 'home'"> {{level}} </span>
      <span class="num_tip" v-if="fathercomponent == 'item'"> {{'题目'+ itemNum}} </span>
    </header>

    <div v-if="fathercomponent == 'home'">
      <div class="home-logo"></div>
      <router-link class="button_style start" to="/item"></router-link>
    </div>

    <div v-if="fathercomponent == 'item'">

      <div class="itemcontent">

        <div class="top_box">
          <header> {{itemDetail[itemNum - 1].topic_name}} </header>
          <ul>
            <li @click="choosed(index)" v-for="(item, index) in itemDetail[itemNum - 1].topic_answer">
              <span class="top_title" :class="{has_choosed: choosedNum == index + 1}"> {{choosedIndex(index + 1)}} </span>
              <span> {{item.answer_name}} </span>
            </li>
          </ul>
        </div>
      </div>

      <span class="button_style next" v-if="itemNum < itemDetail.length" @click="next_top"></span>
      <span class="button_style submit" v-else @click="submitfun"></span>
    </div>

  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      choosedNum: null
    };
  },

  computed: {
    // ...mapState({
    //     aaa: state => state.moduleOne.aaa
    // })
    ...mapState([
      "level", //活动周数
      "itemNum", // 第几题
      "allTime", //总共用时
      "timer", //定时器
      "itemDetail"
    ])
  },

  methods: {
    submitfun() {
      this.$router.push("score");
      this.initialize();
      //初始化  第几题itemNum
    },
    choosed(index) {
      this.choosedNum = null;
      this.choosedNum = index + 1;
    },
    ...mapActions(["addNum", "initialize"]),
    next_top() {
      if (this.choosedNum) {
        this.addNum(this.choosedNum);
        this.choosedNum = null;
      } else {
        alert("您还没有选择答案!");
      }
    },

    choosedIndex(index) {
      switch (index) {
        case 1:
          return "A";
        case 2:
          return "B";
        case 3:
          return "C";
        case 4:
          return "D";
      }
    }
  },

  props: ["fathercomponent"]
};
</script>

<style lang="less" scoped>
.top_tips {
  display: block;
  width: 6rem;
  height: 10rem;
  background: url("../files/images/WechatIMG2.png") no-repeat center center /
    100% 100%;
  position: absolute;
  left: 14.6rem;
  top: 0;
  .num_tip {
    font-size: 12px;
    position: absolute;
    left: 2rem;
    top: 7.6rem;
    color: #808040;
  }
}

.home-logo {
  background: url("../files/images/1-2.png") no-repeat center center / 100% 100%;
  width: 18rem;
  height: 18rem;
  position: absolute;
  left: 2rem;
  top: 8rem;
}

.button_style {
  display: block;
  width: 6rem;
  height: 3rem;
  position: absolute;
  left: 9rem;
  top: 26rem;
}

.start {
  background: url("../files/images/1-4.png") no-repeat center center / 100% 100%;
}

.next {
  background: url("../files/images/2-2.png") no-repeat center center / 100% 100%;
}

.submit {
  background: url("../files/images/3-1.png") no-repeat center center / 100% 100%;
}

.itemcontent {
  background: url("../files/images/2-1.png") no-repeat center center / 100% 100%;
  width: 20rem;
  height: 20rem;
  position: absolute;
  left: 2rem;
  top: 8rem;
  .top_box {
    position: absolute;
    left: 6.1rem;
    top: 3rem;
    font-size: 1.3em;

    span {
      width: 1.3rem;
      height: 1.3rem;
      margin-right: 0.3rem;
      text-align: center;
      margin-bottom: 0.6rem;
      font-size: 1rem;
    }

    .top_title {
      display: inline-block;
      border-radius: 50%;
    }
  }
}

.has_choosed {
  background-color: #808040;
}
</style>
