<template>
<div class="row">
  <div class="col-xxl-3 col-lg-4 col-sm-6" v-for="item in items" :key="item">
    <div class="widget__item-partner border rounded-10 mb-4">
      <div class="widget__item-partners-head d-flex align-items-center p-3 border-bottom">
        <div class="widget__item-image symbol symbol-60 col-auto">
          <img class="rounded-circle border p-1 border-2" :src="item.img" alt="">
        </div>
        <div class="d-flex flex-column ms-3">
          <h4 class="text-blue font-bold mb-1 font-size-16 font-size-lg-18">{{item.title}}</h4>
          <div class="data-rating d-flex align-items-center data-rating-lg">
            <span class="d-flex" :data-rating="item.rating"><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></span>
            <div class="text-gray-2 ps-2">({{item.revierw}} revierw)</div>
          </div>
        </div>
      </div>
      <div class="widget__item-cpntent p-3">
        <h5 class="text-gray widget__item-text font-size-12 font-size-lg-16">{{item.desc}} ... </h5>
        <router-link to="/companies" class="text-blue font-medium d-inline-block">See more </router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          img: require('@/assets/images/partners/tnt.png'),
          title: 'TNT Express',
          rating: 3,
          revierw: '12',
          desc: 'TNT Express is an international courier delivery services company. It is a subsidiary of FedEx, with its headquarters in Hoof'
        },
        {
          img: require('@/assets/images/partners/fedex.png'),
          title: 'TNT Express',
          rating: 5,
          revierw: '16',
          desc: 'TNT Express is an international courier delivery services company. It is a subsidiary of FedEx, with its headquarters in Hoof'
        },
        {
          img: require('@/assets/images/partners/tnt.png'),
          title: 'TNT Express',
          rating: 4,
          revierw: '19',
          desc: 'TNT Express is an international courier delivery services company. It is a subsidiary of FedEx, with its headquarters in Hoof'
        },
        {
          img: require('@/assets/images/partners/fedex.png'),
          title: 'TNT Express',
          rating: 1,
          revierw: '12',
          desc: 'TNT Express is an international courier delivery services company. It is a subsidiary of FedEx, with its headquarters in Hoof'
        },
        {
          img: require('@/assets/images/partners/tnt.png'),
          title: 'TNT Express',
          rating: 3,
          revierw: '12',
          desc: 'TNT Express is an international courier delivery services company. It is a subsidiary of FedEx, with its headquarters in Hoof'
        },
        {
          img: require('@/assets/images/partners/fedex.png'),
          title: 'TNT Express',
          rating: 5,
          revierw: '16',
          desc: 'TNT Express is an international courier delivery services company. It is a subsidiary of FedEx, with its headquarters in Hoof'
        }
      ]
    }
  }
}
</script>
