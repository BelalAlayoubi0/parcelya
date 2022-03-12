<template>
  <section class="section section-contact bg-contact">
    <div class="container">
      <div class="row g-0 mb-3 mb-lg-5">
        <div class="col-lg-3 col-8">
          <h2 class="mb-2 font-bold font-size-xxl-50">Our customers saying</h2>
          <h6 class="text-gray font-size-xxl-20">We growing up with your feedback, as it's our power to go on</h6>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <swiper ref="mySwiper" class="py-5" :options="swiperOption">
            <swiper-slide v-for="item in items" :key="item.is">
              <div class="widget__item-customer border rounded-10 p-3 p-xxl-4 text-center">
                <div class="widget__item-image mb-3 mb-lg-4 symbol symbol-90"><img class="rounded-circle" :src="item.img" alt="" /></div>
                <div class="widget__item-content">
                  <h3 class="widget__item-title font-semi-bold text-gray mb-lg-4 mb-3 font-size-16 font-size-lg-20">{{item.desc}}</h3>
                  <router-link to="/" class="widget__item-action btn-tiw" :class="item.btn"><i :class="item.icon" class="me-2"></i>{{item.titleSocial}}</router-link>
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
          img: require('@/assets/images/avatar/img-01.png'),
          desc: '"Lorem ipsum dolor sit amet, consetetur adipscing elitr, sed diam nonumy eirmod temporusam et justo"',
          btn: 'btn-tiw',
          icon: 'fab fa-twitter',
          titleSocial: 'twitter'
        },
        {
          img: require('@/assets/images/avatar/img-02.png'),
          desc: '"Lorem ipsum dolor sit amet, consetetur adipscing elitr, sed diam nonumy eirmod temporusam et justo"',
          btn: 'btn-tiw',
          icon: 'fab fa-facebook-f',
          titleSocial: 'Facebook'
        },
        {
          img: require('@/assets/images/avatar/img-03.png'),
          desc: '"Lorem ipsum dolor sit amet, consetetur adipscing elitr, sed diam nonumy eirmod temporusam et justo"',
          btn: 'btn-lin',
          icon: 'fab fa-linkedin-in',
          titleSocial: 'linkedin'
        },
        {
          img: require('@/assets/images/avatar/img-01.png'),
          desc: '"Lorem ipsum dolor sit amet, consetetur adipscing elitr, sed diam nonumy eirmod temporusam et justo"',
          btn: 'btn-tiw',
          icon: 'fab fa-twitter',
          titleSocial: 'twitter'
        },
        {
          img: require('@/assets/images/avatar/img-02.png'),
          desc: '"Lorem ipsum dolor sit amet, consetetur adipscing elitr, sed diam nonumy eirmod temporusam et justo"',
          btn: 'btn-tiw',
          icon: 'fab fa-facebook-f',
          titleSocial: 'Facebook'
        },
        {
          img: require('@/assets/images/avatar/img-03.png'),
          desc: '"Lorem ipsum dolor sit amet, consetetur adipscing elitr, sed diam nonumy eirmod temporusam et justo"',
          btn: 'btn-lin',
          icon: 'fab fa-linkedin-in',
          titleSocial: 'linkedin'
        }
      ],
      swiperOption: {
        spaceBetween: 30,
        speed: 1200,
        breakpoints: {
          0: {
            slidesPerView: 1.2,
            slidesPerColumn: 1
          },
          576: {
            slidesPerView: 1.8
          },
          992: {
            slidesPerView: 3,
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row'
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
