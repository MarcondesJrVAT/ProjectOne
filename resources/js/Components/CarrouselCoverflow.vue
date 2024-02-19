<template>
    <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :breakpoints="{
          '640': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }"
        :autoplay="{
            delay: 2500,
            disableOnInteraction: true,
        }"
        :coverflowEffect="{
          rotate: 50,
          stretch: 0,
          depth: 50,
          modifier: 1,
        }"
        :pagination="pagination"
        :navigation="true"
        :modules="modules"
        class="mySwiper coverflow"
    >
        <swiper-slide class="swiper-coverflow">
            <img src="https://swiperjs.com/demos/images/nature-1.jpg"  alt=""/>
        </swiper-slide>
        <swiper-slide class="swiper-coverflow">
            <img src="https://swiperjs.com/demos/images/nature-2.jpg"  alt=""/>
        </swiper-slide>
        <swiper-slide class="swiper-coverflow">
            <img src="https://swiperjs.com/demos/images/nature-3.jpg"  alt=""/>
        </swiper-slide>
        <swiper-slide class="swiper-coverflow">
            <img src="https://swiperjs.com/demos/images/nature-4.jpg"  alt=""/>
        </swiper-slide>
        <swiper-slide class="swiper-coverflow">
            <img src="https://swiperjs.com/demos/images/nature-5.jpg"  alt=""/>
        </swiper-slide>
        <swiper-slide class="swiper-coverflow">
            <img src="https://swiperjs.com/demos/images/nature-6.jpg"  alt=""/>
        </swiper-slide>
        <swiper-slide class="swiper-coverflow">
            <img src="https://swiperjs.com/demos/images/nature-7.jpg"  alt=""/>
        </swiper-slide>
        <swiper-slide class="swiper-coverflow">
            <img src="https://swiperjs.com/demos/images/nature-8.jpg"  alt=""/>
        </swiper-slide>
        <swiper-slide class="swiper-coverflow">
            <img src="https://swiperjs.com/demos/images/nature-9.jpg"  alt=""/>
        </swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            pagination: {
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '" >' + (index + 1) + '</span>';
                },
            },
            modules: [Autoplay, EffectCoverflow, Pagination, Navigation],
        };
    },
};
</script>

<style>
.coverflow {
    height: 300px;
}

.swiper-coverflow {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
}

.swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #000;
    opacity: 1;
    background: rgba(0, 0, 0, 0.2);
}

.swiper-pagination-bullet-active {
    color: #fff;
    background: #5a67d8;
}
</style>

