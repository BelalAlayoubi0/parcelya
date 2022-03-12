<template>
  <section class="section-content">
    <div class="container">
      <div class="row">
        <ProfileAccount />
        <div class="col-lg-8 col-xxl-9">
          <div class="border rounded-10 p-3 p-lg-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
              <h4 class="text-gray font-size-14 font-size-lg-18">Payment methods</h4>
              <a class="btn btn-link-green px-2 d-flex align-items-center font-size-14 font-size-lg-16" href="">
                <i class="fa-regular fa-plus me-1 fa-lg"></i>
                Add Payment Method
              </a>
            </div>
            <CardPayment />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import ProfileAccount from '@/components/account/ProfileAccount'
import CardPayment from '@/components/payment/CardPayment'

export default {
  name: 'IndexView',
  components: {
    ProfileAccount,
    CardPayment
  }
}

</script>
