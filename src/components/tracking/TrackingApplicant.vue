<template>
  <div>
    <div class="applicant__header mt-5 d-none d-lg-block">
      <div class="row align-items-center">
        <div class="col-lg-2">
          <h6 class="applicant__cell">ID</h6>
        </div>
        <div class="col-lg-2">
          <h6 class="applicant__cell">States</h6>
        </div>
        <div class="col-lg-3">
          <h6 class="applicant__cell">Recipient</h6>
        </div>
        <div class="col-lg-3">
          <h6 class="applicant__cell">Sender</h6>
        </div>
        <div class="col-lg-2">
          <h6 class="applicant__cell">Delivery company</h6>
        </div>
      </div>
    </div>
    <div id="accordion-tracking">
      <div class="applicant__table">
        <div class="applicant__line_head" v-b-toggle.collapse-1>
          <div class="row align-items-center align-items-lg-start">
            <div class="col-lg-2 col-4">
              <h6 class="applicant__cell">#22YX515</h6>
            </div>
            <div class="col-lg-2 col-4">
              <h6 class="applicant__cell"><span class="states me-1"></span>On way</h6>
            </div>
            <div class="col-lg-3 order-3 order-lg-2">
              <h6 class="applicant__cell border-top-mobile"><span class="d-block">Afana Bldg., Awni Doher st., Gaza, Rafah, Palestine</span><span class="d-block">13:10 Jan 15, 2021</span></h6>
            </div>
            <div class="col-lg-3 order-4 order-lg-3">
              <h6 class="applicant__cell"><span class="d-block">Afana Bldg., Awni Doher st., Gaza, Rafah, Palestine</span><span class="d-block">13:10 Jan 15, 2021</span></h6>
            </div>
            <div class="col-lg-2 col-4 order-2 order-lg-4">
              <span class="d-flex align-items-center applicant__cell">
                <div class="symbol symbol-30 me-2"><img class="rounded-circle" src="@/assets/images/avatar/img-01.png" alt=""></div>
                <span>FedEx</span>
              </span>
            </div>
          </div>
        </div>
        <b-collapse id="collapse-1" accordion="my-accordion">
          <div class="applicant__line_body">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="timeline-wrapper">
                  <div class="timeline-wrapper-inner">
                    <div class="timeline-container">
                      <div class="timeline-item is-unread">
                        <div class="date text-gray">Mon, 22 Jan 2021</div>
                        <div class="dot">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12V11.1C23 10.5 22.6 10.1 22 10.1C21.4 10.1 21 10.5 21 11.1V12C21 17 17 21 12 21C7 21 3 17 3 12C3 7 7 3 12 3C13.3 3 14.5 3.3 15.7 3.8C16.2 4 16.8 3.8 17 3.3C17.2 2.8 17 2.2 16.5 2C15.1 1.3 13.5 1 12 1C5.9 1 1 5.9 1 12C1 18.1 5.9 23 12 23C18.1 23 23 18.1 23 12ZM22.3 2.3C22.7 1.9 23.3 1.9 23.7 2.3C24.1 2.7 24.1 3.3 23.7 3.7L12.7 14.7C12.5 14.9 12.2 15 12 15C11.8 15 11.5 14.9 11.3 14.7L8.3 11.7C7.9 11.3 7.9 10.7 8.3 10.3C8.7 9.9 9.3 9.9 9.7 10.3L12 12.6L22.3 2.3Z" fill="#28A745"></path>
                            <mask id="mask0_417_5772" style="mask-type: alpha;" maskUnits="userSpaceOnUse" x="1" y="1" width="23" height="22">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12V11.1C23 10.5 22.6 10.1 22 10.1C21.4 10.1 21 10.5 21 11.1V12C21 17 17 21 12 21C7 21 3 17 3 12C3 7 7 3 12 3C13.3 3 14.5 3.3 15.7 3.8C16.2 4 16.8 3.8 17 3.3C17.2 2.8 17 2.2 16.5 2C15.1 1.3 13.5 1 12 1C5.9 1 1 5.9 1 12C1 18.1 5.9 23 12 23C18.1 23 23 18.1 23 12ZM22.3 2.3C22.7 1.9 23.3 1.9 23.7 2.3C24.1 2.7 24.1 3.3 23.7 3.7L12.7 14.7C12.5 14.9 12.2 15 12 15C11.8 15 11.5 14.9 11.3 14.7L8.3 11.7C7.9 11.3 7.9 10.7 8.3 10.3C8.7 9.9 9.3 9.9 9.7 10.3L12 12.6L22.3 2.3Z" fill="white"></path>
                            </mask>
                            <g mask="url(#mask0_417_5772)">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H24V24H0V0Z"></path>
                            </g>
                          </svg>
                        </div>
                        <div class="content-wrap">
                          <div class="content-box">
                            <div class="box-text">
                              <div class="meta-text">Subited parcel</div>
                              <div class="meta-date text-gray">2 days estimeated</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="timeline-item is-unread">
                        <div class="date"><span>Sep 23, 2020</span></div>
                        <div class="dot">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12V11.1C23 10.5 22.6 10.1 22 10.1C21.4 10.1 21 10.5 21 11.1V12C21 17 17 21 12 21C7 21 3 17 3 12C3 7 7 3 12 3C13.3 3 14.5 3.3 15.7 3.8C16.2 4 16.8 3.8 17 3.3C17.2 2.8 17 2.2 16.5 2C15.1 1.3 13.5 1 12 1C5.9 1 1 5.9 1 12C1 18.1 5.9 23 12 23C18.1 23 23 18.1 23 12ZM22.3 2.3C22.7 1.9 23.3 1.9 23.7 2.3C24.1 2.7 24.1 3.3 23.7 3.7L12.7 14.7C12.5 14.9 12.2 15 12 15C11.8 15 11.5 14.9 11.3 14.7L8.3 11.7C7.9 11.3 7.9 10.7 8.3 10.3C8.7 9.9 9.3 9.9 9.7 10.3L12 12.6L22.3 2.3Z" fill="#28A745"></path>
                            <mask id="mask0_417_5772" style="mask-type: alpha;" maskUnits="userSpaceOnUse" x="1" y="1" width="23" height="22">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12V11.1C23 10.5 22.6 10.1 22 10.1C21.4 10.1 21 10.5 21 11.1V12C21 17 17 21 12 21C7 21 3 17 3 12C3 7 7 3 12 3C13.3 3 14.5 3.3 15.7 3.8C16.2 4 16.8 3.8 17 3.3C17.2 2.8 17 2.2 16.5 2C15.1 1.3 13.5 1 12 1C5.9 1 1 5.9 1 12C1 18.1 5.9 23 12 23C18.1 23 23 18.1 23 12ZM22.3 2.3C22.7 1.9 23.3 1.9 23.7 2.3C24.1 2.7 24.1 3.3 23.7 3.7L12.7 14.7C12.5 14.9 12.2 15 12 15C11.8 15 11.5 14.9 11.3 14.7L8.3 11.7C7.9 11.3 7.9 10.7 8.3 10.3C8.7 9.9 9.3 9.9 9.7 10.3L12 12.6L22.3 2.3Z" fill="white"></path>
                            </mask>
                            <g mask="url(#mask0_417_5772)">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H24V24H0V0Z"></path>
                            </g>
                          </svg>
                        </div>
                        <div class="content-wrap">
                          <div class="content-box">
                            <div class="box-text">
                              <div class="meta-text">Packaging</div>
                              <div class="meta-date text-gray">2 days estimeated</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="timeline-item is-unread">
                        <div class="date"><span>Sep 23, 2020</span></div>
                        <div class="dot">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="6" fill="white" stroke="#FECB33" stroke-width="8"></circle>
                          </svg>
                        </div>
                        <div class="content-wrap">
                          <div class="content-box">
                            <div class="box-text">
                              <div class="meta-text">Delivered</div>
                              <div class="meta-date text-gray">2 days estimeated</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="timeline-item">
                        <div class="date"><span>Sep 22, 2020</span></div>
                        <div class="dot">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="6" fill="white" stroke="#AEB6D1" stroke-width="8"></circle>
                          </svg>
                        </div>
                        <div class="content-wrap">
                          <div class="content-box">
                            <div class="box-text">
                              <div class="meta-text">Order in Delivery</div>
                              <div class="meta-date text-gray">Afana Bldg., Awni Doher st., Gaza, Rafah, Palestine</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <GmapMap :center='center' :zoom='12' style='width:100%;  height: 300px;' />
              </div>
            </div>
          </div>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  data () {
    return {
      center: { lat: 45.508, lng: -73.587 }
    }
  },
  mounted () {
    this.geolocate()
  },
  methods: {
    geolocate: function () {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    }
  }
}
</script>
