<template>
  <div class="company">
    <Header></Header>
    <div class="background">
      <div class="word">
        <div class="title">
          <div class="background-title">Company</div>
          <div class="background-title">公司介绍</div>
        </div>

        <div class="background-text">
          北京喆含文化有限公司是一家以线上推广文化传媒、微博推广方案为信息服务为核心产品，整合多元化企业文化推广服务综合性互联网公司。 公司拥有精英策划、研发、运营团队，以传递各企业推广计划，秉承“多元化文化发展，厚德载物”的经营理念，以优质的产品和服务，提供最完美的体验，且创立了自己的品牌“粉享会”。
         </div>
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
        unitList: []
      }
    },
    mounted:function () {

    },
    methods: {

    }
  }
</script>

<style scoped lang="less">
.company{
  /*font-weight: 500;*/
  .background{
    width: 80%;
    height: 40vw;
    margin: 90px auto 30px;
    background: url("../assets/image/company1.jpg") 0 0 no-repeat;
    background-size: 100% 100%;
    text-align: center;
    color: #666;
    /*text-shadow:0 0 10px #333;*/
    .word{
      padding:30px;
      /*width: 900px;*/
      overflow: hidden;
    }
    .title{
      float: left;
      width: 28%;
      /*display: inline-block;*/
      font-size: 2.5em
    }
    /*.background-title{*/
      /*!*padding-top: 2vw;*!*/
      /*font-size: 2.5em;*/
    /*}*/
    .background-text{
      float: right;
      width: 62%;
      /*display: inline-block;*/
      /*padding: 2vw 20px;*/
    }
  }
  .footer{
    position: fixed;
    left: 0;
    bottom: 0;
  }
}
</style>
