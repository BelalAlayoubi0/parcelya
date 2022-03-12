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
            <CouponCode />
            <CouponStep />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import ProfileAccount from '@/components/account/ProfileAccount'
import CouponCode from '@/components/coupon/CouponCode'
import CouponStep from '@/components/coupon/CouponStep'

export default {
  name: 'IndexView',
  components: {
    ProfileAccount,
    CouponCode,
    CouponStep
  }
}

</script>
