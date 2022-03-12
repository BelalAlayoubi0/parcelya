<template>
  <section class="section bg-gray pb-lg-4">
    <div class="container">
      <div class="row mb-2 mb-lg-4 wow fadeInUp" data-wow-delay="0.2s">
        <div class="col-lg-12">
          <h2 class="font-bold text-center font-size-22 font-size-lg-30">Our Partners</h2>
        </div>
      </div>
      <div class="row align-items-center wow fadeInUp" data-wow-delay="0.3s">
        <div class="col-lg-12">
          <swiper ref="mySwiper" :options="swiperOption">
            <swiper-slide v-for="item in items" :key="item.is">
              <div class="widget__item-partners">
                <div class="widget__item-image"><img :src="item.img" alt="" /></div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          img: require('@/assets/images/partners/tnt.png')
        },
        {
          img: require('@/assets/images/partners/fedex.png')
        },
        {
          img: require('@/assets/images/partners/tnt.png')
        },
        {
          img: require('@/assets/images/partners/tnt.png')
        },
        {
          img: require('@/assets/images/partners/fedex.png')
        },
        {
          img: require('@/assets/images/partners/tnt.png')
        },
        {
          img: require('@/assets/images/partners/tnt.png')
        },
        {
          img: require('@/assets/images/partners/fedex.png')
        },
        {
          img: require('@/assets/images/partners/tnt.png')
        },
        {
          img: require('@/assets/images/partners/tnt.png')
        },
        {
          img: require('@/assets/images/partners/fedex.png')
        },
        {
          img: require('@/assets/images/partners/tnt.png')
        }
      ],
      swiperOption: {
        slidesPerView: 6,
        spaceBetween: 30,
        speed: 1200,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        breakpoints: {
          0: {
            slidesPerView: 3.8
          },
          576: {
            slidesPerView: 3.8
          },
          992: {
            slidesPerView: 6
          },
          1400: {
            slidesPerView: 8
          }
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  }
}
</script>
