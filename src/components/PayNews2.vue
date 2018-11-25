<template>
  <div class="pay-news">
    <Header></Header>
    <div class="background">
      <!--<div class="background-text">志 趣 相 投</div>-->
      <!--<div class="background-text">就 是 聊 得 来</div>-->
    </div>
    <div class="news-list">

      <div class="new" v-for="(item, index) in newsList" @click="examineNew(item.id)">
        <el-card class="box-card">
        <!--<div class="new-img">-->
          <!--<img :src="item.imgUrl" alt="">-->
        <!--</div>-->
        <div class="new-mes">
          <div class="new-mes-title">{{ item.title }}</div>
          <div class="new-mes-brief">{{ item.brief }}</div>
          <div class="new-mes-time">{{ item.time }}</div>
        </div>
        </el-card>
      </div>

    </div>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
  import Header from './common/Header.vue';
  import Footer from './common/Footer.vue';
  export default{
    components:{Header, Footer},
    data(){
      return {
        newsList: [
          {
            id: 0,
            title: '老生常谈的「抗衰老」，你真的了解吗？',
            brief: '考虑互换性原则，没有特殊造型要求的板都可以互相替换使用，减少了加工次数，减少了装配出错的可能性。同时多种材质配合使用，因材施料，降低成本。',
            time: '1周前',
            imgUrl: '../../static/image/news1.png',
          },
          {
            id: 1,
            title: '身高158，眼袋垂到嘴角，这颜值居然能当时尚博主？',
            brief: '一个身高只有158cm，眼袋垂到嘴角，脸长得大还老气的姑娘，居然成了火遍全球的时尚博主？这个传奇人物就是Leandra Medine，一起来看她的故事..',
            time: '2018-10-29',
            imgUrl: '../../static/image/news2.png',
          },
          {
            id: 2,
            title: '时尚圈泥石流邓紫棋，如今已经是行走的穿搭教科书',
            brief: '提到邓紫棋，大家都顺势想到另一个男明星：汪峰。他俩原本没有任何交集，却因为共同热衷于穿皮裤，被紧密联合在一起……然而现在的邓紫棋，无论出席活动还是街拍都成了行走的穿搭模板，今天就让我们一起来看看邓姑娘的穿搭技巧吧',
            time: '2018-05-17',
            imgUrl: '../../static/image/news3.png',
          },
          {
            id: 3,
            title: '论“表情管理”的效应',
            brief: '提到「表情管理」，第一想到的就是石原里美。十元妹子并非美到人神共愤的地步，有一说一，这样的颜值，在娱乐圈一抓一大把，为什么只有她成了掰弯万千少女的女神？如果说天海佑希是少女们的「唯一指定老公」的话，「唯一指定老婆」非十元其谁？？？',
            time: '2018-04-31',
            imgUrl: '../../static/image/news4.png',
          }
        ]
      }
    },
    mounted:function () {

    },
    methods: {
      examineNew(id){
        this.$router.push({path: '/newsDetail/'+id});
//        let routeData = this.$router.resolve({ path: '/newsDetail/'+id});
//        window.open(routeData.href, '_blank');
      }
    }
  }
</script>

<style scoped lang="less">
.pay-news{
  /*margin-bottom: 30px;*/
  /*font-weight: 500;*/
  .background{
    margin-top: 3px;
    width: 100%;
    min-width: 900px;
    height: 45vw;
    background: url("../assets/image/pnews2.png") 0 0 no-repeat;
    background-size: 100% 100%;
    text-align: center;
    .background-text{
      margin-right: 500px;
      padding-top: 25vh;
      color: #ffffff;
      /*text-shadow:0 0 10px #333;*/
      font-size: 2em;
      &:last-child{
        padding-top: 2vh;
      }
    }
  }
  .news-list{
    margin-bottom: 10px;
    padding: 20px 20px;
    overflow: hidden;
    .new{
      cursor: pointer;
      width: 50%;
      height: 180px;
      float: left;
      padding: 10px;
      overflow: hidden;
      .new-img{
        width: 33%;
        height: 120px;
        display: inline-flex;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .new-mes{
        position: relative;
        /*width: 65%;*/
        width: 100%;
        height: 90px;
        display: inline-block;
        .new-mes-title{
          font-size: 1.2rem;
          padding-left: 10px;
        }
        .new-mes-brief{
          font-size: 0.8rem;
          color: #888;
          padding: 0 10px;
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        .new-mes-time{
          padding: 10px;
        }
      }
    }
  }
  .footer{
  }
}
</style>
