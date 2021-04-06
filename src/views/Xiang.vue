<template>
  <div class="box">
    <el-row >
      <el-col   v-for="item in goodsList" :key="item._id" @click.native="gotoDetail(item._id)">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="'/img/'+item.imgurl" class="image">
          <div style="padding: 5px;">
            <span>{{item.name}}</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">添加购物车</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'Goods',

  data(){
    return {
      goodsList:[],
    }
  },

  async created(){
    const {data} = await this.$axaj.get('/goods/')
    this.goodsList=data.data
  },

  methods:{
    gotoDetail(id){
      this.$router.push('/goods/'+id)
    }
  }
}
</script>

<style>
  .box{
    margin-bottom: 40px;
  }

  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

  .el-row {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }  

  .el-row .el-col-24 {
    width: 160px;
    margin-left: 0;
    margin-bottom: 10px;
  }

  .el-row .el-col-24 img{
    display: block;
    width: 100%;
    height: 200px;
  }

</style>
