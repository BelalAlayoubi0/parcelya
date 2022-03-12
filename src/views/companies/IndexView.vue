<template>
  <section class="section-content">
    <div class="container">
      <div class="row align-items-center mb-5">
        <div class="col-lg-6">
          <h3 class="mb-3 mb-lg-2 font-size-xxl-40 font-size-lg-30 text-blue font-bold">Delivery Companies</h3>
          <h5 class="mb-4 font-size-lg-18 text-gray">More than 100 company works for your convenience</h5>
        </div>
        <div class="col-lg-6">
          <div class="image-logos"><img src="@/assets/images/image-logos.png" alt=""></div>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-12">
          <h3 class="font-medium">Browse all Partners</h3>
        </div>
      </div>
      <CardCompanies />
    </div>
  </section>
</template>

<script>
import CardCompanies from '@/components/companies/CardCompanies'
export default {
  name: 'IndexView',
  components: {
    CardCompanies
  }
}
</script>
