<template>
  <div id="app">
    <TheHeader />
    <router-view/>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'

export default {
  name: 'HomeView',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
<style lang="scss">

</style>
