<template>
  <section class="section">
    <div class="container py-lg-4 mb-lg-5">
      <div class="row align-items-center">
        <div class="col-8 col-lg-3 mb-3 mb-lg-0">
          <h2 class="mb-2 font-bold font-size-xxl-50">Why to use Parcelya</h2>
          <h6 class="text-gray font-size-xxl-20">Motivational words goes here that motivate the users to use us</h6>
        </div>
        <div class="col-lg-9">
          <swiper ref="mySwiper" :options="swiperOption">
            <swiper-slide v-for="(item) in items" :key="item.is">
              <div class="widget__item-serv mb-4 mb-lg-0 border rounded-10 p-3 p-xxl-4">
                <div class="widget__item-image mb-3"><img class="rounded-10" :src="item.img" alt=""></div>
                <div class="widget__item-content">
                  <h3 class="widget__item-title font-semi-bold mb-2">{{item.title}}</h3>
                  <h6 class="widget__item-desc font-semi-medium text-gray font-size-xxl-16">{{item.desc}}</h6>
                </div>
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
          img: require('@/assets/images/img-01.png'),
          title: 'Special driver',
          desc: 'Motivational words goes here that motivate the users to use us in three lines'
        },
        {
          img: require('@/assets/images/img-01.png'),
          title: 'Time Customization',
          desc: 'Motivational words goes here that motivate the users to use us in three lines'
        },
        {
          img: require('@/assets/images/img-01.png'),
          title: 'Special offers',
          desc: 'Motivational words goes here that motivate the users to use us in three lines'
        }
      ],
      swiperOption: {
        spaceBetween: 30,
        speed: 1200,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        breakpoints: {
          0: {
            slidesPerView: 1.2
          },
          576: {
            slidesPerView: 1.8
          },
          992: {
            slidesPerView: 3
          },
          1400: {
            slidesPerView: 3
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
