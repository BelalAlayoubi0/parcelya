<template>
  <div class="row">
    <div class="col-12">
      <div class="border-gray bg-gray-2 p-3 p-lg-4 rounded-10 d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-between mb-3" v-for="(item, index) in items" :key="index">
        <div class="col-lg-5 col-12">
          <div class="d-flex">
            <img src="@/assets/images/credit-card.svg" alt="" class="me-2">
            <h4 class="text-dark font-semi-bold ms-2 ms-xxl-0">{{item.title}}</h4>
          </div>
        </div>
        <div class="col-lg-3 col-12 mt-3 mt-lg-0">
          <h5 class="text-gray text-lg-end"><span>**** ****</span><span class="ps-1">{{item.number}}</span></h5>
        </div>
        <div class="col-lg-4 col-12">
          <div class="d-flex align-items-center justify-content-lg-end">
            <button class="btn btn-primary d-flex align-items-center p-lg-2 p-1 rounded font-size-14 cursor-text">
              <svg class="me-2" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="#0A0E1C"></circle>
              </svg>
              Primary
            </button>
            <!-- <button class="btn btn-link-blue p-lg-2 p-1 rounded">Make as default</button> -->
            <button class="bg-transparent ms-4">
              <i class="fa-solid fa-xmark fa-lg text-gray"></i>
            </button>
          </div>
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
          title: 'Islamic Bank card',
          number: 1106
        },
        {
          title: 'Islamic Bank card',
          number: 1106
        }
      ]
    }
  }
}
</script>
