<template>
  <div>
    <SectionHome />
    <SectionParcel />
    <SectionPartners />
    <SectionService />
    <SectionCoupon />
    <SectionDownload />
    <SectionCustomers />
  </div>
</template>

<script>
// @ is an alias to /src
import SectionHome from '@/components/home/SectionHome.vue'
import SectionParcel from '@/components/home/SectionParcel.vue'
import SectionPartners from '@/components/home/SectionPartners.vue'
import SectionService from '@/components/home/SectionService.vue'
import SectionCoupon from '@/components/home/SectionCoupon.vue'
import SectionDownload from '@/components/home/SectionDownload.vue'
import SectionCustomers from '@/components/home/SectionCustomers.vue'

export default {
  name: 'HomeView',
  components: {
    SectionHome,
    SectionParcel,
    SectionPartners,
    SectionService,
    SectionCoupon,
    SectionDownload,
    SectionCustomers
  }
}
</script>
