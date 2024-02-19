<template>
    <swiper
        :effect="'cards'"
        :grabCursor="true"
        :modules="modules"
        class="mySwiper cards"
    >
        <swiper-slide class="swiper-card"><img src="https://swiperjs.com/demos/images/nature-1.jpg"  alt=""/></swiper-slide>
        <swiper-slide class="swiper-card"><img src="https://swiperjs.com/demos/images/nature-2.jpg"  alt=""/></swiper-slide>
        <swiper-slide class="swiper-card"><img src="https://swiperjs.com/demos/images/nature-3.jpg"  alt=""/></swiper-slide>
        <swiper-slide class="swiper-card"><img src="https://swiperjs.com/demos/images/nature-4.jpg"  alt=""/></swiper-slide>
        <swiper-slide class="swiper-card"><img src="https://swiperjs.com/demos/images/nature-5.jpg"  alt=""/></swiper-slide>
        <swiper-slide class="swiper-card"><img src="https://swiperjs.com/demos/images/nature-6.jpg"  alt=""/></swiper-slide>
        <swiper-slide class="swiper-card"><img src="https://swiperjs.com/demos/images/nature-7.jpg"  alt=""/></swiper-slide>
        <swiper-slide class="swiper-card"><img src="https://swiperjs.com/demos/images/nature-8.jpg"  alt=""/></swiper-slide>
        <swiper-slide class="swiper-card"><img src="https://swiperjs.com/demos/images/nature-9.jpg"  alt=""/></swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [EffectCards],
        };
    },
};
</script>
<style>
.cards {
    width: 240px;
    height: 320px;
}

.swiper-card {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
}

.swiper-card:nth-child(1n) {
    background-color: rgb(206, 17, 17);
}

.swiper-card:nth-child(2n) {
    background-color: rgb(0, 140, 255);
}

.swiper-card:nth-child(3n) {
    background-color: rgb(10, 184, 111);
}

.swiper-card:nth-child(4n) {
    background-color: rgb(211, 122, 7);
}

.swiper-card:nth-child(5n) {
    background-color: rgb(118, 163, 12);
}

.swiper-card:nth-child(6n) {
    background-color: rgb(180, 10, 47);
}

.swiper-card:nth-child(7n) {
    background-color: rgb(35, 99, 19);
}

.swiper-card:nth-child(8n) {
    background-color: rgb(0, 68, 255);
}

.swiper-card:nth-child(9n) {
    background-color: rgb(218, 12, 218);
}

.swiper-card:nth-child(10n) {
    background-color: rgb(54, 94, 77);
}

</style>
