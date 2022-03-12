<template>
  <section class="section-content">
    <div class="container no-padding-mobile">
      <div class="border rounded-10">
        <div class="row g-0">
          <CardProfile />
          <ChatWidget />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardProfile from '@/components/message/CardProfile.vue'
import ChatWidget from '@/components/message/ChatWidget.vue'
export default {
  name: 'IndexView',
  components: {
    CardProfile,
    ChatWidget
  }
}
</script>
