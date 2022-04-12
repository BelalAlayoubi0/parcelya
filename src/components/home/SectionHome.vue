<template>
  <section class="section section-home pt-lg-0">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 mb-4 mb-lg-0">
          <div class="home-content">
            <h1 class="home-title mb-4 mb-lg-5 font-bold text-blue">Save time, Control Parcels' hand-off and Delivery time</h1>
            <div class="home-action">
              <router-link to="/parcel-details" class="btn btn-primary">Send new Parcel</router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="home-image text-center">
            <img class="d-none d-lg-block" src="@/assets/images/image-home.png" alt="" />
            <img class="d-lg-none" src="@/assets/images/image-home-mobile.png" alt="" /></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>
