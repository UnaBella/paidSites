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
          本公司的主营业务是针对高中生升学择校、成人自考择校、出国留学高校选择，提供最新招生信息服务、往年考试题库及真题分析，学习规划、学习方案研发及运营。作为互联网教育开发商，公司是在对教育信息服务方案的技术可行性、商业可行性以及成本预算等进行充分的论证的基础上制订具体的教育信息服务开发计划，组织调研、策划、课程、编辑、美工、教学指导等各种资源完成教育咨询信息创新，并在官方网站提供信息服务及最新文章下载链接，后续对各院校招生政策解读、近几年招收趋势分析、考学题库分析，学习规划指导以及客户服务等。
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
    background: url("../assets/image/company.png") 0 0 no-repeat;
    background-size: 100% 100%;
    text-align: center;
    color: #666;
    /*text-shadow:0 0 10px #333;*/
    .word{
      width: 900px;
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
