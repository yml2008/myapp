<template>
  <div>
    <el-button type="danger" @click="goto('/xiang')">返回</el-button>
    <div class="p-3">
      <img :src="'/img/'+ detail.imgurl" />
      <h1>{{detail.name}}</h1>
      <p class="price"><span>{{detail.price}}</span></p>
      <el-button type="warning"><i class="el-icon-shopping-cart-2"></i>加入购物车</el-button>
      <el-button type="danger"><i class="el-icon-goods"></i>立即购买</el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Xinag',
  data(){
    return {
      detail:{},
    }
  },
  created(){
    let {id}=this.$route.params;
    this.getData(id)
  },
  methods:{
    goto(path){
      this.$router.replace(path)
    },
    async getData(id){
      const {data:{data}} = await this.$axaj.get('/goods/'+id)
      this.detail=data
    },
  },
    
}
</script>

<style>

</style>