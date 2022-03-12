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
                    <svg class="rotate-icon" width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.6 10.9334L15.6 18.9334C15.3333 19.2001 15.0667 19.3334 14.6667 19.3334C14.2667 19.3334 14 19.2001 13.7333 18.9334C13.2 18.4001 13.2 17.6001 13.7333 17.0667L19.4667 11.3334H1.33333C0.533333 11.3334 0 10.8001 0 10.0001C0 9.20008 0.533333 8.66675 1.33333 8.66675H19.4667L13.7333 2.93341C13.2 2.40008 13.2 1.60008 13.7333 1.06675C14.2667 0.533415 15.0667 0.533415 15.6 1.06675L23.6 9.06675C23.7333 9.20008 23.8667 9.33342 23.8667 9.46675C24 9.73341 24 10.1334 23.8667 10.5334C23.8667 10.6667 23.7333 10.8001 23.6 10.9334Z" fill="white"></path>
                    </svg>
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
            <div class="filter">
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
                  <div class="search-tracking">
                    <div class="border rounded px-2 py-1 d-flex align-items-center">
                      <div class="col-auto">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3327 13.1667L18.0827 16.9167C18.416 17.2501 18.416 17.7501 18.0827 18.0834C17.916 18.2501 17.666 18.3334 17.4993 18.3334C17.3327 18.3334 17.0827 18.2501 16.916 18.0834L13.166 14.3334C11.916 15.2501 10.416 15.8334 8.74935 15.8334C4.83268 15.8334 1.66602 12.6667 1.66602 8.75008C1.66602 4.83342 4.83268 1.66675 8.74935 1.66675C12.666 1.66675 15.8327 4.83342 15.8327 8.75008C15.8327 10.4167 15.2493 12.0001 14.3327 13.1667ZM8.74935 3.33341C5.74935 3.33341 3.33268 5.75008 3.33268 8.75008C3.33268 11.7501 5.74935 14.1667 8.74935 14.1667C10.2493 14.1667 11.5827 13.5834 12.5827 12.5834C13.5827 11.5834 14.166 10.2501 14.166 8.75008C14.166 5.75008 11.7493 3.33341 8.74935 3.33341Z" fill="#AEB6D1"></path>
                          <mask id="mask0_417_5567" style="mask-type: alpha;" maskUnits="userSpaceOnUse" x="1" y="1" width="18" height="18">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3327 13.1667L18.0827 16.9167C18.416 17.2501 18.416 17.7501 18.0827 18.0834C17.916 18.2501 17.666 18.3334 17.4993 18.3334C17.3327 18.3334 17.0827 18.2501 16.916 18.0834L13.166 14.3334C11.916 15.2501 10.416 15.8334 8.74935 15.8334C4.83268 15.8334 1.66602 12.6667 1.66602 8.75008C1.66602 4.83342 4.83268 1.66675 8.74935 1.66675C12.666 1.66675 15.8327 4.83342 15.8327 8.75008C15.8327 10.4167 15.2493 12.0001 14.3327 13.1667ZM8.74935 3.33341C5.74935 3.33341 3.33268 5.75008 3.33268 8.75008C3.33268 11.7501 5.74935 14.1667 8.74935 14.1667C10.2493 14.1667 11.5827 13.5834 12.5827 12.5834C13.5827 11.5834 14.166 10.2501 14.166 8.75008C14.166 5.75008 11.7493 3.33341 8.74935 3.33341Z" fill="white"></path>
                          </mask>
                          <g mask="url(#mask0_417_5567)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H20V20H0V0Z" fill="#AEB6D1"></path>
                          </g>
                        </svg>
                      </div>
                      <input class="form-control border-0 h-auto p-1" type="text" placeholder="Search...">
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="text-gray font-size-lg-16"><span class="d-none d-lg-inline-block">On going parcels is what you have sent, </span><span>you have 3 on going parcels.</span></h6>
                  <div class="d-flex align-items-center d-lg-none">
                    <div class="button--trigger-search pointer">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_570_4096" style="mask-type: alpha;" maskUnits="userSpaceOnUse" x="1" y="1" width="20" height="20">
                          <mask id="path-1-inside-1_570_4096" fill="white">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7673 14.4833L19.8923 18.6082C20.259 18.9749 20.259 19.5249 19.8923 19.8916C19.709 20.0749 19.434 20.1666 19.2507 20.1666C19.0673 20.1666 18.7923 20.0749 18.609 19.8916L14.484 15.7666C13.109 16.7749 11.459 17.4166 9.62565 17.4166C5.31732 17.4166 1.83398 13.9333 1.83398 9.62492C1.83398 5.31659 5.31732 1.83325 9.62565 1.83325C13.934 1.83325 17.4173 5.31659 17.4173 9.62492C17.4173 11.4583 16.7757 13.1999 15.7673 14.4833ZM9.62565 3.66659C6.32565 3.66659 3.66732 6.32492 3.66732 9.62492C3.66732 12.9249 6.32565 15.5833 9.62565 15.5833C11.2757 15.5833 12.7423 14.9416 13.8423 13.8416C14.9423 12.7416 15.584 11.2749 15.584 9.62492C15.584 6.32492 12.9256 3.66659 9.62565 3.66659Z"></path>
                          </mask>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7673 14.4833L19.8923 18.6082C20.259 18.9749 20.259 19.5249 19.8923 19.8916C19.709 20.0749 19.434 20.1666 19.2507 20.1666C19.0673 20.1666 18.7923 20.0749 18.609 19.8916L14.484 15.7666C13.109 16.7749 11.459 17.4166 9.62565 17.4166C5.31732 17.4166 1.83398 13.9333 1.83398 9.62492C1.83398 5.31659 5.31732 1.83325 9.62565 1.83325C13.934 1.83325 17.4173 5.31659 17.4173 9.62492C17.4173 11.4583 16.7757 13.1999 15.7673 14.4833ZM9.62565 3.66659C6.32565 3.66659 3.66732 6.32492 3.66732 9.62492C3.66732 12.9249 6.32565 15.5833 9.62565 15.5833C11.2757 15.5833 12.7423 14.9416 13.8423 13.8416C14.9423 12.7416 15.584 11.2749 15.584 9.62492C15.584 6.32492 12.9256 3.66659 9.62565 3.66659Z" fill="white"></path>
                          <path d="M19.8923 18.6082L20.2459 18.2547L19.8923 18.6082ZM15.7673 14.4833L15.3742 14.1743L15.1001 14.5231L15.4138 14.8368L15.7673 14.4833ZM19.8923 19.8916L19.5388 19.538L19.5388 19.538L19.8923 19.8916ZM18.609 19.8916L18.2554 20.2451L18.609 19.8916ZM14.484 15.7666L14.8375 15.413L14.5342 15.1097L14.1883 15.3634L14.484 15.7666ZM13.8423 13.8416L13.4888 13.488L13.4888 13.488L13.8423 13.8416ZM20.2459 18.2547L16.1209 14.1297L15.4138 14.8368L19.5388 18.9618L20.2459 18.2547ZM20.2459 20.2451C20.8078 19.6832 20.8078 18.8166 20.2459 18.2547L19.5388 18.9618C19.7102 19.1332 19.7102 19.3666 19.5388 19.538L20.2459 20.2451ZM19.2507 20.6666C19.5577 20.6666 19.9626 20.5284 20.2459 20.2451L19.5388 19.538C19.504 19.5728 19.4505 19.6077 19.3858 19.6336C19.3189 19.6603 19.2675 19.6666 19.2507 19.6666V20.6666ZM18.2554 20.2451C18.5387 20.5284 18.9436 20.6666 19.2507 20.6666V19.6666C19.2338 19.6666 19.1824 19.6603 19.1155 19.6336C19.0508 19.6077 18.9973 19.5728 18.9625 19.538L18.2554 20.2451ZM14.1304 16.1201L18.2554 20.2451L18.9625 19.538L14.8375 15.413L14.1304 16.1201ZM9.62565 17.9166C11.5804 17.9166 13.3319 17.2315 14.7797 16.1698L14.1883 15.3634C12.8861 16.3183 11.3376 16.9166 9.62565 16.9166V17.9166ZM1.33398 9.62492C1.33398 14.2094 5.04118 17.9166 9.62565 17.9166V16.9166C5.59346 16.9166 2.33398 13.6571 2.33398 9.62492H1.33398ZM9.62565 1.33325C5.04118 1.33325 1.33398 5.04044 1.33398 9.62492H2.33398C2.33398 5.59273 5.59346 2.33325 9.62565 2.33325V1.33325ZM17.9173 9.62492C17.9173 5.04044 14.2101 1.33325 9.62565 1.33325V2.33325C13.6578 2.33325 16.9173 5.59273 16.9173 9.62492H17.9173ZM16.1605 14.7922C17.2375 13.4214 17.9173 11.5711 17.9173 9.62492H16.9173C16.9173 11.3454 16.3138 12.9784 15.3742 14.1743L16.1605 14.7922ZM4.16732 9.62492C4.16732 6.60106 6.60179 4.16659 9.62565 4.16659V3.16659C6.04951 3.16659 3.16732 6.04878 3.16732 9.62492H4.16732ZM9.62565 15.0833C6.60179 15.0833 4.16732 12.6488 4.16732 9.62492H3.16732C3.16732 13.2011 6.04951 16.0833 9.62565 16.0833V15.0833ZM13.4888 13.488C12.4803 14.4965 11.1399 15.0833 9.62565 15.0833V16.0833C11.4114 16.0833 13.0043 15.3867 14.1959 14.1951L13.4888 13.488ZM15.084 9.62492C15.084 11.1392 14.4972 12.4796 13.4888 13.488L14.1959 14.1951C15.3874 13.0036 16.084 11.4107 16.084 9.62492H15.084ZM9.62565 4.16659C12.6495 4.16659 15.084 6.60106 15.084 9.62492H16.084C16.084 6.04878 13.2018 3.16659 9.62565 3.16659V4.16659Z" fill="white" mask="url(#path-1-inside-1_570_4096)"></path>
                        </mask>
                        <g mask="url(#mask0_570_4096)">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H22V22H0V0Z" fill="#707070"></path>
                        </g>
                      </svg>
                    </div>
                    <div class="button--trigger-filter toggle-filter ms-3 pointer">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_553_4201" style="mask-type: alpha;" maskUnits="userSpaceOnUse" x="0" y="1" width="20" height="18">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3415 1.66675C18.6748 1.66675 18.9248 1.83341 19.0915 2.16675C19.2582 2.41675 19.1748 2.75008 19.0082 3.00008L12.5082 10.6667V17.5001C12.5082 17.8334 12.3415 18.0834 12.0915 18.2501C12.0082 18.3334 11.8415 18.3334 11.6748 18.3334C11.5082 18.3334 11.4248 18.3334 11.3415 18.2501L8.00816 16.5834C7.67483 16.4167 7.50816 16.1667 7.50816 15.8334V10.6667L1.00817 3.00008C0.841499 2.75008 0.758165 2.41675 0.924832 2.16675C1.0915 1.83341 1.3415 1.66675 1.67483 1.66675H18.3415ZM10.8415 10.4167C10.8415 10.1667 10.9248 10.0001 11.0082 9.83341L16.5915 3.33341H3.50816L9.00816 9.91675C9.0915 10.0001 9.17483 10.2501 9.17483 10.4167V15.3334L10.8415 16.1667V10.4167Z" fill="white"></path>
                        </mask>
                        <g mask="url(#mask0_553_4201)">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H20V20H0V0Z" fill="#35498E"></path>
                        </g>
                      </svg>
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
      options: [
        'foo',
        'bar',
        'baz'
      ]
    }
  }
}

</script>
