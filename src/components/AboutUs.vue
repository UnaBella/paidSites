<template>
  <div class="about-us">
    <Header></Header>
    <div class="background">
      <div class="background-text">CONTACT US</div>
      <div class="background-text">联系我们</div>
    </div>
    <ul>
      <li>联系方式</li>
      <li>地址：北京市朝阳区建国路89号华贸4号商务楼503</li>
      <li>邮编：100025</li>
      <li>联系电话：010-53309791</li>
    </ul>
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
  .about-us{
    /*font-weight: 500;*/
    .background{
      width: 80%;
      height: 40vw;
      margin: 90px auto 30px;
      background: url("../assets/image/about.jpg") 0 0 no-repeat;
      background-size: 100% 100%;
      text-align: left;
      .background-text{
        padding-left: 40px;
        padding-top: 160px;
        color: #000;
        text-shadow:0 0 10px #333;
        font-size: 2em;
        &:last-child{
          padding-top: 2vh;
        }
      }
    }
    ul{
      padding: 12%;
      position: absolute;
      bottom:70px;
      left: 20px;
      /*padding: 20px;*/
      li{
        font-size: 15px;
        &:first-child{
          margin-bottom: 20px;
          font-size: 18px;
        }
      }
    }
    .footer{
      position: fixed;
      left: 0;
      bottom: 0;
    }
  }
</style>
