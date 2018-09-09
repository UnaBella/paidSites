<template>
<div class="home">
  <Header></Header>
  <div class="background">
    <img src="../assets/image/home.png" alt="">
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

    mounted() {},
    methods: {

    }
  }
</script>

<style scoped lang="less">
.home{
  position: relative;
  .background{
    width: 80%;
    height: 40vw;
    margin: 90px auto 30px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .footer{
    position: fixed;
    left: 0;
    bottom: 0;
  }
}
</style>
