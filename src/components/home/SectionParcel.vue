<template>
<section class="section section-new-parcel pt-0">
  <div class="container pb-lg-4">
    <div class="bg-gray rounded-5 p-2">
      <ul class="tab-parcel d-flex">
        <li><router-link to="/" class="active text-gray font-semi-bold"> New Parcel</router-link></li>
        <li>
          <router-link to="/index-login-special-driver" class="text-gray font-semi-bold"> Special driver<span class="soon ms-2">Soon</span></router-link>
        </li>
      </ul>
      <div class="bg-white">
        <div class="row">
          <div class="col-lg-8">
            <h3 class="text-gray mb-3 p-4">Parcel details</h3>
            <div class="row">
              <div class="col-lg-5 col-xxl-4">
                <swiper ref="mySwiper" class="pb-5 slider-file" :options="swiperOption">
                  <swiper-slide v-for="item in items" :key="item.is">
                    <div class="widget__item-file text-center">
                      <div class="widget__item-image mb-3"><img :src="item.img" alt=""></div>
                      <h4 class="widget__item-title mb-1">{{item.title}}</h4>
                      <h4 class="widget__item-size text-gray">{{item.size}}</h4>
                    </div>
                  </swiper-slide>
                  <div class="swiper-button-prev" slot="button-prev">
                    <i class="fas fa-chevron-left"></i>
                  </div>
                  <div class="swiper-button-next" slot="button-next">
                    <i class="fas fa-chevron-right"></i>
                  </div>
                  <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
              </div>
              <div class="col-lg-6 mx-auto d-none d-lg-block">
                <b-tabs class="nav nav-pills mb-4 tab-custom flex-column border-0">
                  <b-tab title="Standard" active class="mt-4">
                    <div>
                      <form action="">
                        <div class="form-group">
                          <label class="font-medium mb-1">Parcel weight</label>
                          <div class="input-group">
                            <input class="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span class="input-group-text bg-white text-gray border" id="basic-addon2">Kg</span>
                          </div>
                        </div>
                        <div class="form-group text-end mt-4">
                          <button class="btn btn-primary font-semi-bold">Continue</button>
                        </div>
                      </form>
                    </div>
                  </b-tab>
                  <b-tab title="Same day">
                    <div></div>
                  </b-tab>
                  <b-tab title="Scheduled">
                    <div></div>
                  </b-tab>
                </b-tabs>
              </div>
              <div class="col-lg-6 mx-auto d-lg-none px-4">
                <form action="">
                  <div class="form-group">
                    <label class="font-medium mb-1">Parcel type</label>
                    <select class="form-control form-select">
                      <option value=""> Standard 1</option>
                      <option value=""> Standard 2</option>
                      <option value=""> Standard 3</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label class="font-medium mb-1">Parcel weight</label>
                    <div class="input-group">
                      <input class="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                      <span class="input-group-text bg-white text-gray border" id="basic-addon2">Kg</span>
                    </div>
                  </div>
                  <div class="form-group text-end mt-4">
                    <button class="btn btn-primary font-semi-bold w-100">Continue</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-4 border-start py-4 pe-4">
            <div class="border rounded-5 d-none d-lg-block">
              <div class="widget__item-accordion">
                <div class="widget__item-head" v-b-toggle.collapse-1>
                  <h5 class="widget__item-title font-medium">Standard Delivery</h5>
                </div>
                <b-collapse id="collapse-1" visible accordion="my-accordion">
                  <div class="widget__item-body accordion-collapse">
                    <div class="widget__item-text text-gray">
                      Description of what a Standard delivery means, and why should the user select standard delivery, what a Standard delivery means, and why should the user select standard delivery
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div class="widget__item-accordion">
                <div class="widget__item-head collapsed" v-b-toggle.collapse-2>
                  <h5 class="widget__item-title font-medium">Same day Delivery</h5>
                </div>
                <b-collapse id="collapse-2" accordion="my-accordion">
                  <div class="widget__item-body accordion-collapse">
                    <div class="widget__item-text text-gray">
                      Description of what a Standard delivery means, and why should the user select standard delivery, what a Standard delivery means, and why should the user select standard delivery
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div class="widget__item-accordion">
                <div class="widget__item-head collapsed" v-b-toggle.collapse-3>
                  <h5 class="widget__item-title font-medium">Scheduled Delivery</h5>
                </div>
                <b-collapse id="collapse-3" accordion="my-accordion">
                  <div class="widget__item-body accordion-collapse">
                    <div class="widget__item-text text-gray">
                      Description of what a Standard delivery means, and why should the user select standard delivery, what a Standard delivery means, and why should the user select standard delivery
                    </div>
                  </div>
                </b-collapse>
              </div>
            </div>
          </div>
        </div>
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
          img: require('@/assets/images/file.png'),
          title: 'Document size',
          size: '0 to .5 m3'
        },
        {
          img: require('@/assets/images/file.png'),
          title: 'Document size',
          size: '0 to .5 m3'
        },
        {
          img: require('@/assets/images/file.png'),
          title: 'Document size',
          size: '0 to .5 m3'
        }
      ],
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
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
