<template>
  <section class="section-content">
    <div class="container">
      <div class="row">
        <ProfileAccount />
        <div class="col-lg-8 col-xxl-9">
          <div class="border rounded-10 p-3 p-lg-4">
            <div class="d-lg-flex align-items-center justify-content-between mb-4">
              <h4 class="text-gray font-size-14 font-size-lg-18">Parcels bills</h4>
              <div class="col-lg-4 col-xxl-3">
                <v-select :options="options" placeholder="Select a Country"></v-select>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div id="accordion">
                  <div class="widget__item-bills border-gray bg-gray-2 py-3 py-lg-4 rounded-10 mb-3">
                    <div class="widget__item-head d-flex px-3 flex-wrap flex-lg-nowrap align-items-center pointer mb-4 mb-lg-5" v-b-toggle.collapse-1>
                      <div class="col-2 col-lg-1">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M29.3337 4.33301H2.66699C2.12033 4.33301 1.66699 3.87967 1.66699 3.33301C1.66699 2.78634 2.12033 2.33301 2.66699 2.33301H29.3337C29.8803 2.33301 30.3337 2.78634 30.3337 3.33301C30.3337 3.87967 29.8803 4.33301 29.3337 4.33301Z" fill="#FECB33"></path>
                          <path d="M4.89355 3.33301V19.293C4.89355 20.5997 5.50689 21.8397 6.56022 22.6263L13.5069 27.8263C14.9869 28.933 17.0269 28.933 18.5069 27.8263L25.4536 22.6263C26.5069 21.8397 27.1202 20.5997 27.1202 19.293V3.33301H4.89355ZM21.3336 18.333H10.6669C10.1202 18.333 9.66689 17.8797 9.66689 17.333C9.66689 16.7863 10.1202 16.333 10.6669 16.333H21.3336C21.8802 16.333 22.3336 16.7863 22.3336 17.333C22.3336 17.8797 21.8802 18.333 21.3336 18.333ZM21.3336 11.6663H10.6669C10.1202 11.6663 9.66689 11.213 9.66689 10.6663C9.66689 10.1197 10.1202 9.66634 10.6669 9.66634H21.3336C21.8802 9.66634 22.3336 10.1197 22.3336 10.6663C22.3336 11.213 21.8802 11.6663 21.3336 11.6663Z" fill="#FECB33"></path>
                        </svg>
                      </div>
                      <div class="col-5">
                        <h6 class="text-gray mb-1">Invoice serial</h6>
                        <h6 class="text-red">002512</h6>
                      </div>
                      <div class="col-6 col-lg-4 offset-2 offset-lg-0 mt-2 mt-lg-0">
                        <h6 class="text-gray mb-1">Invoice Date:</h6>
                        <h6 class="font-medium">08-01-2022</h6>
                      </div>
                      <div class="col-4 col-lg-2 text-end">
                        <h6 class="widget__item-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.3 8.3C5.5 8.1 5.7 8 6 8C6.3 8 6.5 8.1 6.7 8.3L12 13.6L17.3 8.3C17.7 7.9 18.3 7.9 18.7 8.3C19.1 8.7 19.1 9.3 18.7 9.7L12.7 15.7C12.3 16.1 11.7 16.1 11.3 15.7L5.3 9.7C4.9 9.3 4.9 8.7 5.3 8.3Z" fill="#707070"></path>
                            <mask id="mask0_417_4030" style="mask-type: alpha;" maskUnits="userSpaceOnUse" x="5" y="8" width="14" height="8">
                              <path d="M5.3 8.3C5.5 8.1 5.7 8 6 8C6.3 8 6.5 8.1 6.7 8.3L12 13.6L17.3 8.3C17.7 7.9 18.3 7.9 18.7 8.3C19.1 8.7 19.1 9.3 18.7 9.7L12.7 15.7C12.3 16.1 11.7 16.1 11.3 15.7L5.3 9.7C4.9 9.3 4.9 8.7 5.3 8.3Z" fill="white"></path>
                            </mask>
                            <g mask="url(#mask0_417_4030)">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M24 24L0 24L0 0L24 0L24 24Z" fill="#707070"></path>
                            </g>
                          </svg>
                          Expand
                        </h6>
                      </div>
                    </div>
                    <div class="d-lg-flex px-3">
                      <div class="col-lg-5 offset-2 offset-lg-1">
                        <h6 class="font-size-12 text-gray mb-1">Sender</h6>
                        <h6 class="text-blue mb-1">Adnan Mohammed Afana</h6>
                        <h6 class="text-gray">Afana Bldg., Awni Doher st., Gaza, Rafah, Palestine</h6>
                      </div>
                      <div class="col-lg-5 offset-2 offset-lg-0 mt-3 mt-lg-0">
                        <h6 class="font-size-12 text-gray mb-1">Recipient</h6>
                        <h6 class="text-blue mb-1">Azhaar Khaled Amaera</h6>
                        <h6 class="text-gray">Amaera Bldg., shoadaa st., Dora, Hebron, Palestine</h6>
                      </div>
                    </div>
                    <b-collapse id="collapse-1" accordion="my-accordion">
                      <div class="accordion-collapse">
                        <div class="d-lg-flex mt-5 px-3">
                          <div class="col-lg-5 offset-2 offset-lg-1">
                            <h6 class="font-size-12 text-gray mb-1">Drop-off date</h6>
                            <h6 class="text-blue mb-1">15 April, 2021</h6>
                          </div>
                          <div class="col-lg-5 offset-2 offset-lg-0 mt-3 mt-lg-0">
                            <h6 class="font-size-12 text-gray mb-1">Hand-off date`</h6>
                            <h6 class="text-blue mb-1">15 April, 2021</h6>
                          </div>
                        </div>
                        <div class="d-lg-flex mt-4 px-3">
                          <div class="col-lg-5 offset-2 offset-lg-1">
                            <h6 class="font-size-12 text-gray">Delivery company</h6>
                            <div class="mt-2 d-flex align-items-center">
                              <div class="icon icon-20 me-2"><img src="@/assets/images/ups.png" alt=""></div>
                              <h6 class="text-gray">United Parcel Service</h6>
                            </div>
                          </div>
                          <div class="col-lg-5 offset-2 offset-lg-0 mt-3 mt-lg-0">
                            <h6 class="font-size-12 text-gray">Payment Method</h6>
                            <div class="mt-2 d-flex align-items-center">
                              <div class="icon icon-20 me-2"><img src="@/assets/images/visa.png" alt=""></div>
                              <div class="text-gray pe-2">....</div>
                              <h6 class="text-gray">2100</h6>
                            </div>
                          </div>
                        </div>
                        <div class="card-table d-flex flex-column mt-4">
                          <div class="bg-gray-2 py-2 px-3 mb-2">
                            <div class="d-flex">
                              <div class="col-5 offset-2 offset-lg-1">
                                <h6>Item</h6>
                              </div>
                              <div class="col-3">
                                <h6>Cost</h6>
                              </div>
                              <div class="col-2">
                                <h6>Pricex</h6>
                              </div>
                            </div>
                          </div>
                          <div class="d-flex py-2 px-3">
                            <div class="col-5 offset-2 offset-lg-1">
                              <h6 class="text-gray">Parcel cost</h6>
                            </div>
                            <div class="col-3">
                              <h6 class="text-gray">250 AED</h6>
                            </div>
                            <div class="col-2">
                              <h6 class="text-gray">250 AED</h6>
                            </div>
                          </div>
                          <div class="d-flex py-2 px-3">
                            <div class="col-5 offset-2 offset-lg-1">
                              <h6 class="text-gray">Taxes</h6>
                            </div>
                            <div class="col-3">
                              <h6 class="text-gray">12%</h6>
                            </div>
                            <div class="col-2">
                              <h6 class="text-gray">30 AED</h6>
                            </div>
                          </div>
                          <div class="d-flex py-2 px-3">
                            <div class="col-3 ms-auto border-top pt-2">
                              <h6 class="text-gray">Subtotal</h6>
                            </div>
                            <div class="col-2 col-lg-3 border-top pt-2">
                              <h6 class="text-gray">280 AED</h6>
                            </div>
                          </div>
                          <div class="d-flex py-2 px-3">
                            <div class="col-3 ms-auto">
                              <h6 class="text-gray">Discount</h6>
                            </div>
                            <div class="col-2 col-lg-3">
                              <h6 class="text-gray">-56 AED</h6>
                            </div>
                          </div>
                          <div class="d-flex px-3">
                            <div class="col-5 col-lg-6 ms-auto">
                              <h6 class="text-gray font-size-12">Coupon: E12F5FF</h6>
                            </div>
                          </div>
                          <div class="d-flex py-2 px-3">
                            <div class="col-3 ms-auto border-top pt-2">
                              <h6>Total</h6>
                            </div>
                            <div class="col-2 col-lg-3 border-top pt-2">
                              <h6>224 AED</h6>
                            </div>
                          </div>
                        </div>
                        <div class="d-flex mt-4 mt-lg-5 px-3">
                          <div class="col-lg-5 offset-2 offset-lg-1"><img src="@/assets/images/barcode.png" alt=""></div>
                        </div>
                      </div>
                    </b-collapse>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import ProfileAccount from '@/components/account/ProfileAccount'

export default {
  name: 'IndexView',
  components: {
    ProfileAccount
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
