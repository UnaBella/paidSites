<template>
  <div class="about-us">
    <Header></Header>
    <div class="background">
      <div class="background-text">CONTACT US</div>
      <div class="background-text">联系我们</div>
    </div>
    <ul>
      <li>联系方式</li>
      <li>地址：北京市海淀区北太平庄路18号3层3-0316</li>
      <li>邮编：100088</li>
      <li>办公电话：010-57123721</li>
      <li>联系电话：18410032707</li>
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
      background: url("../assets/image/about.gif") 0 0 no-repeat;
      background-size: 100% 100%;
      text-align: left;
      .background-text{
        padding-top: 200px;
        color: #000;
        text-shadow:0 0 10px #333;
        font-size: 2em;
        &:last-child{
          padding-top: 2vh;
        }
      }
    }
    ul{
      position: absolute;
      bottom:70px;
      right: 20px;
      padding: 20px;
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
