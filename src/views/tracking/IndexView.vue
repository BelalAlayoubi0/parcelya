<template>
  <div>
    <div class="page-header wow fadeInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 pt-4 mt-2 pt-lg-0">
            <div class="row">
              <div class="col-lg-9">
                <h3 class="mb-3 mb-lg-2 font-size-xxl-40 font-size-lg-30 text-blue font-bold">Track parcels</h3>
                <h5 class="mb-4 font-size-lg-20">you can track delivered and received parcels using parcel ID or QR code</h5>
              </div>
            </div>
            <form action="">
              <div class="form-group">
                <div class="bg-white rounded-10 p-lg-2 d-flex align-items-center border">
                  <input class="form-control border-0" type="text" placeholder="What is your question?">
                  <button class="btn btn-primary">
                    <i class="fa-light fa-arrow-right-long rotate-icon fa-xl"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-lg-6"><img class="image-earth" src="@/assets/images/bg-earth.png" alt=""></div>
        </div>
      </div>
    </div>
    <div class="section-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="filter" :class="{'active-filter-mobile': isActiveFilter}">
              <div clas="border-lg rounded-10 p-lg-3">
                <TrackingCategories />
                <hr>
                <TrackingFilter />
              </div>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="border-lg rounded-10 p-lg-3">
              <div class="px-3 px-lg-0 mb-3 mb-lg-0">
                <div class="d-lg-flex align-items-center justify-content-between">
                  <h4 class="font-size-lg-22 mb-2">On going Parcels</h4>
                  <div class="search-tracking" :class="{'active-search-mobile': isActiveSearch}">
                    <div class="border rounded px-2 py-1 d-flex align-items-center">
                      <div class="col-auto">
                        <i class="fa-light fa-magnifying-glass fa-xl"></i>
                      </div>
                      <input class="form-control border-0 h-auto p-1" type="text" placeholder="Search...">
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="text-gray font-size-lg-16"><span class="d-none d-lg-inline-block">On going parcels is what you have sent, </span><span>you have 3 on going parcels.</span></h6>
                  <div class="d-flex align-items-center d-lg-none">
                    <div class="button--trigger-search pointer" @click="showFilter">
                      <i class="fa-light fa-magnifying-glass fa-xl"></i>
                    </div>
                    <div class="button--trigger-filter toggle-filter ms-3 pointer" @click="showSearch">
                      <i class="fa-light fa-filter fa-xl"></i>
                      <span class="count">4</span>
                    </div>
                  </div>
                </div>
              </div>
              <TrackingApplicant />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import TrackingCategories from '@/components/tracking/TrackingCategories'
import TrackingFilter from '@/components/tracking/TrackingFilter'
import TrackingApplicant from '@/components/tracking/TrackingApplicant'

export default {
  name: 'IndexView',
  components: {
    TrackingCategories,
    TrackingFilter,
    TrackingApplicant
  },
  data () {
    return {
      isActiveFilter: false,
      isActiveSearch: false,
      options: [
        'foo',
        'bar',
        'baz'
      ]
    }
  },
  methods: {
    showFilter () {
      this.isActiveFilter = false
      this.isActiveSearch = !this.isActiveSearch
    },
    showSearch () {
      this.isActiveSearch = false
      this.isActiveFilter = !this.isActiveFilter
    }
  }
}

</script>
