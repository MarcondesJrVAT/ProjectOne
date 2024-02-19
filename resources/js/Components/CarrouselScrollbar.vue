<template>
    <swiper
        :scrollbar="{
          hide: true,
        }"
        :navigation="true"
        :loop="true"
        :modules="modules"
        class="mySwiper scrollbar"
    >
        <swiper-slide class="swiper-scrollbar"><img src="https://swiperjs.com/demos/images/nature-1.jpg"  alt=""/></swiper-slide>
        <swiper-slide class="swiper-scrollbar"><img src="https://swiperjs.com/demos/images/nature-2.jpg"  alt=""/></swiper-slide>
        <swiper-slide class="swiper-scrollbar"><img src="https://swiperjs.com/demos/images/nature-3.jpg"  alt=""/></swiper-slide>
        <swiper-slide class="swiper-scrollbar"><img src="https://swiperjs.com/demos/images/nature-4.jpg"  alt=""/></swiper-slide>
        <swiper-slide class="swiper-scrollbar"><img src="https://swiperjs.com/demos/images/nature-5.jpg"  alt=""/></swiper-slide>
        <swiper-slide class="swiper-scrollbar"><img src="https://swiperjs.com/demos/images/nature-6.jpg"  alt=""/></swiper-slide>
        <swiper-slide class="swiper-scrollbar"><img src="https://swiperjs.com/demos/images/nature-7.jpg"  alt=""/></swiper-slide>
        <swiper-slide class="swiper-scrollbar"><img src="https://swiperjs.com/demos/images/nature-8.jpg"  alt=""/></swiper-slide>
        <swiper-slide class="swiper-scrollbar"><img src="https://swiperjs.com/demos/images/nature-9.jpg"  alt=""/></swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/scrollbar';

// import required modules
import { Scrollbar, Navigation} from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Scrollbar, Navigation],
        };
    },
};
</script>
<style>
.scrollbar {
    width: 100%;
    height: 100%;
}

.swiper-scrollbar {
    display: flex;
    text-align: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
}

</style>
