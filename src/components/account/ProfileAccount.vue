<template>
  <div class="col-lg-4 col-xxl-3 mb-4 mb-lg-0">
    <div class="border rounded-10 text-center py-4 d-flex flex-column mb-4 mt-4 mt-lg-0">
      <div class="symbol symbol-60 mb-4 image-user-account"><img class="rounded-pill" src="@/assets/images/avatar/img-01.png" alt="" /></div>
      <h3 class="font-semi-bold font-size-16 font-size-lg-20 mb-2">Adnan Mohammed Afana</h3>
      <div class="d-flex align-items-center justify-content-center">
        <div class="icon icon-25 me-2"><img src="@/assets/images/flag.png" alt="" /></div>
        <h5 class="text-gray">+971597768124</h5>
      </div>
    </div>
    <div class="border rounded-10 py-3">
      <ul class="nav-links">
        <li><router-link to="/account">Account setting</router-link></li>
        <li><router-link to="/address">Addresses</router-link></li>
        <li><router-link to="/payment">Payment methods</router-link></li>
        <li><router-link to="/parcels-bills">Parcels bills</router-link></li>
        <li><router-link to="/coupon">Get coupon code</router-link></li>
      </ul>
    </div>
  </div>
</template>
