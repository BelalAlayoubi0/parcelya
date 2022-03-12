<template>
  <section class="section-content">
    <div class="container no-padding-mobile">
      <div class="row mb-3">
        <div class="col-lg-10 mx-auto">
          <h3 class="text-gray font-medium px-3 px-lg-0">Notifications</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div class="border-lg rounded-10 p-lg-3">
            <div class="mb-5">
              <h5 class="font-semi-bold mb-3 px-3 px-lg-0">Earlier</h5>
              <CardNotification />
            </div>
            <div class="mb-5">
              <h5 class="font-semi-bold mb-3 px-3 px-lg-0">Older</h5>
              <CardNotification />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardNotification from '@/components/notification/CardNotification.vue'
export default {
  name: 'IndexView',
  components: {
    CardNotification
  }
}
</script>
