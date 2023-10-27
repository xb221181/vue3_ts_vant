<template>
  <van-tabbar v-model="active" :placeholder="true" :route="true" fixed>
    <van-tabbar-item
      v-for="(item, index) in tabbarData"
      :key="index"
      :icon="item.icon"
      :to="item.to"
    >
      <template #icon="props">
        <div style="font-size: 20px;">
          <svg-icon :name="props.active ? item.actived : item.inactived" />
        </div>
      </template>
      {{ item.title }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const active = ref(0);
const tabbarData = reactive([
  {
    actived: 'home',
    inactived: 'home_i',
    title: "主页",
    to: {
      name: "Home"
    }
  },
  {
    actived: 'class',
    inactived: 'class_i',
    title: "分类",
    to: {
      name: "Class"
    }
  },
  {
    actived: 'fruit',
    inactived: 'fruit_i',
    title: "试吃尝鲜",
    to: {
      name: "Fruit"
    }
  },
  {
    actived: 'rank',
    inactived: 'rank_i',
    title: "热卖排行",
    to: {
      name: "Rank"
    }
  },
  {
    actived: 'user',
    inactived: 'user_i',
    title: "我的",
    to: {
      name: "User"
    }
  }
]);
</script>
