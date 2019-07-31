<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image.picUrl" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
    props: {
        images: {
            type: Array
        }
    },
};
</script>

<style>
.van-swipe{
  height: 5rem;
}
.van-swipe img{
    width: 100%
}
.van-swipe i{
    width: .5rem;
    height: 3px;
    border-radius: 0;
}
</style>