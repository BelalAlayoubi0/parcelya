<template>
  <div>
    <router-link to="/notifications" class="widget__item-notif d-block" :class="{ noRead: item.NoActive }" v-for="(item, index) in items" :key="index">
    <div class="d-flex align-items-start align-items-lg-center">
      <div class="col-auto">
        <div class="widget__item-image me-3"><img :src="item.img" alt=""></div>
      </div>
      <div class="col">
        <h5 class="widget__item-title">{{item.title}}</h5>
      </div>
    </div>
    <h6 class="widget__item-datetext-gray text-end mt-2 mt-lg-0">{{item.date}}</h6>
  </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          img: require('@/assets/images/payment.png'),
          title: 'Your Payment for parcel ID E252F has been successfully using Paypall',
          date: '1 hr ago',
          NoActive: true
        },
        {
          img: require('@/assets/images/star.png'),
          title: 'Your Payment for parcel ID E252F has been successfully using Paypall',
          date: '1 hr ago',
          NoActive: false
        },
        {
          img: require('@/assets/images/payment.png'),
          title: 'Your Payment for parcel ID E252F has been successfully using Paypall',
          date: '1 hr ago',
          NoActive: false
        }
      ]
    }
  }
}
</script>
