<template>
  <div class="detail">
    <Header></Header>
    <el-card class="box-card">
      <div class="h2">此文章需要付费阅读</div>
      <div class="mes">此文章内容需要付费查看，查看更多文章内容需要打赏2元，请点击付费阅读对作者表示支持。</div>
      <div class="btn">
        <el-button type="primary" @click="toLogin(0)">付费阅读</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
  import Header from './common/Header.vue';
  import Footer from './common/Footer.vue';
  export default{
    components:{Header, Footer},
    props: ['id'],
    data(){
      return {
        unitList: []
      }
    },
    mounted() {
      console.log(this.id)
    },
    methods: {
      toLogin(id){
        this.$router.push({ path: '/login/'+id});
      }
    }
  }
</script>

<style scoped lang="less">
  .detail{
    text-align: center;
    .el-card{
      width: 60%;
      height: 60%;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }
    .h2{
      font-size: 1.5rem;
      margin: 60px;
    }
    .mes{
      line-height: 30px;
    }
    .btn{
      margin-top: 20px;
    }
  }
</style>
