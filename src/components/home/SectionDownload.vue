<template>
  <section class="section section-download">
    <div class="container">
      <div class="bg-gradient rounded-10 p-3 p-lg-5 content-download">
        <div class="row">
          <div class="col-lg-6">
            <h2 class="mb-lg-3 font-bold text-dark font-size-xxl-50">Parcelya Coming Soon</h2>
            <h4 class="font-size-xxl-30 mb-4 mb-lg-4">Will be available on:</h4>
            <div class="d-none d-lg-flex align-items-cemter">
              <router-link to="/" class="me-3"><img src="@/assets/images/google-play.png" alt="" /></router-link>
              <router-link to="/"><img src="@/assets/images/app-store.png" alt="" /></router-link>
            </div>
            <div class="d-flex d-lg-none align-items-cemter">
              <router-link to="/" class="me-3"><img src="@/assets/images/google-play-mobile.png" alt="" /></router-link>
              <router-link to="/"><img src="@/assets/images/app-store-mobile.png" alt="" /></router-link>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="image-phone d-none d-lg-block"><img src="@/assets/images/image-phone.png" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
