<template>
    <swiper
        :pagination="{
          type: 'progressbar',
        }"
        :loop="true"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
    >
        <swiper-slide class="swiper-progress"><img src="https://swiperjs.com/demos/images/nature-1.jpg"  alt=""/></swiper-slide>
        <swiper-slide class="swiper-progress"><img src="https://swiperjs.com/demos/images/nature-2.jpg"  alt=""/></swiper-slide>
        <swiper-slide class="swiper-progress"><img src="https://swiperjs.com/demos/images/nature-3.jpg"  alt=""/></swiper-slide>
        <swiper-slide class="swiper-progress"><img src="https://swiperjs.com/demos/images/nature-4.jpg"  alt=""/></swiper-slide>
        <swiper-slide class="swiper-progress"><img src="https://swiperjs.com/demos/images/nature-5.jpg"  alt=""/></swiper-slide>
        <swiper-slide class="swiper-progress"><img src="https://swiperjs.com/demos/images/nature-6.jpg"  alt=""/></swiper-slide>
        <swiper-slide class="swiper-progress"><img src="https://swiperjs.com/demos/images/nature-7.jpg"  alt=""/></swiper-slide>
        <swiper-slide class="swiper-progress"><img src="https://swiperjs.com/demos/images/nature-8.jpg"  alt=""/></swiper-slide>
        <swiper-slide class="swiper-progress"><img src="https://swiperjs.com/demos/images/nature-9.jpg"  alt=""/></swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
};
</script>
<style>
.swiper-progress {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
}
</style>
