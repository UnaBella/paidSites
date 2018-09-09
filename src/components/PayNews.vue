<template>
  <div class="pay-news">
    <Header></Header>
    <div class="background">
      <div class="background-text">志 趣 相 投</div>
      <div class="background-text">就 是 聊 得 来</div>
    </div>
    <div class="news-list">

      <div class="new" v-for="(item, index) in newsList" @click="examineNew(item.id)">
        <el-card class="box-card">
        <div class="new-img">
          <img :src="item.imgUrl" alt="">
        </div>
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
            title: '工业设计如何提升产品附加值',
            brief: '从时间维度、生命维度、价值维度等全视角去彰显”设计报国之理念，凝聚所有自愿与中国制造业命运共荣辱的有生力量...',
            time: '2018-07-31',
            imgUrl: '../../static/image/news1.png',
          },
          {
            id: 1,
            title: '机械与设计的完美结合',
            brief: '考虑互换性原则，没有特殊造型要求的板都可以互相替换使用，减少了加工次数，减少了装配出错的可能性。同时多种材质配合使用，因材施料，降低成本。',
            time: '2018-06-21',
            imgUrl: '../../static/image/news2.png',
          },
          {
            id: 2,
            title: '设计+创新',
            brief: '工业设计是制造业转型升级的重要内容和必要手段。加快推进工业设计产业发展，是服务于企业转变经济发展方式，加速产业形态升级的迫切要求。企业对于工业设计有着很大的潜在需求，培养设计思维，树立企业对于工业设计的正确认识至关重要。',
            time: '2018-05-17',
            imgUrl: '../../static/image/news3.png',
          },
          {
            id: 3,
            title: '提升产品附加值',
            brief: '详细分析，从观念、技术、管理、服务、营销方式、文化几个角度诠释设计创新，将设计真正与企业文化内涵相结合，体现了由工业设计到工业服务的转变。',
            time: '2018-04-31',
            imgUrl: '../../static/image/news4.png',
          },
          {
            id: 4,
            title: '工业设计引领产业新未来',
            brief: '产品是企业文化的重要载体，通过设计要将企业文化赋予在产品之中，让用户使用产品的过程中便感受到先进的企业文化，进而对企业产生进一步的价值认同。“在这个意义上，工业设计的最高境界应当上升到哲学的层面。”',
            time: '2018-03-27',
            imgUrl: '../../static/image/news5.png',
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
    height: 70vh;
    background: url("../assets/image/news.png") 0 0 no-repeat;
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
    /*margin-bottom: 60px;*/
    padding: 20px 20px;
    overflow: hidden;
    .new{
      cursor: pointer;
      width: 50%;
      /*height: 15vw;*/
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
        width: 65%;
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
