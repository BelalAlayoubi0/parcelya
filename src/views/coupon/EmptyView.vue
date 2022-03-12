<template>
  <section class="section-content">
    <div class="container">
      <div class="row">
        <ProfileAccount />
        <div class="col-lg-8 col-xxl-9">
          <div class="border rounded-10 p-3 p-lg-4">
            <div class="d-lg-flex align-items-center justify-content-between mb-4 mb-lg-5">
              <h4 class="text-gray font-size-14 font-size-lg-18">Get coupon code</h4>
            </div>
            <div class="row">
              <div class="col-lg-11 mx-auto">
                <div class="text-center border-bottom mb-4 pb-4 mb-lg-5 pb-lg-5">
                  <div class="mb-2">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.4327 65.667C25.166 62.7337 29.3327 62.967 31.7327 66.167L35.0994 70.667C37.7994 74.2337 42.166 74.2337 44.866 70.667L48.2327 66.167C50.6327 62.967 54.7994 62.7337 57.5327 65.667C63.466 72.0003 68.2994 69.9003 68.2994 61.0337V23.467C68.3327 10.0337 65.1994 6.66699 52.5994 6.66699H27.3994C14.7994 6.66699 11.666 10.0337 11.666 23.467V61.0003C11.666 69.9003 16.5327 71.967 22.4327 65.667Z" stroke="#707070" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M30 43.333L50 23.333" stroke="#707070" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M49.9823 43.3337H50.0123" stroke="#707070" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M29.9823 24.9997H30.0123" stroke="#707070" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                  <h6>No avaliable coupon code</h6>
                  <div class="d-flex align-items-center justify-content-center">
                    <img src="@/assets/images/sun.svg" alt="">
                    <h5 class="text-blue">Spend more 20 AED to get one</h5>
                  </div>
                </div>
              </div>
            </div>
            <CouponStep />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import ProfileAccount from '@/components/account/ProfileAccount'
import CouponStep from '@/components/coupon/CouponStep'

export default {
  name: 'IndexView',
  components: {
    ProfileAccount,
    CouponStep
  }
}

</script>
