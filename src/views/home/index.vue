<template>
  <div class="home_box">
    <van-sticky>
      <div class="home_top">
        <div class="top_left">
          <van-icon name="arrow-left" />
        </div>
        <div class="top_title">京东生鲜</div>
        <div class="top_right">
          <div class="top_left_icon">
            <svg-icon name="car_i" />
          </div>
          <div class="top_left_icon">
            <svg-icon name="more" />
          </div>
        </div>
      </div>
      <hr/>
      <div class="content_box">
        <van-tabs v-model:active="active">
          <van-tab title="精选"></van-tab>
          <van-tab title="水果"></van-tab>
          <van-tab title="海鲜"></van-tab>
          <van-tab title="肉禽蛋"></van-tab>
        </van-tabs>
      </div>
    </van-sticky>
    <div class="home_content">
      <van-row v-if="active == 1">
        <van-col span="12" v-for="item in showList" :key="item.id">
          <div class="commodity_box">
            <div>
              <img
                alt="商品信息"
                :src="item.url"
              />
            </div>
            <div class="commodity_msg">{{ item.msg }}</div>
            <div class="commodity_sell">
              <div class="commodity_sale_content">
                <p class="commodity_sale">￥{{ item.sale }}</p>
                <p class="commodity_price">￥{{ item.price }}</p>
              </div>
              <div class="commodity_car">
                <svg-icon name="car" />
              </div>
            </div>
          </div>
        </van-col>
      </van-row>
    </div>
  </div> 
</template>
  
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { onMounted } from 'vue'
import { getListApi } from "@/api/mock"
import { showFailToast, showSuccessToast } from "vant";

let active = ref(1);
let showList: string[] = reactive([])

onMounted(() => {
  getList()
})

const getList = async () => {
  await getListApi().then((res) =>{
    showList.length = 0
    showList.push(...res.list)
  }, (err) => {
    showFailToast("请求有误");
  })
}
  
</script>
  
<style scoped lang="less">
  .home_box {
    height: 100%;
    width: 100%;
    padding-bottom: 50px;
    background-color: #f5f5f5;
  }
  .home_top {
    width: 100%;
    height: 50px;
    padding: 10px;
    background-color: white;
    display: flex;
    align-items: center;
  }
  .top_left {
    width: 60px;
    font-size: 25px
  }
  .top_title {
    margin: auto
  }
  .top_right {
    width: 60px;
    display: flex;
    font-size: 25px;
    justify-content: space-between
  }
  .top_right_icon {
    padding: 5px;
  }
  .home_content {
    width: 100%;
    padding: 5px;
    padding-bottom: 55px;
    margin: 0;
  }
  .commodity_box {
    margin: 5px;
    background-color: white;
  }
  .commodity_msg {
    height: 42px;
    margin: 2px 0;
    padding: 0 10px;
    font-size: 14px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #745f5f;
    display: -webkit-box; 
    -webkit-box-orient: vertical;    //方向
    -webkit-line-clamp: 2;
  }
  .commodity_sell {
    padding: 0 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .commodity_sale_content {
    padding: 2px 0;
    display: flex;
    align-items: baseline;
  }
  .commodity_sale {
    font-size: 18px;
    padding-right: 5px;
    color: orangered;
  }
  .commodity_price {
    color: #a58a8a;
    text-decoration: line-through;
    font-size: 12px;
  }
  .commodity_car {
    font-size: 22px;
    color: orangered;
  }
  
</style>