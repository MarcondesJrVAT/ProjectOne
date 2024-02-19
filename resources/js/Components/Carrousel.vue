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
            slidesPerView: 3,
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
          slideShadows: true,
        }"
        :pagination="pagination"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
    >
            <swiper-slide class="p-2">
                <div class="w-80 h-80 m-4">
                    Slide 01
                </div>
            </swiper-slide>
            <swiper-slide class="p-2">
                <div class="w-80 h-80 m-4">
                    Slide 02
                </div>
            </swiper-slide>
            <swiper-slide class="p-2">
                <div class="w-80 h-80 m-4">
                    Slide 03
                </div>
            </swiper-slide>
            <swiper-slide class="p-2">
                <div class="w-80 h-80 m-4">
                    Slide 04
                </div>
            </swiper-slide>
            <swiper-slide class="p-2">
                <div class="w-80 h-80 m-4">
                    Slide 05
                </div>
            </swiper-slide>
            <swiper-slide class="p-2">
                <div class="w-80 h-80 m-4">
                    Slide 06
                </div>
            </swiper-slide>
            <swiper-slide class="p-2">
                <div class="w-80 h-80 m-4">
                    Slide 07
                </div>
            </swiper-slide>
            <swiper-slide class="p-2">
                <div class="w-80 h-80 m-4">
                    Slide 08
                </div>
            </swiper-slide>
            <swiper-slide class="p-2">
                <div class="w-80 h-80 m-4">
                    Slide 09
                </div>
            </swiper-slide>
            <swiper-slide class="p-2">
                <div class="w-80 h-80 m-4">
                    Slide 10
                </div>
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
.swiper {
    height: 300px;
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

