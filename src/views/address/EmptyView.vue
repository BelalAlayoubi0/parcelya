<template>
  <section class="section-content">
    <div class="container">
      <div class="row">
        <ProfileAccount />
        <div class="col-lg-4 col-xxl-3 mb-4 mb-lg-0 wow fadeInUp" data-wow-delay="0.2s">
          <div class="border rounded-10 text-center py-4 d-flex flex-column mb-4 mt-4 mt-lg-0">
            <div class="symbol symbol-60 mb-4 image-user-account"><img class="rounded-pill" src="assets/images/avatar/img-01.png" alt="" /></div>
            <h3 class="font-semi-bold font-size-16 font-size-lg-20 mb-2">Adnan Mohammed Afana</h3>
            <div class="d-flex align-items-center justify-content-center">
              <div class="icon icon-25 me-2"><img src="assets/images/flag.png" alt="" /></div>
              <h5 class="text-gray">+971597768124</h5>
            </div>
          </div>
          <div class="border rounded-10 py-3">
            <ul class="nav-links">
              <li><a href="user-account.html">Account setting</a></li>
              <li><a class="active" href="addresses-saved.html">Addresses</a></li>
              <li><a href="payment-saved.html">Payment methods</a></li>
              <li><a href="parcels-bills.html">Parcels bills</a></li>
              <li><a href="coupon.html">Get coupon code</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-8 col-xxl-9 wow fadeInUp" data-wow-delay="0.3s">
          <div class="border rounded-10 p-3 p-lg-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
              <h4 class="text-gray font-size-14 font-size-lg-18">Addresses</h4>
              <a class="btn btn-link-green px-2 d-flex align-items-center" href="addresses-add.html">
                <svg class="me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 12C20 12.6 19.6 13 19 13H13V19C13 19.6 12.6 20 12 20C11.4 20 11 19.6 11 19V13H5C4.4 13 4 12.6 4 12C4 11.4 4.4 11 5 11H11V5C11 4.4 11.4 4 12 4C12.6 4 13 4.4 13 5V11H19C19.6 11 20 11.4 20 12Z"
                    fill="#28A745"
                  ></path>
                  <mask id="mask0_283_2491" style="mask-type: alpha;" maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="16">
                    <path
                      d="M20 12C20 12.6 19.6 13 19 13H13V19C13 19.6 12.6 20 12 20C11.4 20 11 19.6 11 19V13H5C4.4 13 4 12.6 4 12C4 11.4 4.4 11 5 11H11V5C11 4.4 11.4 4 12 4C12.6 4 13 4.4 13 5V11H19C19.6 11 20 11.4 20 12Z"
                      fill="white"
                    ></path>
                  </mask>
                  <g mask="url(#mask0_283_2491)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H24V24H0V0Z" fill="#28A745"></path>
                  </g>
                </svg>
                Add new addresses
              </a>
            </div>
            <div class="empt-addresses text-center py-4 py-lg-5">
              <div class="icon mb-3">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24.3135 30.333C22.1669 29.073 20.7202 26.7397 20.7202 24.0564C20.7202 20.043 23.9635 16.7764 28.0002 16.7764C30.6835 16.7764 33.0169 18.223 34.2769 20.393"
                    stroke="#AEB6D1"
                    stroke-width="3.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path d="M13.9768 41.5566C9.68351 35.6999 6.55684 28.2099 8.47018 19.8099C12.3202 2.86992 33.9968 0.139925 43.5868 11.6199" stroke="#AEB6D1" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M47.5533 19.833C50.2367 31.6863 42.8633 41.7197 36.4 47.9263C31.71 52.453 24.29 52.453 19.5767 47.9263" stroke="#AEB6D1" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M51.3332 4.66699L4.6665 51.3337" stroke="#AEB6D1" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
              <h4 class="font-size-16 font-size-lg-20 mb-2 text-gray">No added addresses yet!</h4>
              <h5 class="font-size-14 font-size-lg-18 text-gray">Use the + icon to add new addresse</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProfileAccount from '@/components/account/ProfileAccount.vue'

export default {
  name: 'EmptyView',
  components: {
    ProfileAccount
  }
}
</script>
