<template>
  <div>
    <SectionTrackParcels />
    <SectionSpecialDriver />
    <SectionPartners />
    <SectionService />
    <SectionCoupon />
    <SectionDownload />
    <SectionCustomers />
  </div>
</template>

<script>
// @ is an alias to /src
import SectionTrackParcels from '@/components/home/SectionTrackParcels.vue'
import SectionSpecialDriver from '@/components/home/SectionSpecialDriver.vue'
import SectionPartners from '@/components/home/SectionPartners.vue'
import SectionService from '@/components/home/SectionService.vue'
import SectionCoupon from '@/components/home/SectionCoupon.vue'
import SectionDownload from '@/components/home/SectionDownload.vue'
import SectionCustomers from '@/components/home/SectionCustomers.vue'

export default {
  name: 'HomeView',
  components: {
    SectionTrackParcels,
    SectionSpecialDriver,
    SectionPartners,
    SectionService,
    SectionCoupon,
    SectionDownload,
    SectionCustomers
  }
}
</script>
